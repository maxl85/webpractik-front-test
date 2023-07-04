import Cover from '@/components/Cover';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
    {/* <main className='container'> */}
      <Cover />
      <div style={{height: '2500px'}}></div>
    {/* </main> */}
    </>
  );
}
