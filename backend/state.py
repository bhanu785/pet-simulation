# 
from pydantic import BaseModel

class Pet(BaseModel):
    type: str
    name: str
    hunger: int
    happiness: int
    energy: int
    health: int
    day: int
    money: int
    food_stock: int
    toy_stock: int
    medicine_stock: int