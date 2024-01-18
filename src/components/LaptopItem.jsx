
function LaptopItem({laptop, laptopNum}) {
    return (
        <div className="laptop-item">
            <img src={laptop.model_resources.thumbnail}
                alt={laptop.model_info.name} />
            <div className="laptop-name"><h4>{laptop.model_info[0].name}</h4> </div>
            <div className="laptop-price"> <h3>${laptop.config_price}</h3>  </div>
        </div>
    )
    
}

export default LaptopItem;