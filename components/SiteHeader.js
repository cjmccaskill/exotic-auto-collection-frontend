import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="bg-black md:mt-0 py-3 px-8 lg:px-20 flex flex-col md:flex-row space-y-3 md:space-y-0 text-center md:text-left text-gray-300 md:justify-between items-center">
      {/* logo on the left side of nav */}
      <Link href="/">
        <a
          href=""
          className="font-extrabold text-lg md:text-xl text-white hover:text-green-300 hover:underline transform hover:scale-105 py-1 md:px-4"
        >
          Exotic Auto Collection
        </a>
      </Link>

      {/* right side of nav nav-link */}
      <div className="flex justify-center">
        <Link href="/autos/currentinventory">
          <a className="py-2 px-4 text-gray-200 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800 border-transparent border-2 hover:border-green-500">
            Inventory
          </a>
        </Link>
        {/* The button that will open finance form */}
        <Link href="/financeform" passHref>
          <button
            className="py-1 px-4 text-gray-200 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800 border-transparent border-2 hover:border-green-500"
          >
            Financing
          </button>
        </Link>
        {/* The button that will open shopping cart */}
        <button className="snipcart-checkout lg:-mr-8 py-1 px-4 text-gray-200 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800 border-transparent border-2 hover:border-green-500">
          Purchase
        </button>
      </div>
    </nav>
  );
}
