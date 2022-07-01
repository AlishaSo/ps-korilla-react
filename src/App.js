import './styles.css';
import { useState } from "react";
import Receipt from "./components/Receipt";
import data from "./data/records";

function App() {
  const [receipts, setReceipts] = useState(data);

  return (
    <div className="App">
      {
        receipts.map((receipt, index) => {
          return <Receipt 
            key = {index}
            person = {receipt.person}
            order = {receipt.order}
            
          />
        })
      }
    </div>
  );
}

export default App;
