import React, {useState} from "react";

function Sushi({id, name, img_url, price, removeSushi}) {


  const [isRemoved, setIsRemoved] = useState(false)

  function sushiToRemove(){
    setIsRemoved(!isRemoved)
    removeSushi(id, price)

    // setWallet = wallet - price
    
  }
  

  
  return (
    <div className="sushi" id={id}>
      <div className="plate" onClick={sushiToRemove}>
          {isRemoved ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
