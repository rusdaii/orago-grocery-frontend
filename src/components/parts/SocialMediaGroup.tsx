import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

const SocialMediaGroup = () => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-gray-600 hover:bg-primary 
        hover:text-white transition-colors ease-in-out duration-300"
      >
        <FaFacebookF className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-gray-600 hover:bg-primary 
        hover:text-white transition-colors ease-in-out duration-300"
      >
        <FaInstagram className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-gray-600 hover:bg-primary 
        hover:text-white transition-colors ease-in-out duration-300"
      >
        <FaXTwitter className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SocialMediaGroup;
