'use client';
import { usePathname } from 'next/navigation';

import Contact from '@/components/parts/Contact/Contact';
import NewsletterForm from '@/components/parts/Form/NewsletterForm';
import SocialMedia from '@/components/parts/SocialMedia';

const BeforeFooter = () => {
  const path = usePathname();

  if (path === '/') {
    return <Contact />;
  }

  return (
    <section className="w-full bg-gray-50 py-12 mt-12 ">
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-32 container">
        <div className="text-center lg:text-start">
          <h1 className="font-bold text-2xl">Subcribe our Newsletter</h1>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            asperiores veniam expedita, animi a tenetur totam incidunt soluta
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:gap-16 lg:w-full">
          <NewsletterForm />
          <SocialMedia background="light" />
        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;
