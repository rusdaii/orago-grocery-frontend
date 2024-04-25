import fetcher from '@/lib/fetcher';

import {
  AuthResponse,
  ChangePasswordPayload,
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  ResetPasswordPayload,
  SignInPayload,
  SignUpPayload,
} from './types';

export const register = async ({
  fullName,
  username,
  email,
  password,
}: SignUpPayload) => {
  const response = await fetcher<AuthResponse>({
    url: '/auth/local/register',
    method: 'POST',
    body: JSON.stringify({ fullName, username, email, password }),
  });

  return response;
};

export const login = async ({ email, password }: SignInPayload) => {
  const response = await fetcher<AuthResponse>({
    url: '/auth/local',
    method: 'POST',
    body: JSON.stringify({ identifier: email, password }),
  });

  return response;
};

export const changePassword = async (payload: ChangePasswordPayload) => {
  const response = await fetcher<AuthResponse>({
    url: '/auth/change-password',
    method: 'POST',
    body: JSON.stringify({ ...payload }),
  });

  return response;
};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const response = await fetcher<ForgotPasswordResponse>({
    url: '/auth/forgot-password',
    method: 'POST',
    body: JSON.stringify({ ...payload }),
  });
  return response;
};

export const resetPassword = async (payload: ResetPasswordPayload) => {
  const response = await fetcher({
    url: '/auth/reset-password',
    method: 'POST',
    body: JSON.stringify({ ...payload }),
  });

  return response;
};
