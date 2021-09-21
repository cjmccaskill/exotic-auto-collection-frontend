import Image from "next/image";
import ModelA from "../public/30-model-a.jpg"
import Crew from "../public/55-Crew.jpg"
import Burb from "../public/54-GMC-burb.jpg"

export default function ImageBanner() {
  return (
    <section className="flex flex-col md:flex-row justify-center ">
      <div className="w-full -my-2">
        <Image src={ModelA} alt={""} />
      </div>
      <div className="w-full -my-2">
        <Image src={Crew} alt={""} />
      </div>
      <div className="w-full -my-2">
        <Image src={Burb} alt={""} />
      </div>
    </section>
  );
}
