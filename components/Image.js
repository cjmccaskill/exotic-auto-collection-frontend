import { getStrapiMedia } from "../utils/media";
import Image from "next/image";

const VehicleImage = (props) => {
  if (!props.media) {
    return <Image {...props} alt={"image of a vehicle"} />;
  }

  const { url, alternativeText } = props.media;

  const loader = ({ src }) => {
    return getStrapiMedia(src);
  };

  return (
    <Image
      loader={loader}
      layout="responsive"
      // objectFit="contain"
      width={props.media.width}
      height={props.media.height}
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default VehicleImage;
