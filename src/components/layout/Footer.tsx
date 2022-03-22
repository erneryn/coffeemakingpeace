import UnderlineLink from '../links/UnderlineLink';
export default function Footer() {
  return (
    <div>
      <div className='w-full bg-black text-zinc-100'>
        <div className='mx-auto flex hidden w-11/12 text-zinc-500'>
          <span className='w-5/12 px-5 pt-4 text-xl'>About</span>
          <span className='w-4/12 px-5 pt-4 text-xl '>Contact</span>
          <span className='w-3/12 px-5 pt-4 text-xl '>Quick Link</span>
        </div>
        <div className='mx-auto w-11/12 sm:flex'>
          <div id='section-ft-1' className='p-5 sm:w-5/12'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              ducimus cum odio est fugit dolorum sunt recusandae saepe pariatur
              corporis aut velit, dignissimos eius, illo sit accusamus, quos
              architecto obcaecati!
            </p>
          </div>
          <div id='section-ft-2' className='w-4/12 p-5'>
            <div className='flex flex-col'>
              <span className='text-lg'>Email</span>
              <span className='text-sm'>info@coffeemakingpeace.com</span>
            </div>
            <div className='mt-2 flex flex-col'>
              <span className='text-lg'>Instagram</span>
              <UnderlineLink
                href='https://theodorusclarence.com'
                className='w-1/2 text-sm'
              >
                coffeemakingpeace
              </UnderlineLink>
            </div>
            <div className='mt-5'>Medan, Indonesia</div>
          </div>
          <div id='section-ft-3' className='flex w-3/12 flex-col p-5'>
            <UnderlineLink
              href='https://theodorusclarence.com'
              className='text-lg'
            >
              Stories
            </UnderlineLink>
            <UnderlineLink
              href='https://theodorusclarence.com'
              className='text-lg'
            >
              Shop
            </UnderlineLink>
            <UnderlineLink
              href='https://theodorusclarence.com'
              className='text-lg'
            >
              Folks
            </UnderlineLink>
            <UnderlineLink
              href='https://theodorusclarence.com'
              className='text-lg'
            >
              About
            </UnderlineLink>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <span className='text-sm'>© 2022, Coffeemakingpeace , by ern</span>
      </div>
    </div>
  );
}
