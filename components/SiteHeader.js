import UploadModal from "./UploadModal";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="bg-black py-3 px-20 lg:flex space-y-3 lg:space-y-0 text-center lg:text-left text-gray-300 justify-between mb-2">
      {/* logo on the left side of nav */}
      <Link href="/">
        <a
          href=""
          className="font-extrabold text-xl text-white hover:text-green-300 hover:underline transform hover:scale-105 py-1 px-4"
        >
          Exotic Auto Collection
        </a>
      </Link>
      <div>
        {/* right side of nav nav-link */}
        <UploadModal />
        {/* The button that will open shopping cart */}
        <button className="snipcart-checkout ml-2 -mr-8 py-1 px-4 text-gray-200 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800 border-transparent border-2 hover:border-green-500">
          Financing
        </button>
      </div>
    </nav>
  );
}
