import Image from "./Image";
import Link from "next/link";

export default function VehiclesList({ autos }) {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-4">
      {autos.map((auto) => (
        <div
          key={auto.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/autos/${auto.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <Image media={auto.image} />
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {auto.title}
                </h4>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}


