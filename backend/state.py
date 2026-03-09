# where the Pydantic BaseModel exists; validates data and provides default values for the pet's stats; 
# being used to create the pet object that gets manipulated and saved to pet_data.json
from pydantic import BaseModel

class Pet(BaseModel):
    type: str = "Cat"
    name: str = "Vishvak"
    hunger: int = 0
    happiness: int = 100
    energy: int = 100
    health: int = 100
    day: int = 1
    money: int = 50
    food_stock: int = 0
    toy_stock: int = 0
    medicine_stock: int = 0
    is_alive: bool = True
    money_spent: int = 0
    total_food_purchased: int = 0
    total_medicine_purchased: int = 0
    total_toys_purchased: int = 0