export default function Receipt(props) {
  const {
    person,
    order: {
      main,
      protein,
      rice,
      sauce,
      toppings,
      drink,
      cost
    },
   } = props.receipt1;
console.log(drink, cost)
  return (
    <div>
      <h3>{person}</h3>
      <ul>
        <li>
          <span className='category'>Main:</span>
          <span className='item'>{main}</span>
        </li>
        <li>
          <span className='category'>Protein: </span>
          <span className='item'>{protein}</span>
        </li>
        <li>
          <span className='category'>Rice: </span>
          <span className='item'>{rice}</span>
        </li>
        <li>
          <span className='category'>Sauce: </span>
          <span className='item'>{sauce}</span>
        </li>
        <li>
          <ul className='category'>Toppings: 
            {toppings.map((topping, index) => <li className='item' key={index}>{topping}</li>)}
          </ul>
        </li>
        <li>
          <span className='category'>Drink: </span>
          <span className='item'>{drink}</span>
        </li>
        <li>
          <span className='category'>Cost: </span>
          <span className='item'>{cost}</span>
        </li>
      </ul>
    </div>
  )
}