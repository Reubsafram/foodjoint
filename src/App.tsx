import * as React from "react";
import "./App.css";
import rectangle10 from "./assets/rectangle10.svg";
import rectangle5 from "./assets/rectangle5.png";
import ellipse7 from "./assets/ellipse7.png";
import rectangle9 from "./assets/rectangle9.svg";
import ellipse71 from "./assets/ellipse71.png";
import rectangle4 from "./assets/rectangle4.png";
import rectangle7 from "./assets/rectangle7.png";
import rectangle1 from "./assets/rectangle1.svg";
import group2 from "./assets/group2.svg";
import rectangle8 from "./assets/rectangle8.png";
import rightSide from "./assets/rightSide.svg";
import rectangle3 from "./assets/rectangle3.svg";
import ellipse5 from "./assets/ellipse5.svg";
import rectangle41 from "./assets/rectangle41.png";
import ellipse4 from "./assets/ellipse4.svg";
import rectangle6 from "./assets/rectangle6.png";
import rectangle14 from "./assets/rectangle14.svg";
import restaurant from "./assets/restaurant.svg";
import vector from "./assets/vector.svg";
const App = () => {
  return (
    <div className="design-1">
      <div className="flex-container">
        <span className="num-941">9:41</span>
        <img className="rectangle-1" src={rectangle1} />
        <img className="right-side" src={rightSide} />
      </div>
      <span className="location">Location</span>
      <span className="east-legon">East Legon</span>
      <img className="rectangle-3" src={rectangle3} />
      <div className="flex-container-1">
        <span className="promos">PROMOS</span>
        <span className="view-all">View all</span>
      </div>
      <div className="flex-container-2">
        <img className="rectangle-4" src={rectangle4} />
        <img className="rectangle-4-1" src={rectangle41} />
      </div>
      <div className="flex-container-3">
        <img className="ellipse-4" src={ellipse4} />
        <img className="ellipse-5" src={ellipse5} />
        <img className="ellipse-6" src={ellipse5} />
      </div>
      <span className="view-all-1">View all</span>
      <span className="order-again">ORDER AGAIN</span>
      <div className="flex-container-4">
        <img className="rectangle-5" src={rectangle5} />
        <img className="rectangle-6" src={rectangle6} />
        <img className="rectangle-7" src={rectangle7} />
        <img className="rectangle-8" src={rectangle8} />
      </div>
      <div className="flex-container-5">
        <span>POPULAR THIS WEEK</span>
        <img className="rectangle-9" src={rectangle9} />
      </div>
      <div className="flex-container-6">
        <div className="flex-container-7">
          <img className="ellipse-7" src={ellipse7} />
          <img className="rectangle-10" src={rectangle10} />
        </div>
        <div className="flex-container-8">
          <img className="ellipse-71" src={ellipse71} />
          <img className="rectangle-14" src={rectangle14} />
        </div>
        <div className="flex-container-9">
          <img className="ellipse-71-1" src={ellipse71} />
          <div className="rectangle-15">
            <span className="barbeque-pizza">Barbeque Pizza </span>
            <span className="papas-pizza">Papa’s Pizza</span>
            <span>GHC 185.00</span>
          </div>
        </div>
      </div>
      <div className="flex-container-10">
        <img className="restaurant" src={restaurant} />
        <img className="vector" src={vector} />
        <img className="group-2" src={group2} />
      </div>
      <div className="flex-container-11">
        <span className="dishes">Dishes</span>
        <span>Restaurants</span>
        <span className="orders">Orders</span>
      </div>
    </div>
  );
};
export default App;
