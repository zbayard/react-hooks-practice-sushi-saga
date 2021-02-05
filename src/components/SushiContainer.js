import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, moreSushi, handleSushi}) {

  // Filter through our sushi prop to see if the isRemoved state is tru or false
  // if it's true, render those sushi objects as table components
  // if it's false, render those sushi objects as sushi components


  function removeSushi(sushiToRemove, sushiPrice){
    handleSushi(sushiToRemove, sushiPrice)
  }

  
  

 
  

  const sushiObjects = sushi.map((sushi) => {
    return <Sushi key={sushi.name} id={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} removeSushi={removeSushi} />
  })
  return (
    <div className="belt">
      {sushiObjects}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
