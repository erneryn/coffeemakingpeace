import Image from 'next/image';
import * as React from 'react';

// import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Profile = () => {
  return (
    <div>
      <Layout>
        <Seo />
        <div>
          <div className='mb-14 flex'>
            <Image
              src='data:image/jpeg;base64,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'
              alt=''
              height={400}
              width={350}
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
                <div></div>
              </li>
            </ul>
          </div>
          <div className='mb-44'>
            <h4 className='mb-12'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </h4>
            <ol className='mb-10'>
              <li>
                <h2>Achievments</h2>
              </li>
              <ol className='mt-10 list-decimal'>
                <li>ratione voluptatem sequi nesciunt</li>
                <li>ratione voluptatem sequi nesciunt</li>
                <li>ratione voluptatem sequi nesciunt</li>
                <li>ratione voluptatem sequi nesciunt</li>
              </ol>
            </ol>
          </div>
          <div className='dow absolute flex w-full items-center justify-center'>
            <hr className='h-0.5 w-1/6 border-none bg-white' />
            <button className='mx-8 min-w-fit text-lg font-bold'>BACK</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
