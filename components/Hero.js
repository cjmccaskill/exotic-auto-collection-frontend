import Link from "next/link";
import Video from "./Video";

export default function Hero() {
  return (
    <div className="relative">
      <Video />
      <div className="absolute bg-black bg-opacity-30 inset-0 flex flex-col place-content-center text-center text-white uppercase">
        <div>Your Premier Source For Exotic Vehicles</div>
        <Link href="/autos/currentinventory">
          <a className="hover:bg-black hover:bg-opacity-40 hover:border-green-400 border-2 border-white mt-4 mx-auto py-4 px-8 ">
            Shop Inventory
          </a>
        </Link>
      </div>
    </div>
  );
}
