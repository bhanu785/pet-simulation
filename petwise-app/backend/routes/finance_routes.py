from flask import Blueprint, request, jsonify
from ..models.finance import Finance
from ..utils.validation import validateBudget, validatePositiveNumber

finance_routes = Blueprint('finance_routes', __name__)

# Initialize a Finance instance (this could be replaced with a database instance)
finance = Finance()

@finance_routes.route('/finance/add_expense', methods=['POST'])
def add_expense():
    data = request.json
    category = data.get('category')
    amount = data.get('amount')
    description = data.get('description')

    if not validatePositiveNumber(amount):
        return jsonify({'error': 'Amount must be a positive number.'}), 400

    finance.addExpense(category, amount, description)
    return jsonify({'message': 'Expense added successfully.', 'balance': finance.balance}), 200

@finance_routes.route('/finance/add_income', methods=['POST'])
def add_income():
    data = request.json
    source = data.get('source')
    amount = data.get('amount')

    if not validatePositiveNumber(amount):
        return jsonify({'error': 'Amount must be a positive number.'}), 400

    finance.addIncome(source, amount)
    return jsonify({'message': 'Income added successfully.', 'balance': finance.balance}), 200

@finance_routes.route('/finance/report', methods=['GET'])
def get_report():
    filter_options = request.args.to_dict()
    report = finance.getReport(filter_options)
    return jsonify(report), 200

@finance_routes.route('/finance/balance', methods=['GET'])
def get_balance():
    return jsonify({'balance': finance.balance}), 200