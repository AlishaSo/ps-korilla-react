export default function Receipt(props) {
  const person = props.person;
  const 
  {
    main,
    protein,
    rice,
    sauce,
    toppings,
    drink,
    cost,
    } = props.order;

    const styles = {
      display: props.paid ? 'none' : 'block'
    }

  return (
    <div style={styles} className='receipt' onClick={props.handleClick}>
      <h3>{person}</h3>
      <div className='order-details'>
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
            <ol className='category'>Toppings:
              {toppings.map((topping, index) => <li className='item' key={index}>{topping}</li>)}
            </ol>
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
    </div>
  )
}