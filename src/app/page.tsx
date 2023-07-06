import About from '@/components/About';
import Carousel from '@/components/Carousel';
import Cover from '@/components/Cover';
import Delivery from '@/components/Delivery';
import Promo from '@/components/Promo';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
    {/* <main className='container'> */}
      <Cover />
      <Promo />
      <Carousel />
      <Delivery />
      <About />
      {/* <div style={{height: '2500px'}}></div> */}
    {/* </main> */}
    </>
  );
}
