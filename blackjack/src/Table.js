import { useState } from "react";
import BetCircle from "./BetCircle";
// import Dealer from "./Dealer";

const Table = () => {
  const [] = useState([]);
  return (
    <div className="p-3 my-2 rounded" style={{ background: "grey" }}>
      <BetCircle />
    </div>
  );
};

export default Table;
