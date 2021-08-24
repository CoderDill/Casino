import { useState } from "react";
import BetCircle from "./BetCircle";
// import axios from "axios";
// import Dealer from "./Dealer";
const axios = require("axios").default;
let deck_count = axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
  .then(function (resp) {
    return resp.data.deck_id
  });
console.log(`---------------------${deck_count}`)
const Table = () => {
  const [] = useState([]);
  let card = axios.get(
    `https://deckofcardsapi.com/api/deck/${deck_count}/draw/?count=1`
  );
  return (
    <div className="p-3 my-2 rounded" style={{ background: "grey" }}>
      <img></img>
      <BetCircle />
    </div>
  );
};

export default Table;
