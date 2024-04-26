import AuthProviderRedirect from '@/components/pages/Auth/AuthProviverRedirect';

type Params = {
  params: {
    provider: string;
  };
};

const AuthProvider = ({ params }: Params) => {
  const { provider } = params;

  return <AuthProviderRedirect provider={provider} />;
};

export default AuthProvider;
