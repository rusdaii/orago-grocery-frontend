import Image from 'next/image';

import { Link } from '@/components/parts/Link';
import SocialMedia from '@/components/parts/SocialMedia';
import { FooterLink } from '@/lib/constants/FooterLink';

const cta = [
  {
    targetName: 'App Store',
    icon: '/icons/apple-logo.svg',
    size: 'w-9 h-9',
  },
  {
    targetName: 'Google Play',
    icon: '/icons/google-play-store.svg',
    size: 'w-8 h-8',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 w-full">
      <div className="container flex items-center flex-col xl:flex-row gap-20 py-20">
        <div className="flex flex-col gap-3 max-w-xs">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={100} />
          </Link>

          <p className=" text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <SocialMedia />
        </div>

        <div className="flex gap-16">
          {FooterLink.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h1 className="text-white font-semibold">{item.name}</h1>
              <span className="border-b-[2px] border-primary w-10" />
              {item.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-white font-semibold">Download Mobile App</h1>
          <span className="border-b-[2px] border-primary w-10" />
          <div className="flex gap-3">
            {cta.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-2 bg-gray-800 p-3 rounded-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.targetName}
                  width={50}
                  height={50}
                  className={item.size}
                />
                <span className="flex flex-col text-start">
                  <h2 className="text-gray-400">Download on the</h2>
                  <h2 className="text-white">{item.targetName}</h2>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-[1.2px] border-gray-700">
        <div className="container flex justify-between items-center py-5">
          <h1 className="text-gray-500 text-sm">
            Grocery &copy; {year}. All Rights Reserved
          </h1>
          <h1 className="text-white">Copyright &copy; 2022</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
