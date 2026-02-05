import React from 'react';

const Help = () => {
    return (
        <div className="help-container">
            <h1>Help & FAQ</h1>
            <div className="guided-tour">
                <h2>Guided Tour</h2>
                <p>1. Customize your pet.</p>
                <p>2. Care for it.</p>
                <p>3. Track costs.</p>
                <p>4. Earn money.</p>
            </div>
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li><strong>What happens if I run out of money?</strong> You need to earn more through chores or tasks.</li>
                    <li><strong>How do savings goals work?</strong> Set a savings goal and track your progress as you earn money.</li>
                </ul>
            </div>
            <div className="interactive-qa">
                <h2>Interactive Q&A</h2>
                <p>What do you want to learn?</p>
                <button>Budgeting</button>
                <button>Pet health</button>
                <button>Savings goals</button>
            </div>
        </div>
    );
};

export default Help;