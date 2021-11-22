import React, { useState } from "react";
import "./index.css";
import ItemProduct from "../../components/ItemProduct";
import ItemOption from "../../components/ItemOption";

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
  {
    id: 4,
    image:
      "https://www.logolynx.com/images/logolynx/74/740ef38ce219d8b589c7d898ad16227a.jpeg",
    name: "Product",
    price: "200,000d",
  },
];

const TYPE_SORT = {
  aToZ: 0,
  zToA: 1,
  latest: 2,
  popular: 3,
};

const TYPE_CATEGORY = {
  tops: 4,
  sweaters: 5,
  jeans: 6,
  accessories: 7,
};

const ListProduct = () => {
  const [listSorts, setListSorts] = useState([]);
  const [listCategories, setListCategories] = useState([]);

  const onChangeSort = (typeSort) => {
    console.log("hahah");
  };

  const onChangeCategory = (typeCategory) => {
    console.log("xin chao xin chao");
  };

  const onGoToDetailProduct = (productId) => {
    console.log("Go to detail: ", productId);
  };

  return (
    <div className="container">
      {/* option view */}
      <div className="optionView">
        {/* sort */}
        <div className="optionBox">
          <p className="titleOption">SORT</p>
          <ItemOption
            title="A to Z"
            onPress={() => onChangeSort(TYPE_SORT.aToZ)}
            isSelected={listSorts.includes(TYPE_SORT.aToZ)}
          />
          <ItemOption
            title="Z to A"
            onPress={() => onChangeSort(TYPE_SORT.aToZ)}
            isSelected={listSorts.includes(TYPE_SORT.zToA)}
          />
          <ItemOption
            title="Latest"
            onPress={() => onChangeSort(TYPE_SORT.aToZ)}
            isSelected={listSorts.includes(TYPE_SORT.latest)}
          />
          <ItemOption
            title="Popular"
            onPress={() => onChangeSort(TYPE_SORT.aToZ)}
            isSelected={listSorts.includes(TYPE_SORT.popular)}
          />
        </div>

        {/* category */}
        <div className="optionBox">
          <p className="titleOption">CATEGORY</p>
          <ItemOption
            title="Tops"
            onPress={() => onChangeCategory(TYPE_CATEGORY.tops)}
            isSelected={listCategories.includes(TYPE_CATEGORY.tops)}
          />
          <ItemOption
            title="Sweaters"
            onPress={() => onChangeCategory(TYPE_CATEGORY.sweaters)}
            isSelected={listCategories.includes(TYPE_CATEGORY.sweaters)}
          />
          <ItemOption
            title="Jeans"
            onPress={() => onChangeCategory(TYPE_CATEGORY.jeans)}
            isSelected={listCategories.includes(TYPE_CATEGORY.jeans)}
          />
          <ItemOption
            title="Accessories"
            onPress={() => onChangeCategory(TYPE_CATEGORY.accessories)}
            isSelected={listCategories.includes(TYPE_CATEGORY.accessories)}
          />
        </div>
      </div>

      {/* list product view */}
      <div className="listProductView">
        {data.map((item) => (
          <ItemProduct
            image={item.image}
            name={item.name}
            price={item.price}
            onPress={() => onGoToDetailProduct(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
