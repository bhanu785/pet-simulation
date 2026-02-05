import React, { useState } from 'react';

const Onboarding = ({ onPetCreate }) => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('dog');
    const [petColor, setPetColor] = useState('#ffffff');
    const [startingBudget, setStartingBudget] = useState('');
    const [savingsGoal, setSavingsGoal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            const petData = {
                name: petName,
                type: petType,
                color: petColor,
                budget: parseFloat(startingBudget),
                savingsGoal: savingsGoal ? parseFloat(savingsGoal) : 0,
            };
            onPetCreate(petData);
        }
    };

    const validateInputs = () => {
        if (!petName.trim()) {
            alert('Pet name is required.');
            return false;
        }
        if (startingBudget <= 0 || isNaN(startingBudget)) {
            alert('Starting budget must be a positive number.');
            return false;
        }
        return true;
    };

    return (
        <div className="onboarding">
            <h1>Welcome to PetWise: Your Virtual Pet & Budget Buddy</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pet Name:</label>
                    <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Pet Type:</label>
                    <select
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                    >
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="dragon">Dragon</option>
                        <option value="robot">Robot</option>
                    </select>
                </div>
                <div>
                    <label>Pet Color/Theme:</label>
                    <input
                        type="color"
                        value={petColor}
                        onChange={(e) => setPetColor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Starting Budget:</label>
                    <input
                        type="number"
                        value={startingBudget}
                        onChange={(e) => setStartingBudget(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Savings Goal (optional):</label>
                    <input
                        type="number"
                        value={savingsGoal}
                        onChange={(e) => setSavingsGoal(e.target.value)}
                    />
                </div>
                <button type="submit">Create My Pet</button>
            </form>
        </div>
    );
};

export default Onboarding;