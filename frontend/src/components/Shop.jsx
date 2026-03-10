// shop where toys, medicine and food can be bought; 
// imports images from assets folder
import useLanguage from "../useTranslation.js";
import back from "../assets/pet_back.png";
import food from "../assets/pet_food.png";
import toy from "../assets/pet_toy.png";
import medicine from "../assets/pet_medicine.png";
import { useState } from "react";

function Shop({ pet, setPet, setScreen }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [errorPopup, setErrorPopup] = useState(false);
    const { t } = useLanguage();

    // function to handle purchase of item, sends request to endpoint based on item
    const handlePurchase = async (item) => {

        // try catch block used to handle errors
        try {
          // sends post request to endpoint and waits for response
          const response = await fetch(
            `http://localhost:8000/shop/${item}`,
            { method: "POST" }
          );
          
          // checks for non-OK response and alerts user with error message from endpoint
          if (!response.ok) {
            const error = await response.json();
            setErrorMessage(error.detail);
            setErrorPopup(true);
            return;
          }
          
          // waits for response and transforms it to json and updates pet with data
          const data = await response.json();
          setPet(data);
      
        } catch (error) {
          console.error(error);
        }
      };
  
    return (
      <div>
  
        <h1 className="shop-title">{t("shopTitle")}</h1>
  
        <h2 className="money-title">{t("money")}: ${pet.money}</h2>
  
          <div>
            <p className="food-stock-display">{t("stock")}: {pet.food_stock}</p>
            <p className="food-price">{t("price")}: $10</p>
            <button onClick={() => handlePurchase("food")} className="buy-food-button">
              <img src={food} height={150} width={150}/>
              {t("buyFood")}
            </button>
          </div>
  
          <div>
            <p className="toy-stock-display">Stock: {pet.toy_stock}</p>
            <p className="toy-price">Price: $8</p>
            <button onClick={() => handlePurchase("toy")} className="buy-toy-button">
              <img src={toy} height={80} width={80}/>
              {t("buyToy")}
            </button>
          </div>
  
          <div>
            <p className="medicine-stock-display">Stock: {pet.medicine_stock}</p>
            <p className="medicine-price">Price: $15</p>
            <button onClick={() => handlePurchase("medicine")} className="buy-medicine-button">
              <img src={medicine} width={50} height={94}/>
              {t("buyMedicine")}
            </button>
          </div>
  
        <button onClick={() => setScreen("dashboard")} className="back-button">
          <img src={back} width={40} height={40} className="back-image" />
          {t("back")}
        </button>
        <h2 className="money-spent">{t("totalMoneySpent")}: ${pet.money_spent}</h2>

        {errorPopup && (
        <div className="shop-popup-overlay">
            <div className="shop-popup">
            <h3>{t("error")}</h3>
            <p>{errorMessage}</p>
            <button onClick={() => setErrorPopup(false)} className="ok-button">{t("ok")}</button>
            </div>
        </div>
)}

    </div>
    );
}
  
  export default Shop;