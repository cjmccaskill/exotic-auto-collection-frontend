import Link from "next/link";

export default function CategoryButtons({ categories = [] }) {
  return (
    <div className="sm:flex sm:justify-center mx-auto mt-4 text-center">
      <div className="bg-white active:bg-green-400 text-gray-800 font-semibold py-1 pl-4 pr-3 border border-gray-400 hover:shadow-lg shadow-md rounded-t-md sm:rounded-l-xl sm:rounded-r-none">
        Categories -
      </div>

      {categories.map((category) => (
        <Link href={`/categories/${category.slug}`} key={category.id}>
          <a className=" bg-white focus:outline-none focus:bg-gray-800 focus:text-gray-200 text-gray-800 font-semibold py-1 px-4 border border-gray-400 hover:shadow-lg shadow-md transform hover:translate-x-0.5 hover:translate-y-0.5 transition-200 sm:last:rounded-r-xl">
            {category.slug}
          </a>
        </Link>
      ))}
    </div>
  );
}
