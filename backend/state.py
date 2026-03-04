# 
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