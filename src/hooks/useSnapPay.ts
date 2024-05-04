/* eslint-disable no-unused-vars */
import { redirect } from 'next/navigation';
import { create } from 'zustand';

import { ORDER_STATUS } from '@/lib/constants/orders';
import { updateOrder } from '@/repositories/order';
import { SuccessPaymentResponse } from '@/types/midtrans';

type OptionsType = {
  onSuccess?: (result: SuccessPaymentResponse) => void;
  onPending?: (result: SuccessPaymentResponse) => void;
  onClose?: () => void;
  onError?: (error: any) => void;
};

type SnapPayState = {
  snapPay: (paymentToken: string, options?: OptionsType) => void;
};

export const useSnapPayState = create<SnapPayState>()(() => ({
  snapPay: (paymentToken: string, options) => {
    window.snap.pay(paymentToken, {
      onSuccess: async (result: SuccessPaymentResponse) => {
        const payload = {
          orderId: +result.order_id,
          status: ORDER_STATUS.PAID,
          paymentMethod: result.payment_type,
        };

        await updateOrder(payload);
      },
      ...options,
    });
  },
}));

export const useSnapPay = () => {
  const { snapPay } = useSnapPayState();

  return { snapPay };
};
