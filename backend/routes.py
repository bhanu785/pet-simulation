# place for all API routes
from fastapi import APIRouter, HTTPException
from data import pet, save_pet
from constants import StatusBarConstants, ShopConstants, DailyDecayConstants, MoneyConstants
from state import Pet

router = APIRouter()

@router.get("/pet")
def get_pet():
    return pet

def clamp(value, min_value, max_value): # clamp function to make sure values don't go above or below certain thresholds
    return max(min_value, min(value, max_value))

@router.post("/pet/create")
def create_pet(type: str, name: str):

    new_pet = Pet(
        type=type,
        name=name,
        hunger=0,
        happiness=100,
        energy=100,
        health=100,
        day=1,
        money=MoneyConstants.STARTING_MONEY,
        food_stock=0,
        toy_stock=0,
        medicine_stock=0,
        is_alive=True
    )
    global pet # updates every pet reference
    pet = new_pet

    save_pet(pet)
    return pet

@router.post("/pet/next-day")
def next_day():
    pet.day += 1
    # stat decay
    pet.happiness = clamp(pet.happiness - DailyDecayConstants.HAPPINESS_DECAY, StatusBarConstants.MIN_STAT, StatusBarConstants.MAX_STAT)
    pet.hunger = clamp(pet.hunger + DailyDecayConstants.HUNGER_INCREASE, StatusBarConstants.MIN_STAT, StatusBarConstants.MAX_STAT)
    pet.energy = clamp(pet.energy - DailyDecayConstants.ENERGY_DECAY, StatusBarConstants.MIN_STAT, StatusBarConstants.MAX_STAT)

    if pet.hunger <= StatusBarConstants.CRITICAL_HUNGER_THRESHOLD and pet.energy >= StatusBarConstants.CRITICAL_THRESHOLD:
        pass
    else:
        pet.health = clamp(pet.health - StatusBarConstants.HEALTH_DECAY_IF_CRITICAL, StatusBarConstants.MIN_STAT, StatusBarConstants.MAX_STAT)
    if pet.health <= 0:
        pet.is_alive = False
        pet.health = 0
    pet.money += MoneyConstants.MONEY_INCREASE_PER_DAY

    save_pet(pet)
    return pet

# router posts to /pet/feed, and runs feed_pet() function when called by the frontend
@router.post("/pet/feed")
def feed_pet():
    # raises exception if food stock is 0
    if pet.food_stock <= 0:
        raise HTTPException(status_code=400, detail="No food in stock")
    # if there is food in stock, decrease hunger and food stock by 1
    pet.hunger = clamp(
        pet.hunger - ShopConstants.FOOD_HUNGER_DECREASE,
        StatusBarConstants.MIN_STAT,
        StatusBarConstants.MAX_STAT
    )
    pet.food_stock -= 1

    # saves pet to pet_data.json and returns pet object to frontend to update state
    save_pet(pet)
    return pet

@router.post("/pet/play")
def play_pet():
    if pet.toy_stock <= 0:
        raise HTTPException(status_code=400, detail="No toys in stock")
    pet.happiness = clamp(
        pet.happiness + ShopConstants.TOY_HAPPINESS_INCREASE,
        StatusBarConstants.MIN_STAT,
        StatusBarConstants.MAX_STAT
    )

    pet.energy = clamp(
        pet.energy - ShopConstants.TOY_ENERGY_DECREASE,
        StatusBarConstants.MIN_STAT,
        StatusBarConstants.MAX_STAT
    )
    pet.toy_stock -= 1

    save_pet(pet)
    return pet

@router.post("/pet/medicine")
def give_medicine():
    if pet.medicine_stock <= 0:
        raise HTTPException(status_code=400, detail="No medicine in stock")
    pet.health = clamp(
        pet.health + ShopConstants.MEDICINE_HEALTH_INCREASE,
        StatusBarConstants.MIN_STAT,
        StatusBarConstants.MAX_STAT
    )
    pet.medicine_stock -= 1
    save_pet(pet)
    return pet

@router.post("/shop/food")
def buy_food():
    if pet.money < ShopConstants.FOOD_PRICE:
        raise HTTPException(status_code=400, detail="No money")

    pet.money -= ShopConstants.FOOD_PRICE
    pet.food_stock += 1
    save_pet(pet)
    return pet

@router.post("/shop/toy")
def buy_toy():
    if pet.money < ShopConstants.TOY_PRICE:
        raise HTTPException(status_code=400, detail="No money")

    pet.money -= ShopConstants.TOY_PRICE
    pet.toy_stock += 1
    save_pet(pet)
    return pet

@router.post("/shop/medicine")
def buy_medicine():
    if pet.money < ShopConstants.MEDICINE_PRICE:
        raise HTTPException(status_code=400, detail="No money")

    pet.money -= ShopConstants.MEDICINE_PRICE
    pet.medicine_stock += 1
    save_pet(pet)
    return pet

@router.post("/pet/reset")
def reset_pet():
    global pet
    pet = Pet()
    save_pet(pet)
    return pet