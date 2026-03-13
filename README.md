# PetLife: Legacy – Virtual Pet Simulation

## Background Info
This project was made for the 2026 Intro to Programming FBLA event.  After presenting this pet simulation, me and my team won 1st place and were selected to represent New Jersey in the National Leadership Conference in San Antonio, Texas.  This application is able to run on all modern browsers (Google, Firefox, Microsoft Edge, etc.)

## Overview

PetLife: Legacy is a full-stack virtual pet simulation built using **React (frontend)** and **FastAPI (backend)**.

Users can create a custom pet, manage its stats, purchase items from a shop, and experience a time-based simulation where the pet’s needs change automatically over time.

This project demonstrates:

- Modular program structure
- RESTful API communication (with HTTP requests)
- State persistence using JSON
- Input validation
- Time-based stat updates

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
- Data persists throughout the session
- Backend acts as the single source of all data

---

## Pipeline

→ User Action  
→ React Component  
→ Fetch API Call  
→ FastAPI Route  
→ Game Logic  
→ JSON Save  
→ Updated Response Returned  
→ Frontend State Update  

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
- JSON files

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

### Input Validation

The application prevents:
	-	Using items without stock
	-	Purchasing without enough money
	-	Starting the game without valid pet name or type

Validation is handled on both frontend and backend to ensure data integrity.