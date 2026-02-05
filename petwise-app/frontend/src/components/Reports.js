import React, { useEffect, useState } from 'react';

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/reports') // Adjust the API endpoint as necessary
            .then(response => response.json())
            .then(data => {
                setReports(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching reports:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading reports...</div>;
    }

    return (
        <div className="reports-container">
            <h1>Reports & Insights</h1>
            <div className="report-summary">
                <h2>Summary</h2>
                <p>Total Spent: ${reports.totalSpent}</p>
                <p>Total Earned: ${reports.totalEarned}</p>
                <p>Net Balance Change: ${reports.netBalanceChange}</p>
            </div>
            <div className="category-breakdown">
                <h2>Category Breakdown</h2>
                <ul>
                    {reports.categoryBreakdown.map((item, index) => (
                        <li key={index}>{item.category}: ${item.amount}</li>
                    ))}
                </ul>
            </div>
            <div className="pet-care-insights">
                <h2>Pet Care vs Spending Insights</h2>
                <p>{reports.insightMessage}</p>
            </div>
        </div>
    );
};

export default Reports;