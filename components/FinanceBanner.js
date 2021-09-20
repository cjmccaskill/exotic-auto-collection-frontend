import Link from "next/link";

export default function Finance() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-9 px-5 bg-white">
      <div className="text-2xl uppercase">custom financing options</div>
      <div className="border-b-2 border-black w-32 mx-auto mt-0 mb-5">
        &nbsp;
      </div>
      <div className="text-md font-light mb-3">
        Your premium source for vehicles. We’re located in Stillwater, Oklahoma,
        but we will ship our vehicles wherever you are, from Los Angeles to
        Miami to Dallas, Chicago, Nashville, and beyond.
      </div>
      <Link href="/financeform" passHref>
        <button className="focus:bg-gray-300 focus:outline-none bg-gray-800 text-gray-100 focus:text-gray-800 font-medium text-sm py-3 px-7 border border-gray-400 hover:shadow-lg shadow-md transform hover:translate-x-0.5 hover:translate-y-0.5 transition-200 rounded uppercase">
          apply today
        </button>
      </Link>
    </section>
  );
}
