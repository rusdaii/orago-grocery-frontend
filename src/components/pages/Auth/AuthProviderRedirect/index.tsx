'use client';

import { FC } from 'react';

import { useSearchParams } from 'next/navigation';

type AuthProviderRedirectProps = {
  provider: string;
};

const AuthProviderRedirect: FC<AuthProviderRedirectProps> = ({ provider }) => {
  const params = useSearchParams();

  console.log(params.toString());

  console.log(provider);

  return <div className="container">AuthProviderRedirect</div>;
};

export default AuthProviderRedirect;
