import Slider from "react-slick";
import { products } from "../utils/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center my-4">Trending Products</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 p-2 flex flex-col items-center justify-center"
          >
            <img
              src={product.img}
              alt={product.title}
              className="max-w-min h-32 rounded hover:scale-105 transition-all cursor-pointer"
              onClick={() => {
                navigate("/Product", { state: { product } });
              }}
            />
            <div className="text-center">
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.desc}</p>
              <p className="text-red-500 font-bold">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
