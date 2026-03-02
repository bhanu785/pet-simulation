// shop where toys, medicine and food can be bought; 
function Shop({ pet, setPet, setScreen }) {

    const handlePurchase = async (item) => {
        try {
          const response = await fetch(
            `http://localhost:8000/shop/${item}`,
            { method: "POST" }
          );
      
          if (!response.ok) {
            const error = await response.json();
            alert(error.detail);
            return;
          }
      
          const data = await response.json();
          setPet(data);
      
        } catch (error) {
          console.error(error);
        }
      };
  
    return (
      <div>
  
        <h1>Shop</h1>
  
        <h2>Money: ${pet.money}</h2>
  
        <div className="shop-items">
  
          <div>
            <p>Food (Stock: {pet.food_stock})</p>
            <button onClick={() => handlePurchase("food")} className="buy-food-button">
              Buy Food
            </button>
          </div>
  
          <div>
            <p>Toys (Stock: {pet.toy_stock})</p>
            <button onClick={() => handlePurchase("toy")} className="buy-toy-button">
              Buy Toy
            </button>
          </div>
  
          <div>
            <p>Medicine (Stock: {pet.medicine_stock})</p>
            <button onClick={() => handlePurchase("medicine")} className="buy-medicine-button">
              Buy Medicine
            </button>
          </div>
  
        </div>
  
        <button onClick={() => setScreen("dashboard")}>
          Back
        </button>
  
      </div>
    );
  }
  
  export default Shop;