import UploadModal from "./UploadModal";

export default function SiteHeader() {
  return (
    <nav className="bg-black py-3 px-20 lg:flex space-y-3 lg:space-y-0 text-center lg:text-left text-gray-300 justify-between">
      {/* logo on the left side of nav */}
      <a href="" className="font-extrabold text-xl text-white">
        Exotic Auto Collection
      </a>
      <div>
        {/* right side of nav nav-link */}
        <a href="" className="py-4 px-6 focus:text-green-400">
          Login/Signup
        </a>
        <UploadModal />
      </div>
    </nav>
  );
}
