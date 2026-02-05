def validate_name(name):
    if not name or name.strip() == "":
        raise ValueError("Name cannot be empty or just spaces.")
    return True

def validate_budget(amount):
    if not isinstance(amount, (int, float)) or amount <= 0:
        raise ValueError("Budget must be a positive number.")
    return True

def validate_positive_number(value):
    if not isinstance(value, (int, float)) or value < 0:
        raise ValueError("Value must be a non-negative number.")
    return True

def validate_action_allowed(balance, cost):
    if balance < cost:
        raise ValueError("You don't have enough funds—earn more first!")
    return True