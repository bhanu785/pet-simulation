# PetWise: Your Virtual Pet & Budget Buddy

## Overview
PetWise is an interactive web application designed to teach users about pet care and financial responsibility through a virtual pet experience. Users can customize their pets, manage their care, track expenses, and learn to budget effectively.

## Features
- **Customization**: Users can name their pet, choose its type (dog, cat, dragon, etc.), and select a color/theme.
- **Care Actions**: Users can feed, play, rest, clean, and take their pet for vet visits, each affecting the pet's health and happiness.
- **Emotional States**: The pet's mood changes based on care actions, reflecting states like happy, sad, sick, or bored.
- **Cost Tracking**: The app tracks the cost of care, including food, toys, and vet visits, with a running total and budget management.
- **Financial Responsibility**: Users can set savings goals and earn money through chores, teaching them to manage their finances.
- **Evolution**: The pet evolves over time, leveling up and learning tricks based on user care and financial choices.
- **Reports & Insights**: Users can view spending reports and insights on their pet's care and financial habits.
- **Help & FAQ**: An interactive help section provides guidance and answers to common questions.

## How to Run
1. **Clone the repository**: 
   ```
   git clone <repository-url>
   ```
2. **Navigate to the backend directory**:
   ```
   cd petwise-app/backend
   ```
3. **Install dependencies**:
   ```
   pip install -r requirements.txt
   ```
4. **Run the backend server**:
   ```
   python app.py
   ```
5. **Navigate to the frontend directory**:
   ```
   cd ../frontend
   ```
6. **Install frontend dependencies**:
   ```
   npm install
   ```
7. **Run the frontend application**:
   ```
   npm start
   ```
8. **Open your browser** and go to `http://localhost:3000` to access the application.

## How to Use
- **Onboarding**: Start by customizing your pet in the onboarding screen.
- **Dashboard**: Manage your pet's care and track expenses on the dashboard.
- **Earnings & Chores**: Complete tasks to earn money and contribute to your savings goal.
- **Reports**: View insights and reports on your spending and pet care.

## Technical Design
The application is structured into two main parts: the backend and the frontend. The backend is built using Flask and handles all data management and API requests, while the frontend is developed with React, providing a dynamic user interface.

### Modules
- **Backend**:
  - `models/pet.py`: Defines the Pet class and its methods.
  - `models/finance.py`: Defines the Finance class for managing financial data.
  - `routes/pet_routes.py`: Handles pet-related API requests.
  - `routes/finance_routes.py`: Manages financial-related API requests.
  - `utils/validation.py`: Contains input validation functions.

- **Frontend**:
  - `components/Dashboard.js`: Displays pet status and actions.
  - `components/Onboarding.js`: Manages pet setup.
  - `components/Reports.js`: Shows financial insights.
  - `components/Help.js`: Provides user assistance.

## Limitations & Future Improvements
- Currently, the app supports a single pet. Future versions could allow multiple pets.
- Additional features could include more complex financial simulations and gamification elements.

## Libraries Used
- Flask (for backend)
- React (for frontend)
- Additional libraries as specified in `requirements.txt` and `package.json`.

## Attributions
- Icons and images used in the application are sourced from [insert sources here] and are used under [insert licenses here].