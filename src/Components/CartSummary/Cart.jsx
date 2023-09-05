import React, { useEffect, useState } from 'react'
import chicken from '../../images/chicken.png'
import pizza from '../../images/pizza.png'
import shallots from '../../images/shallots.png'
// import veg from '../../images/Veg.png'
import nonveg from '../../images/NonVeg.png'
import './Cart.css'
import Price from '../PriceSummary/Price'
const Data=[
  {
    id:1,
    imgSrc:chicken,
    title:'Chicken Salad',
    para:'About dish Lorem ipsum dummy text lorem ipsum dummy text  lorem ipsum dummy text more',
    price:230
  },
  {
    id:2,
    imgSrc:pizza,
    title:'Cream of Tartar',
    para:'About dish Lorem ipsum dummy text lorem ipsum dummy text',
    price:200
  },
]

const Advance =[
    {
        id:3,
        imgSrc:shallots,
        title:'Shallots',
        para:'About dish Lorem ipsum dummy text lorem ipsum dummy text  lorem ipsum dummy text more',
        price:300
      }
]

const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  //for 2 additon event before advance
  const calculateTotalPrice = () => {
    let total = 0;
    Data.forEach((item) => {
      total += (item.price * (quantity[item.id] || 1));
    });
    return total;
  };
  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  },[quantity]);
  

  ///advance event
  const [totalPrice1, setTotalPrice1] = useState(0);

  const calculateTotalPrice1 = () => {
    let total = 0;
    Advance.forEach((item) => {
      total += (item.price * (quantity[item.id] || 1));
    });
    return total;
  };
  useEffect(() => {
    const newTotalPrice = calculateTotalPrice1();
    setTotalPrice1(newTotalPrice);
  },[quantity]);


  const handleincrement = (itemId) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1
    }));
  };

  // Function to decrement quantity for a specific item by ID
  const handledecrement = (itemId) => {
    setQuantity((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[itemId] > 0) {
        updatedQuantities[itemId] -= 1;
      }
      return updatedQuantities;
    });
  };

  
   return (
    
    <>
   <section className='both'>
    <div className='cart'>
    <div className='left'>
        <div className='left-top'>
          <h1>Cart Summary</h1>
            <div className='btn'>
                <button>Add More</button>
            </div>
        </div>
        <div className='left-content'>
        {Data.map((item) => {
          
            return(

            <div className='left-content-inside' key={item}  >
              <div className='cards'>
       <div className='card-main'>
        <div className='imgsrc'><img src={item.imgSrc} alt=''/></div>
        <div className='title'>{item.title}      <img src={nonveg} alt=' ' /></div>
        <div className='price'>${item.price *quantity[item.id]||item.price}</div>
        <div className='para'  >{item.para}</div>

    

        <div className='original'>
          <div className='sugar'>
            <h5>Sugar Free</h5>
          </div>
          <div className='sugar'>
            <h5>Egg</h5>
          </div>
        </div>
        <div className='maths'>
            <button onClick={()=>handledecrement(item.id)}  className='minus'>-</button>
            <h4 className='count'> {quantity[item.id]||1}</h4>  
             <button onClick={()=>handleincrement(item.id)}  className='plus'>+</button>
         
        </div>
      </div>
     
    </div>
            </div>
            );
          } )}
        </div>
        <div className='left-content-shallots'>
        <p>Advanced order for tommorrow</p>

        {Advance.map((item) => {
          
            return(

            <div className='left-content-inside' key={item}  >
              <div className='cards'>
       <div className='card-main'>
        <div className='imgsrc'><img src={item.imgSrc} alt=''/></div>
        <div className='title'>{item.title}   <img src={nonveg} alt=' ' /></div>
        <div className='price'>${item.price *quantity[item.id]||item.price}</div>
        <div className='para'  >{item.para}</div>

    

        <div className='original'>
          <div className='sugar'>
            <h5>Sugar Free</h5>
          </div>
          <div className='sugar'>
            <h5>Egg</h5>
          </div>
        </div>
        <div className='maths'>
            <button onClick={()=>handledecrement(item.id)} className='minus'>-</button>
            <h4 className='count'> {quantity[item.id]||1}</h4>  
             <button onClick={()=>handleincrement(item.id)} className='plus'>+</button>
         
        </div>
      </div>
     
    </div>
            </div>
            );
          } )}
        </div>
      </div>
    </div>
    <div className='price'>
          <Price itemtotal1={totalPrice} itemtotal2={totalPrice1}  deliverycharge1={30} deliverycharge2={30}  tax={40}/>
    </div>
   </section>
   
   
    </>
  )
}

export default Cart