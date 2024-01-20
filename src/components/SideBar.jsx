/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import LaptopItem from './LaptopItem';
import '../styles/SideBar.scss';

function SideBar({ laptops }) {
  // state for managing visible laptops in the sidebar
  const [visibleLaptops, setVisibleLaptops] = useState([]);

  useEffect(() => {
    // function to update visible laptops based on screen width
    const updateVisibleLaptops = () => {
      const screenWidth = window.innerWidth;
      // sets the number of laptops to display based on screen width
      const maxVisibleLaptops = screenWidth < 1024 ? 3 : laptops.length;
      // updates the visible laptops based on the calculated limit
      setVisibleLaptops(laptops.slice(0, maxVisibleLaptops));
    };

    // perform an initial update of visible laptops
    updateVisibleLaptops();

    // event listener for window resize to dynamically adjust visible laptops
    window.addEventListener('resize', updateVisibleLaptops);

    // cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateVisibleLaptops);
    };
  }, [laptops]); // dependency array includes laptops to update when the prop changes

  return (
    <div className="side-bar">
      <div className="deal-today">
        <h2>Today&apos; Deals</h2>
      </div>
      <div className="laptop-bar">
        {/* mapping over visible laptops to render them */}
        {visibleLaptops.map((laptop, index) => (
          <LaptopItem key={`laptop-${index}`} laptop={laptop} laptopNum={index} />
        ))}
      </div>
      <h2 id="view-more">Visit <a href="#0">Our Shop</a> to View More!</h2>
    </div>
  );
}

export default SideBar;