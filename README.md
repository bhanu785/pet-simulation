# PetLife: Legacy – Virtual Pet Simulation

## Overview

PetVerse is a full-stack virtual pet simulation game built using **React (frontend)** and **FastAPI (backend)**.

Users can create a custom pet, manage its stats, purchase items from a shop, and experience a time-based simulation where the pet’s needs change automatically over time.

This project demonstrates:

- Modular program structure
- RESTful API communication
- State persistence using JSON
- Input validation
- Time-based stat updates
- Separation of frontend and backend logic

---

## Features

### Pet Customization
- Choose pet type (Cat or Dog)
- Enter custom pet name
- Input validation before starting the game

### Stat Management

Each pet tracks:
- Hunger
- Happiness
- Energy
- Health
- Money
- Day counter

Stats:
- Automatically update over time
- Are clamped between minimum and maximum values
- Display dynamic color changes in the UI

### Shop System
- Buy food, toys, and medicine
- Prevents purchases without enough money
- Updates stock and money dynamically
- Backend validation using HTTP exceptions

### Time System
- Day progresses automatically
- Stats decay or increase based on conditions
- Health penalties occur if critical needs are ignored
- Pet earns money each day

### Persistent Data Storage
- Pet state is saved to `pet_data.json`
- Data persists between sessions
- Backend acts as the single source of truth

---

## Architecture Overview

User Action  
→ React Component  
→ Fetch API Call  
→ FastAPI Route  
→ Game Logic  
→ JSON Save  
→ Updated Response Returned  
→ Frontend State Update  

This layered structure ensures modularity and maintainability.

---

## Technologies Used

### Frontend
- React
- JavaScript
- CSS

### Backend
- Python
- FastAPI
- Pydantic

### Data Storage
- JSON file persistence

---

## How to Run the Project

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend runs at: `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
Frontend runs at: `http://localhost:5173/`


⸻

### Key Programming Concepts Demonstrated
	-   Functions and modular design
	-	Conditional logic
	-	RESTful API structure
	-	State management (useState, useEffect)
	-	Input validation (syntactic and semantic)
	-	File I/O using JSON
	-	Defensive programming
	-	Data structures using objects and models

⸻

### Input Validation

The application prevents:
	-	Using items without stock
	-	Purchasing without enough money
	-	Starting the game without valid pet name or type

Validation is handled on both frontend and backend to ensure data integrity.

⸻

### Future Improvements
	-	Add animations for pet reactions
	-	Add difficulty levels
	-	Replace JSON with a database
	-	Add cloud save functionality
	-	Improve mobile responsiveness
