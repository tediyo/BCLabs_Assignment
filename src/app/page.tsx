import Image from 'next/image';
import HeaderNavigation from './components/HeaderNavigation';
import CryptoTable from './components/CryptoTable';
import CryptoExchange from './components/CryptoExchange';

export default function Home() {
  return (
    <main className="background-top bg-black flex justify-center  text-white  w-screen h-screen ">
      <div className="container ">
        <HeaderNavigation />
        <CryptoTable />
        <CryptoExchange />
      </div>
    </main>
  );
}
