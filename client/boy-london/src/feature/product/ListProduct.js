import React, { useEffect, useState } from "react";
import "./index.css";
import ItemProduct from "../../components/ItemProduct";
import ItemOption from "../../components/ItemOption";
import request from "../../api/request";

const TYPE_SORT = {
  aToZ: 0,
  zToA: 1,
  // latest: 2,
  // popular: 3,
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

  const [listProducts, setListProducts] = useState([]);

  const onChangeSort = (typeSort) => {
    const index = listSorts.indexOf(typeSort);
    if (index !== -1) {
      const temp = [...listSorts];
      temp.pop(index);
      setListSorts(temp);
    } else {
      setListSorts([typeSort]);
      if (typeSort === TYPE_SORT.aToZ) {
        const temp = [...listProducts];
        temp.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        setListProducts(temp);
      } else {
        const temp = [...listProducts];
        temp.sort((a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
          return 0;
        });
        setListProducts(temp);
      }
    }
  };

  const onChangeCategory = (typeCategory) => {
    const index = listCategories.indexOf(typeCategory);
    if (index !== -1) {
      const temp = [...listCategories];
      temp.pop(index);
      setListCategories(temp);
    } else {
      setListCategories(listCategories.concat(typeCategory));
    }
  };

  const getData = async () => {
    try {
      const res = await request.get("/get-landing-page");
      setListProducts(res);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
            onPress={() => onChangeSort(TYPE_SORT.zToA)}
            isSelected={listSorts.includes(TYPE_SORT.zToA)}
          />
          {/* <ItemOption
            title="Latest"
            onPress={() => onChangeSort(TYPE_SORT.latest)}
            isSelected={listSorts.includes(TYPE_SORT.latest)}
          />
          <ItemOption
            title="Popular"
            onPress={() => onChangeSort(TYPE_SORT.popular)}
            isSelected={listSorts.includes(TYPE_SORT.popular)}
          /> */}
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
        {listProducts.map((item) => (
          <ItemProduct
            key={item.productID}
            image={item.image1}
            name={item.name}
            price={item.price}
            idProduct={item.productID}
            onPress={() => null}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
