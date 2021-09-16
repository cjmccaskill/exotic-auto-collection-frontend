import UploadModal from "./UploadModal";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="bg-black py-3 px-20 lg:flex space-y-3 lg:space-y-0 text-center lg:text-left text-gray-300 justify-between">
      {/* logo on the left side of nav */}
      <Link href="/">
        <a href="" className="font-extrabold text-xl text-white hover:text-green-400">
          Exotic Auto Collection
        </a>
      </Link>
      <div>
        {/* right side of nav nav-link */}
        <UploadModal />
        {/* The button that will open shopping cart */}
        <button
          className="snipcart-checkout ml-2 -mr-8 py-1.5 px-4 bg-white text-gray-700 rounded-full focus:outline-none focus:bg-green-400 focus:text-gray-800"
        >
          Purchase
        </button>
      </div>
    </nav>
  );
}
