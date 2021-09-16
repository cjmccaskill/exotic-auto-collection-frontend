import Link from "next/link";

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="container flex justify-center flex-wrap mx-auto gap-2 mt-4">
      <Link href={'/'}>
        <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">All</a>
      </Link>
      {categories.map((category) => (
        <Link href={`/categories/${category.slug}`} key={category.id}>
          <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {category.slug}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
