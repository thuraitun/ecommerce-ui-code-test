import axios from "axios";
import { useEffect, useState } from "react";

const Deal = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
        'https://dummyjson.com/products?limit=6'
    );
    console.log(data.products);
    setProducts(data.products);
  };
  return (
    <div className="max-w-[1500px] mx-auto my-6">
      <div className="text-center">
        <h1 className="text-[40px] font-bold mb-3">Best Deal</h1>
        <p className="mb-4 text-xl">Just For You</p>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {products.map((product) => (
          <div className="" key={product.id}>
            <div className="bg-gray-300 px-12 rounded-lg">
              <div className="flex justify-center mb-6">
                <span className="bg-red-500 py-[2px] px-4 text-white ">
                  {product?.discountPercentage} Off
                </span>
              </div>
              <div className="">
                <img className="w-full h-[150px]" 
                  src={product?.thumbnail}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <h1 className="">{product?.title}</h1>
              <p className="">{product?.price *3000} MMK</p>
              <p className=" line-through">{product?.price *3000 + ((product?.discountPercentage*3000) / 100)} MMK</p>
              <div className="flex space-x-2 items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="">
                  <span className=" text-yellow-500">600 Points</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-6">
        <button className="flex px-20 py-2 items-center space-x-2 bg-gray-300 rounded-2xl">
            <span className="">View More</span>
            <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </button>
      </div>
    </div>
  );
};

export default Deal;