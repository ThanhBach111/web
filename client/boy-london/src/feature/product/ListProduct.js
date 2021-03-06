import React, { useEffect, useState } from "react";
import request from "../../api/request";
import ItemOption from "../../components/ItemOption";
import ItemProduct from "../../components/ItemProduct";
import Toastify from "../../utilities/useToastify";
import "./index.css";

const TYPE_SORT = {
  aToZ: 0,
  zToA: 1,
};

const TYPE_CATEGORY = {
  top: "Top",
  bottom: "Bottom",
  accessories: "Accessories",
};

const ListProduct = () => {
  const [listSorts, setListSorts] = useState([]);
  const [listCategories, setListCategories] = useState([]);

  const [oldList, setOldList] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  const onChangeSort = (typeSort) => {
    const index = listSorts.indexOf(typeSort);

    // press the indexing
    if (index !== -1) {
      const temp = [...listSorts];
      temp.pop(index);
      setListSorts(temp);
    }

    // press another type
    else {
      setListSorts([typeSort]);
      if (typeSort === TYPE_SORT.aToZ) {
        const temp = [...listProducts];
        temp.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
        setListProducts(temp);
      } else {
        const temp = [...listProducts];
        temp.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
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
      setListProducts(oldList);
    } else {
      setListCategories([typeCategory]);
      const temp = oldList.filter((item) => item.category === typeCategory);
      setListProducts(temp);
    }
  };

  const getData = async () => {
    try {
      const res = await request.get("/get-landing-page");
      setListProducts(res);
      setOldList(res);
    } catch (err) {
      Toastify.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(listProducts);

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
        </div>

        {/* category */}
        <div className="optionBox">
          <p className="titleOption">CATEGORY</p>
          <ItemOption
            title="Top"
            onPress={() => onChangeCategory(TYPE_CATEGORY.top)}
            isSelected={listCategories.includes(TYPE_CATEGORY.top)}
          />
          <ItemOption
            title="Bottom"
            onPress={() => onChangeCategory(TYPE_CATEGORY.bottom)}
            isSelected={listCategories.includes(TYPE_CATEGORY.bottom)}
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
