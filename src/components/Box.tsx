import Carousel from "react-bootstrap/Carousel";
import { slidImages } from "../utils/slider";

const Box = () => {
  return (
    <div className="min-w-min h-full">
      <Carousel>
        {slidImages.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img className="d-block w-100 h-40" src={slide.img} alt={slide.title} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Box;
