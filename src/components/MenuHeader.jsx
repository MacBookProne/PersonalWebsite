import React, { useEffect, useState } from "../../node_modules/react";
import "../css/menu-header.css";

const MenuHeader = ({ title, icon, clickFunction, currentMenu }) => {
  const [iconClasses, changeIconClasses] = useState("icon-about");
  const [headerTitleClasses, changeHeaderTitleClasses] = useState(
    "main-header-title"
  );

  useEffect(() => {
    determineIconClasses();
    determineHeaderTitleClasses();
    determineMenuClasses();
  }, []);

  const clickEventHandler = () => {
    clickFunction(title);
  };

  window.addEventListener(
    "resize",
    () => {
      console.log(window.innerWidth);
      determineIconClasses();
      determineHeaderTitleClasses();
    },
    false
  );

  const determineMenuClasses = () => {
    let classes = "menu-header ";
    if (title === currentMenu) {
      classes += "menu-highlighted ";
    }

    if (window.innerWidth * 0.7 < 600) {
      classes += "menu-header-small";
    }
    return classes;
  };

  const determineIconClasses = () => {
    let classes = "main-header-icon ";
    switch (title.toUpperCase()) {
      case "ABOUT":
        classes += "icon-about ";
        break;
      case "PROJECTS":
        classes += "icon-projects ";
        break;
      case "RESUME":
        classes += "icon-resume ";
        break;
    }

    if (window.innerWidth * 0.7 < 600) {
      classes += "icon-small";
    }
    changeIconClasses(classes);
  };

  const determineHeaderTitleClasses = () => {
    let classes = "main-header-title ";
    if (window.innerWidth * 0.7 < 600) {
      console.log("Small");
      classes += "header-title-small";
    }
    changeHeaderTitleClasses(classes);
  };

  let menuClasses = determineMenuClasses();

  const variable = (
    <div className={menuClasses} onClick={clickEventHandler}>
      <div className="main-header-wrapper" data-container="body">
        <div className={iconClasses}></div>
        <h3 className={headerTitleClasses}>{title}</h3>
      </div>
    </div>
  );

  return variable;
};

export default MenuHeader;
