import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";





function App() {

  const [sushiState, setSushiState]= useState([])
  const [limit, setLimit]= useState(0)
  const [plates, setPlates]= useState([])
  const [wallet, setWallet]= useState(69)

  useEffect(()=>{
    fetch(API)
    .then(res=> res.json())
    .then(sushiArray=> setSushiState(sushiArray))
  },[])

  const sushiDisplayed = sushiState.slice(limit, limit + 4)
  
  function moreSushi(){
    setLimit(limit + 4)
  }

  function handleSushi(newPlate, sushiPrice){
    if(sushiPrice < wallet){
    setPlates([...plates, newPlate])
    setWallet(wallet - sushiPrice)
    }else{
      alert('not enough money in wallet!')
    }
    
  }


  return (
    <div className="app">
      <SushiContainer moreSushi={moreSushi} sushi={sushiDisplayed} handleSushi={handleSushi} />
      <Table wallet={wallet} plates={plates} />
    </div>
  );
}

export default App;
