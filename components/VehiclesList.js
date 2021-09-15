import NextImage from "./Image";
import Link from "next/link";


const VehiclesList = ({ autos }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {autos.map((_auto) => (
        <div
          key={auto.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/autos/${auto.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={auto.image} />
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {auto.title}
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_auto.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

// <div className="p-10">
//   {autos.length > 0 ? (
//     <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5">
//       {autos.map((auto) => (
//         <Link href={`/autos/${_auto.slug}`} key={auto.id}>
//           <a>
//             <autoImage url={auto.image.url} alt={auto.title} />
//           </a>
//         </Link>
//       ))}
//     </div>
//   ) : (
//     <div className="text-lg text-gray-400">
//       Loading current inventory...
//     </div>
//   )}
// </div>

// function autoImage({ url }) {
//   return (
//     <div>
//       {/* image itself */}
//       <div className="relative">
//         {/* image shadow */}
//         <div className="absolute h-full w-full -right-2 -bottom-2 bg-black rounded-lg"></div>
//         <img
//           src={`https://exotic-auto-collection-backend-m6l5e.ondigitalocean.app${url}`}
//           alt={""}
//           className="relative rounded-lg transform hover:translate-x-1 hover:translate-y-1 transition"
//         />
//       </div>
//     </div>
//   );
// }

export default VehiclesList;
