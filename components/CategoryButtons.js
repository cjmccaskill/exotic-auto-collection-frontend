import Link from "next/link";

export default function CategoryButtons({ categories = [] }) {
  return (
    <div className=" container flex justify-center flex-wrap mx-auto gap-2 mt-4">
      <Link href={"/"}>
        <a className="bg-white focus:outline-none focus:bg-green-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl hover:shadow-lg shadow-md transform hover:translate-x-0.5 hover:translate-y-0.5 transition-200">
          All
        </a>
      </Link>
      {categories.map((category) => (
        <Link href={`/categories/${category.slug}`} key={category.id}>
          <a className=" bg-white focus:outline-none focus:bg-green-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl hover:shadow-lg shadow-md transform hover:translate-x-0.5 hover:translate-y-0.5 transition-200">
            {category.slug}
          </a>
        </Link>
      ))}
    </div>
  );
}
