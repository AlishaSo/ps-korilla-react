import { useState } from "react";
import Receipt from "./components/Receipt";
import data from "./data/records";

function App() {
  const [receipts, setReceipts] = useState(data);
  return (
    <div className="App">
      <Receipt 
        receipt1 = {receipts.receipt1}
      />
    </div>
  );
}

export default App;
