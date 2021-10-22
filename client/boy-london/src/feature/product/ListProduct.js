import React from "react";
import "./index.css";
import ItemProduct from "../../components/ItemProduct";

const data = [
  {
    id: 0,
    image:
      "https://i.pinimg.com/564x/20/6a/7b/206a7b1acab097f8b864497c81d05b66.jpg",
    name: "Product",
    price: "200,000d",
  },
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/20/6a/7b/206a7b1acab097f8b864497c81d05b66.jpg",
    name: "Product",
    price: "200,000d",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/564x/20/6a/7b/206a7b1acab097f8b864497c81d05b66.jpg",
    name: "Product",
    price: "200,000d",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/20/6a/7b/206a7b1acab097f8b864497c81d05b66.jpg",
    name: "Product",
    price: "200,000d",
  },
];

const ListProduct = () => {
  return (
    <div className="listProductContainer">
      {data.map((item) => (
        <ItemProduct image={item.image} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default ListProduct;
