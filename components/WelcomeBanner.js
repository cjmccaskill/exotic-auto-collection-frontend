import Link from "next/link";

export default function WelcomeBanner() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-9 px-5 bg-white">
      <div className="text-2xl uppercase">
        welcome to exotic auto collection
      </div>
      <div className="border-b-2 border-black w-32 mx-auto mt-0 mb-5">
        &nbsp;
      </div>
      <div className="text-md font-light mb-3">
        Your premium source for{" "}
        <Link href={`/autos/currentinventory`}>
          <a className="hover:underline">exotic</a>
        </Link>{" "}
        vehicles. We’re located in Stillwater, Oklahoma, but we will ship our
        vehicles wherever you are, from Los Angeles to Miami to Dallas, Chicago,
        Nashville, and beyond.
      </div>
    </section>
  );
}
