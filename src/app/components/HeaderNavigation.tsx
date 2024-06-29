import Link from 'next/link';
import Image from 'next/image';

const HeaderNavigation = () => {
  return (
    <header className=" py-6 mx-auto flex flex-col ">
      <div className=" flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Image src={'/blockChainLogo.png'} alt="logo" width={193} height={25} />
        </div>
        <nav>
          <ul className="flex space-x-8 xl:space-x-10">
            <li>
              <Link href="/exchange" className="hover:text-primary transition-colors">
                Exchange
              </Link>
            </li>
            <li>
              <Link href="/transactions" className="hover:text-primary transition-colors">
                Last Transactions
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-primary transition-colors">
                Help
              </Link>
            </li>
            <li>
              <Link href="/notifications" className="hover:text-primary transition-colors">
                Notifications
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 border border-primary rounded-tl-xl rounded-br-xl py-2 text-white hover:bg-primary/45 transition-colors ">
            LOG IN
          </button>
          <button className="px-4 py-2 bg-primary text-white hover:bg-primary/80 transition-colors  rounded-tl-xl rounded-br-xl">
            SIGN UP
          </button>
        </div>
      </div>
      <div className="text-center mt-32  max-w-2xl justify-center self-center flex flex-col">
        <h1 className="text-6xl font-normal mb-2">Easy send and Request Crypto.</h1>
        <div className="text-gray-400 py-5 self-center max-w-lg">
          Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in
          between.
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
