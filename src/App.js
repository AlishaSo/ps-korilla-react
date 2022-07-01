import './styles.css';
import { useState } from "react";
import Receipt from "./components/Receipt";
import data from "./data/records";

function App() {
  const [receipts, setReceipts] = useState(data);

  function handleClick(person) {
    setReceipts(prevReceipts => {
      return prevReceipts.map(receipt => {
        return receipt.person == person ? 
        {...receipt, paid: !receipt.paid}
        :
        receipt
      })
    })
  }

  return (
    <div className="App">
      {
        receipts.map((receipt, index) => {
          return <Receipt 
            key = {receipt.person+index}
            person = {receipt.person}
            order = {receipt.order}
            paid = {receipt.paid}
            handleClick = {() => handleClick(receipt.person)}
          />
        })
      }
    </div>
  );
}

export default App;
