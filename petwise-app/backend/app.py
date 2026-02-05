from flask import Flask
from routes.pet_routes import pet_bp
from routes.finance_routes import finance_bp

app = Flask(__name__)

# Register blueprints for pet and finance routes
app.register_blueprint(pet_bp, url_prefix='/pet')
app.register_blueprint(finance_bp, url_prefix='/finance')

@app.route('/')
def home():
    return "Welcome to PetWise API!"

if __name__ == '__main__':
    app.run(debug=True)