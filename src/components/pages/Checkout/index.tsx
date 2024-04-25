'use client';
import { useEffect } from 'react';

import CheckoutComponent from '@/components/parts/Checkout/CheckoutComponent';
import { clientKey, snapUrl } from '@/lib/constants/midtrans';

const Checkout = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = snapUrl || '';
    script.setAttribute('data-client-key', clientKey || '');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container py-10">
      <CheckoutComponent />
    </section>
  );
};

export default Checkout;
