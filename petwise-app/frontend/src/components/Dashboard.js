import React, { useState, useEffect } from 'react';
import Pet from './Pet'; // Assuming a Pet component exists to display pet details
import FinanceSummary from './FinanceSummary'; // Assuming a FinanceSummary component exists for financial details
import './Dashboard.css'; // Assuming there are styles for the dashboard

const Dashboard = () => {
    const [pet, setPet] = useState(null);
    const [financialData, setFinancialData] = useState({
        balance: 0,
        totalSpent: 0,
        totalEarned: 0,
        savingsGoal: 0,
        savingsBalance: 0,
    });

    useEffect(() => {
        // Fetch pet data and financial data from the backend
        const fetchData = async () => {
            try {
                const petResponse = await fetch('/api/pet'); // Adjust the endpoint as necessary
                const petData = await petResponse.json();
                setPet(petData);

                const financeResponse = await fetch('/api/finance'); // Adjust the endpoint as necessary
                const financeData = await financeResponse.json();
                setFinancialData(financeData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAction = async (actionType, actionData) => {
        try {
            const response = await fetch(`/api/pet/${actionType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(actionData),
            });
            const updatedPet = await response.json();
            setPet(updatedPet);
        } catch (error) {
            console.error('Error performing action:', error);
        }
    };

    return (
        <div className="dashboard">
            {pet && <Pet pet={pet} />}
            <div className="actions">
                <button onClick={() => handleAction('feed', { foodType: 'default' })}>Feed</button>
                <button onClick={() => handleAction('play', { activityType: 'default' })}>Play</button>
                <button onClick={() => handleAction('rest')}>Rest</button>
                <button onClick={() => handleAction('clean')}>Clean</button>
                <button onClick={() => handleAction('vetVisit')}>Vet Visit</button>
            </div>
            <FinanceSummary financialData={financialData} />
        </div>
    );
};

export default Dashboard;