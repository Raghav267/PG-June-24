import { useState } from "react";

function Card() {
  //   let price = 100;
  const [initialPrice, setprice] = useState(100);
  const [initaldesc, setDesc] = useState(" This is some raondom desc");

  function handleClick() {
    // initialPrice = 200;
    // console.log(200);
    setprice(200);
    setDesc("This is some special Description.");
  }
  return (
    <>
      <figure style={{ border: "2px solid black" }} onClick={handleClick}>
        <img
          src='https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
          alt=''
        />
        <h2>Price = ${initialPrice}</h2>
        {console.log(initialPrice)}
        <h2>Desc = {initaldesc}</h2>
        <button>Buy</button>
      </figure>
    </>
  );
}

export default Card;
