export default function Home({ autos }) {
  return (
    <div className="p-10">
      {autos.length > 0 ? (
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5">
          {autos.map((auto) => (
            <Image url={auto.image.url} alt={auto.title} key={auto.id} />
          ))}
        </div>
      ) : (
        <div className="text-lg text-gray-400">
          Loading current inventory...
        </div>
      )}
    </div>
  );
}

function Image({ url }) {
  return (
    <div>
      {/* image itself */}
      <div className="relative">
        {/* image shadow */}
        <div className="absolute h-full w-full -right-2 -bottom-2 bg-black rounded-lg"></div>
        <img
          src={`https://exotic-auto-collection-backend-m6l5e.ondigitalocean.app${url}`}
          alt={""}
          className="relative rounded-lg transform hover:translate-x-1 hover:translate-y-1 transition"
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://exotic-auto-collection-backend-m6l5e.ondigitalocean.app/autos"
  );
  const autos = await res.json();

  return { props: { autos } };
}
