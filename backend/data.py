# where the pet dictionary with all pet info goes and gets manipulated; being used to save data?
from state import Pet
import json
from constants import MoneyConstants

FILE_NAME = "pet_data.json"
def save_pet(pet: Pet): #function to save pet data to a json file, called after every action that changes the pet's stats
    with open(FILE_NAME, "w") as f:
        json.dump(pet.model_dump(), f)

def load_pet():
    try:
        with open(FILE_NAME, "r") as f:
            data = json.load(f)
            return Pet(**data)
    except FileNotFoundError:
        default_pet = Pet(
            type="Cat",
            name="Vishvak",
            hunger=100,
            happiness=100,
            energy=100,
            health=100,
            day=0,
            money=MoneyConstants.STARTING_MONEY,
            food_stock=0,
            toy_stock=0,
            medicine_stock=0,
            is_alive=True
        )
        save_pet(default_pet)
        return default_pet
pet = load_pet()