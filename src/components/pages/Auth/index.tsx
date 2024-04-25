import dynamic from 'next/dynamic';
import Image from 'next/image';

import signInIllustration from '@/assets/illustrations/sign_in.svg?url';
import signUpIllustration from '@/assets/illustrations/sign_up.svg?url';
const SigninForm = dynamic(() => import('@/components/parts/Form/SigninForm'));
const SignupForm = dynamic(() => import('@/components/parts/Form/SignupForm'));
import { Link } from '@/components/parts/Link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

type AuthProps = {
  page: 'login' | 'register';
};

const Auth = ({ page }: AuthProps) => {
  return (
    <div className="w-full pt-16 flex justify-center items-center">
      <Card className="w-full max-w-md">
        <Image
          src={page === 'login' ? signInIllustration : signUpIllustration}
          width={800}
          height={800}
          quality={100}
          alt="Sign in Illustration"
          className="w-[250px] h-[250px] mx-auto"
        />
        <CardHeader>
          <h1 className="text-2xl font-semibold text-center">
            {page === 'login' ? 'Sign in' : 'Sign up'}
          </h1>
        </CardHeader>
        <CardContent>
          {page === 'login' ? (
            <SigninForm buttonVariant="default" />
          ) : (
            <SignupForm buttonVariant="default" />
          )}
        </CardContent>
        <CardFooter className="flex items-center">
          {page === 'login' ? (
            <>
              <p className="text-sm w-full">
                Don&apos;t have an account?{' '}
                <Link
                  href="/register"
                  className="text-secondary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="text-sm w-full">
                Already have an account?{' '}
                <Link href="/login" className="text-secondary hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
