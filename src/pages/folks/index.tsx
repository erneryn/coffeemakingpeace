import {
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

// import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Profile = () => {
  return (
    <div>
      <Layout>
        <Seo />
        <div className='flex items-center justify-center'>
          <div className='mb-32 mt-10 w-3/4'>
            <div className='mb-14 flex'>
              <Image
                src='https://media-exp1.licdn.com/dms/image/C4E03AQHMguNJ-EhDFA/profile-displayphoto-shrink_200_200/0/1641361165656?e=1651708800&v=beta&t=ky4eMm2VFZ8NJFglszqsp26-G9p_jmlOb4YdI5ZSuks'
                alt=''
                height={325}
                width={275}
              />
              <ul className='ml-16'>
                <li className='mb-11'>
                  <h2>BAGUS HERU SETIAWAN</h2>
                  <p className='mt-4 font-bold'>Coffee Roaster</p>
                </li>
                <li className='mb-5'>
                  <p>Company</p>
                  <p className='font-bold'>
                    Espresso Lab, Dubai , United Arab Emirates
                  </p>
                </li>
                <li className='mb-5'>
                  <p>Email</p>
                  <p className='font-bold'>bagusheru@coffeemakingpeace.com</p>
                </li>
                <li>
                  <p>Social Media</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color='#707070'
                      size='2x'
                      className='instagram mr-3'
                    />
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      color='#707070'
                      size='2x'
                      className='twitter'
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-12'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
                <br />
                <br />
                <br />
                <h2>Achievments</h2>
                <br />
                1. ratione voluptatem sequi nesciunt
                <br />
                2. ratione voluptatem sequi nesciunt
                <br />
                3. ratione voluptatem sequi nesciunt
              </h4>
              <div className='flex w-full justify-between'>
                <Image
                  src='https://images.pexels.com/photos/7657865/pexels-photo-7657865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  width={275}
                  height={325}
                  alt='1'
                />
                <Image
                  src='https://images.pexels.com/photos/6007665/pexels-photo-6007665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  width={325}
                  height={325}
                  alt='1'
                />
                <Image
                  src='https://images.pexels.com/photos/7657865/pexels-photo-7657865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  width={325}
                  height={325}
                  alt='1'
                />
              </div>
            </div>
            {/* <div className='flex w-screen items-center'>
              <hr className='h-0.5 w-1/6 border-none bg-black' />
              <button className='mx-8 min-w-fit text-3xl font-bold'>
                BACK
              </button>
            </div> */}
          </div>
        </div>
        <div className='w-100 flex items-center pb-48'>
          <hr className='h-0.5 w-1/6 border-none bg-black' />
          <button className='mx-8 min-w-fit text-3xl font-bold'>
            <Link href='/'>BACK</Link>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
