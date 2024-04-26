import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';

const GoogleAuthButton = () => {
  return (
    <a href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/connect/google`}>
      <Button
        type="button"
        className="w-full bg-white text-gray-600 hover:bg-gray-50 flex items-center"
      >
        <FcGoogle />
        <span className="ml-2">Continue with Google</span>
      </Button>
    </a>
  );
};

export default GoogleAuthButton;
