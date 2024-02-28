import Box from "./Box";
import Address from "./Address";
import Products from "./Products";

const Home = () => {
  return (
    <div className="my-4">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-4/5 p-4">
          <Box />
        </div>
        <div className="w-full sm:w-1/4 p-3">
          <Address />
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;

