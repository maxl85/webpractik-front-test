import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className='container'>
      <h1 className={styles.h}>Hello</h1>
    </main>
  );
}
