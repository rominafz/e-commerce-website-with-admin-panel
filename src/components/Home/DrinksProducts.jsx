import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import drinksCategory from "../../assets/images/drinks.png";
import Product from "./Product";
import Loading from "../Loading/Loading";
const DrinksProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    let array = [];
    for (let i in products) {
      if (products[i].category === "drinks") {
        array.push(products[i]);
      }
    }
    setDrinks(array);
    console.log(drinks);
  }, [products]);
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 2 },
    { width: 480, itemsToShow: 2, itemsToScroll: 2 },
    { width: 576, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 992, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1400, itemsToShow: 4, itemsToScroll: 4 },
  ];
  return (
    <>
      {drinks.length > 0 ? (
        <div className="slider-container">
          <div className="slider-container__images">
            <h2 className="slider-container__images__title">نوشیدنی</h2>
            <img
              src={drinksCategory}
              alt="drinksCategory"
              className="slider-container__images__img"
            />
          </div>
          <Carousel
            breakPoints={breakPoints}
            disableArrowsOnEnd={false}
            pagination={false}
            isRTL={true}
            // {...settings}
            className="slider-container____sliders"
          >
            {drinks?.map((item, index) => {
              return (
                <Product
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
          </Carousel>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DrinksProducts;