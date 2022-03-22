import * as React from 'react';
import { FaBars } from 'react-icons/fa';

import InstagramLogo from '@/components/icons/instagram';
import Logo from '@/components/icons/logo';
import UnstyledLink from '@/components/links/UnstyledLink';

import Drawer from './drawer';

const links = [
  { href: '/stories', label: 'Stories' },
  { href: '/', label: 'Shop' },
  { href: '/', label: 'Folks' },
  { href: '/', label: 'About' }
];

export default function Header() {
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  return (
    <header className='layout sticky top-0  z-50  flex w-full border-b-2 border-black bg-white'>
      <div className='relative mx-4 flex h-14 w-full items-center justify-between'>
        <UnstyledLink href='/' className='w-3/12 font-bold hover:text-gray-600'>
          <Logo />
        </UnstyledLink>
        <FaBars
          className='sm:hidden'
          onClick={() => setShowDrawer(true)}
          size={30}
        />
        <nav className='hidden w-6/12 items-center justify-center sm:flex'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='mx-4 hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='hidden w-3/12 flex-row justify-end sm:flex'>
          <InstagramLogo />
        </div>
      </div>
      {showDrawer && <Drawer closeDrawer={() => setShowDrawer(false)} />}
    </header>
  );
}
