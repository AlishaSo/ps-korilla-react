import './styles.css';
import { useState } from "react";
import Receipt from "./components/Receipt";
import data from "./data/records";

function App() {
  const [receipts, setReceipts] = useState(data);
  return (
    <div className="App">
      <Receipt 
        person = {receipts.receipt1}
        order = {receipts.receipt1.order}
      />
      <Receipt 
        person = {receipts.receipt2}
        order = {receipts.receipt2.order}
      />
      <Receipt 
        person = {receipts.receipt3}
        order = {receipts.receipt3.order}
      />
    </div>
  );
}

export default App;
