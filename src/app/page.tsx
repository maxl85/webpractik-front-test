import Carousel from '@/components/Carousel';
import Cover from '@/components/Cover';
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
      <div style={{height: '2500px'}}></div>
    {/* </main> */}
    </>
  );
}
