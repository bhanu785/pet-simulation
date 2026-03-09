// where all the button go and is shown on dashboard 

import food from "../assets/pet_food.png";
import toy from "../assets/pet_toy.png";
import shop from "../assets/pet_shop.png";
import medicine from "../assets/pet_medicine.png";
import { useState } from "react";

// function that shows all the buttons on the dashboard; takes in setPet and setScreen as props to update pet info and switch screens if needed
function ActionButtons({ setPet, setScreen }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    // function to get pet JSON data and update in the backend; takes in endpoint as an argument to determine which action to perform (feed, play, medicine)
    const handleAction = async (endpoint) => {
        try {
          const response = await fetch(`http://localhost:8000/pet/${endpoint}`, {
            method: "POST"
          });
          
          // if the response is not ok, show an alert with the error message and return
          if (!response.ok) {
            const error = await response.json();
            setErrorMessage(error.detail);
            setShowPopup(true);
            return;
          }
          
          // waits until JSON data is received
          const data = await response.json();
          setPet(data);
      
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div>
      <button onClick={() => handleAction("feed")} className="feed-button">
        <img src={food} height={150} width={150}/>
        Feed
      </button>

      <button onClick={() => handleAction("play")} className="play-button">
        <img src={toy} height={80} width={80}/>
        Play
      </button>

      <button onClick={() => handleAction("medicine")} className="medicine-button">
        <img src={medicine} width={40} height={75}/>
        Heal
      </button>

      <button className="shop-button" onClick={() => setScreen("shop")}>
        <img src={shop} width={100} height={100} />
        Shop
      </button>

      <button onClick={() => window.open('https://forms.gle/qqNJnme3XWqzDhWR8', '_blank')} className="question-button">
        ?
      </button>

      {showPopup && (
        <div className="popup-overlay">
            <div className="popup">
            <h3>Error</h3>
            <p>{errorMessage}</p>
            <button onClick={() => setShowPopup(false)} className="ok-button">OK</button>
            </div>
        </div>
)}
    </div>
  );
}

export default ActionButtons;