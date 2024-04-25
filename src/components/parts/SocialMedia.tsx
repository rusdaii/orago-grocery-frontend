import {
  FaceIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import { Link } from '@/components/parts/Link';
import { Button } from '@/components/ui/button';
import { socialMedia } from '@/lib/constants/socialMedia';
import { cn } from '@/lib/utils';

type SocialMedia = {
  name: string;
  href: string;
};

type SocialMediaProps = {
  className?: string;
  background?: 'light' | 'dark';
};
const SocialMedia = ({ className, background }: SocialMediaProps) => {
  return (
    <div className={cn('flex gap-3', className)}>
      {socialMedia.map((item: SocialMedia, index) => {
        let icon;

        const size = 'w-6 h-6';

        switch (item.name) {
          case 'Facebook':
            icon = <FaceIcon className={size} />;
            break;

          case 'Instagram':
            icon = <InstagramLogoIcon className={size} />;
            break;

          case 'Twitter':
            icon = <TwitterLogoIcon className={size} />;
            break;

          default:
            break;
        }

        return (
          <Button
            key={index}
            size="icon"
            className={`rounded-full hover:bg-primary hover:text-background 
            transition-colors duration-300 ease-in-out ${
              background === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}
            variant="ghost"
          >
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {icon}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMedia;
