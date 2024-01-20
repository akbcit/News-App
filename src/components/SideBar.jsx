import { useState, useEffect } from 'react';
import LaptopItem from './LaptopItem';
import '../styles/SideBar.scss';

function SideBar({ laptops }) {
  const [visibleLaptops, setVisibleLaptops] = useState([]);

  useEffect(() => {
    // Function to update visible laptops based on screen width
    const updateVisibleLaptops = () => {
      const screenWidth = window.innerWidth;
      const maxVisibleLaptops = screenWidth < 1024 ? 3 : laptops.length;
      setVisibleLaptops(laptops.slice(0, maxVisibleLaptops));
    };

    // Initial update
    updateVisibleLaptops();

    // Event listener for window resize
    window.addEventListener('resize', updateVisibleLaptops);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateVisibleLaptops);
    };
  }, [laptops]);

  return (
    <div className="side-bar">
      <div className="deal-today">
        <h2>Today's Deals</h2>
      </div>
      <div className="laptop-bar">
        {visibleLaptops.map((laptop, index) => (
          <LaptopItem key={`laptop-${index}`} laptop={laptop} laptopNum={index} />
        ))}
      </div>
      <h2 id="view-more">Visit <a href="#0">Our Shop</a> to View More!</h2>
    </div>
  );
}

export default SideBar;
