import { useLocation, Link } from "react-router-dom";

const Product = () => {
  const { state } = useLocation();
  const product = state.product;
  const handleBuyNow = (p: any) => {
    console.log("Buying", p);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {product && (
          <>
            <div className="mb-4 max-w-md mx-auto">
              <img
                src={product.img}
                alt={product.title}
                className="w-full max-w-sm h-auto object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.desc}</p>
              <p className="text-red-500 font-bold">Price: {product.price}</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Buy Now
              </button>
              <Link
                to="/Home"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Back
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
