class Finance:
    def __init__(self):
        self.balance = 0.0
        self.totalSpent = 0.0
        self.totalEarned = 0.0
        self.savingsGoal = 0.0
        self.savingsBalance = 0.0
        self.transactions = []

    def addExpense(self, category, amount, description):
        if amount <= 0:
            raise ValueError("Expense amount must be positive.")
        self.balance -= amount
        self.totalSpent += amount
        self.transactions.append({'type': 'expense', 'category': category, 'amount': amount, 'description': description})

    def addIncome(self, source, amount):
        if amount <= 0:
            raise ValueError("Income amount must be positive.")
        self.balance += amount
        self.totalEarned += amount
        self.transactions.append({'type': 'income', 'source': source, 'amount': amount})

    def canAfford(self, amount):
        return self.balance >= amount

    def getReport(self, filterOptions=None):
        report = {
            'totalSpent': self.totalSpent,
            'totalEarned': self.totalEarned,
            'currentBalance': self.balance,
            'savingsGoal': self.savingsGoal,
            'savingsBalance': self.savingsBalance,
            'transactions': self.transactions
        }
        if filterOptions:
            # Implement filtering logic based on filterOptions
            pass
        return report