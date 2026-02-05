from flask import Blueprint, request, jsonify
from ..models.pet import Pet
from ..utils.validation import validateName, validateBudget

pet_routes = Blueprint('pet_routes', __name__)

# In-memory storage for pets (for demonstration purposes)
pets = {}

@pet_routes.route('/pets', methods=['POST'])
def create_pet():
    data = request.json
    name = data.get('name')
    pet_type = data.get('type')
    color = data.get('color')
    budget = data.get('budget')

    # Validate inputs
    if not validateName(name):
        return jsonify({"error": "Invalid pet name."}), 400
    if not validateBudget(budget):
        return jsonify({"error": "Budget must be a positive number."}), 400

    new_pet = Pet(name=name, pet_type=pet_type, color=color, budget=budget)
    pets[name] = new_pet
    return jsonify({"message": "Pet created successfully!", "pet": new_pet.to_dict()}), 201

@pet_routes.route('/pets/<string:name>', methods=['GET'])
def get_pet(name):
    pet = pets.get(name)
    if not pet:
        return jsonify({"error": "Pet not found."}), 404
    return jsonify(pet.to_dict()), 200

@pet_routes.route('/pets/<string:name>/actions', methods=['POST'])
def perform_action(name):
    pet = pets.get(name)
    if not pet:
        return jsonify({"error": "Pet not found."}), 404

    action = request.json.get('action')
    if action == 'feed':
        food_type = request.json.get('foodType')
        pet.feed(food_type)
    elif action == 'play':
        activity_type = request.json.get('activityType')
        pet.play(activity_type)
    elif action == 'rest':
        pet.rest()
    elif action == 'clean':
        pet.clean()
    elif action == 'vet':
        pet.vetVisit()
    else:
        return jsonify({"error": "Invalid action."}), 400

    return jsonify({"message": "Action performed successfully!", "pet": pet.to_dict()}), 200

@pet_routes.route('/pets/<string:name>/status', methods=['GET'])
def get_pet_status(name):
    pet = pets.get(name)
    if not pet:
        return jsonify({"error": "Pet not found."}), 404
    return jsonify({"status": pet.get_status()}), 200