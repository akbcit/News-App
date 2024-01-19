import "../styles/SideBar.css";
import LaptopItem from "./LaptopItem";
import "animate.css";

function SideBar({ laptops }) {
  return (
    <div className="side-bar">
      <div className="deal-today">
        <h2
          className="animate__animated
                        animate__swing 
                        animate__delay-1s
                        animate__infinite"
        >
          Today's Deal
        </h2>
      </div>
      <div className="laptop-bar">
        {laptops.map((laptop, index) => {
          return (
            <LaptopItem
              key={`laptop-${index}`}
              laptop={laptop}
              laptopNum={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
