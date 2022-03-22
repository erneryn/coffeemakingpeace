import { FC } from 'react';
import { BsBackspace } from 'react-icons/bs';
import { Link } from 'react-scroll';

import UnstyledLink from '@/components/links/UnstyledLink';

interface props {
  closeDrawer: () => void;
}
const Drawer: FC<props> = ({ closeDrawer }) => {
  return (
    <div
      className='fixed right-0 top-0 z-30 overflow-y-hidden'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='h-screen w-screen  text-right sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-white bg-opacity-20 transition-opacity'
          aria-hidden='true'
          onClick={closeDrawer}
        ></div>
        <span
          className='hidden sm:inline-block sm:h-screen sm:align-middle'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div className='relative inline-block h-full w-6/12 transform overflow-hidden bg-black bg-opacity-80 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'>
          <div className='absolute bottom-0 right-0 mr-10 mb-20'>
            <BsBackspace size={40} color='white' onClick={closeDrawer} />
          </div>
          <div className='pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-16 text-left'>
                <UnstyledLink href='/' onClick={closeDrawer}>
                  <h1 className='hover:bg-green-text active:bg-green-text my-5 py-2 pl-4 text-xl font-bold text-white focus:outline-none focus:ring focus:ring-violet-300 '>
                    Home
                  </h1>
                </UnstyledLink>
                <UnstyledLink href='/stories' onClick={closeDrawer}>
                  <h1 className='hover:bg-green-text active:bg-green-text my-5 py-2 pl-4 text-xl font-bold text-white focus:outline-none focus:ring focus:ring-violet-300 '>
                    Stories
                  </h1>
                </UnstyledLink>
                <Link
                  to='sponsorship'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <h1 className='hover:bg-green-text active:bg-green-text my-5 py-2 pl-4 text-xl font-bold text-white focus:outline-none focus:ring focus:ring-violet-300 '>
                    Folks
                  </h1>
                </Link>
                <Link
                  to='footer'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <h1 className='hover:bg-green-text active:bg-green-text my-5 py-2 pl-4 text-xl font-bold text-white focus:outline-none focus:ring focus:ring-violet-300 '>
                    About
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
