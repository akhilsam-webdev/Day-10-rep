import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    fetchData()
  }, []);

  const [card, setCard] = useState([]);

  function fetchData() {
    axios.get("/api/card").then((res) => {
      console.log(res.data.cards);
      setCard(res.data.cards);
    });
  }

  return (
    <div className="app">
      {card.map((item) => (
        <div key={item._id} className="cards">
          <h2>
            Name: <span>{item.name}</span>
          </h2>
          <p>
            Address: <span>{item.address}</span>
          </p>
          <p>
            Blood Group: <span>{item.bloodGroup}</span>
          </p>
          <p>
            Number: <span>{item.number}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
