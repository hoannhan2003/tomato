// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu that includes a range of dishes made with the
        finest ingredients and culinary expertise. Our mission is to satisfy
        your cravings and enhance your dining experience, a famous fine dining
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((pre) =>
                  pre === item.menu_name ? "All" : item.menu_name)
              }
              key={index}
              className="explore-menu-list-item">
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image} alt=""/>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
