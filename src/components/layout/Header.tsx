import * as React from 'react';

import InstagramLogo from '@/components/icons/instagram';
import Logo from '@/components/icons/logo';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/stories', label: 'Stories' },
  { href: '/', label: 'Shop' },
  { href: '/', label: 'Folks' },
  { href: '/', label: 'About' }
];

export default function Header() {
  return (
    <header className='layout sticky top-0  z-50  flex w-full border-b-2 border-black bg-white'>
      <div className='relative mx-4 flex h-14 w-full items-center'>
        <UnstyledLink href='/' className='w-3/12 font-bold hover:text-gray-600'>
          <Logo />
        </UnstyledLink>
        <nav className='flex w-6/12 items-center justify-center'>
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
        <div className='flex w-3/12 flex-row justify-end'>
          <InstagramLogo />
        </div>
      </div>
    </header>
  );
}
