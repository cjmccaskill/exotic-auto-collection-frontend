import Image from "next/image";
import Mustang from "../public/ford-mustang.jpg";
import Camaro from "../public/69-chevrolet-camaro.jpeg";
import Coe from "../public/55-chevrolet-5400-COE-02.jpg";

export default function ImageBanner() {
  return (
    <section className="flex flex-col md:flex-row">
      <Image src={Mustang} alt={""} />
      <Image src={Camaro} alt={""} />
      <Image src={Coe} alt={""} />
    </section>
  );
}
