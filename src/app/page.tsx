import About from '@/components/About';
import Carousel from '@/components/Carousel';
import Cart from '@/components/Cart';
import Catalog from '@/components/Catalog';
import Cover from '@/components/Cover';
import Delivery from '@/components/Delivery';
import Instagram from '@/components/Instagram';
import Promo from '@/components/Promo';

export default function Home() {
  return (
    <>
      <Cover />
      <Promo />
      <Carousel />
      <Catalog />
      <Delivery />
      <About />
      <Instagram />
      <Cart />
    </>
  );
}
