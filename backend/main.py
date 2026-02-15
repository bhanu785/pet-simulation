from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class PetState(BaseModel):
    hunger: int
    happiness: int
    energy: int
    health: int
    age: int
pet = {
    "hunger": 50,
    "happiness": 50,
    "energy": 50,
    "health": 100,
    "age": 0
}
@app.get("/")
def root():
    return {"status": "backend is running"}
@app.get("/pet")
def get_pet():
    return pet
@app.post("/pet")
def update_pet(state: PetState):
    pet["hunger"] = state.hunger
    pet["happiness"] = state.happiness
    pet["energy"] = state.energy
    return {"message": "Pet state updated successfully"}
