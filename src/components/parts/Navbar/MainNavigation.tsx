'use client';

import Image from 'next/image';

import { Link } from '@/components/parts/Link';
import Searchbar from '@/components/parts/LiveSearch/Searchbar';
import ShoppingCartSidebar from '@/components/parts/ShoppingCart/ShoppingCartSidebar';
import WishlistSidebar from '@/components/parts/Wishlist/WishlistSidebar';

import MobileSidebar from './Sidebar/MobileSidebar/MobileSidebar';
import UserSidebar from './Sidebar/UserSidebar/UserSidebar';

export type UserAccountProps = {
  id: number;
  name: string;
  email: string;
  jwt: string;
};

const MainNavigation = ({ user }: { user: UserAccountProps | undefined }) => {
  return (
    <div className="flex justify-between items-center container py-4 bg-background">
      <MobileSidebar />

      <Link href="/" className="hidden lg:block">
        <Image src="/logo.svg" alt="logo" width={150} height={100} />
      </Link>

      <div className="w-full lg:w-1/2 px-3">
        <Searchbar className="" />
      </div>

      <div className="flex items-center">
        <div className="flex gap-2 items-center lg:divide-x-2">
          <WishlistSidebar userId={user?.id} />

          <div className="flex pl-2 gap-3">
            <ShoppingCartSidebar userId={user?.id} />

            <UserSidebar className="hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
