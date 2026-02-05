class Pet:
    def __init__(self, name, pet_type, color_theme, budget):
        self.name = name
        self.pet_type = pet_type
        self.color_theme = color_theme
        self.age = 0
        self.level = 1
        self.health = 100
        self.happiness = 100
        self.energy = 100
        self.cleanliness = 100
        self.mood = "Happy"
        self.budget = budget

    def feed(self, food_type):
        # Implement feeding logic
        pass

    def play(self, activity_type):
        # Implement playing logic
        pass

    def rest(self, duration):
        # Implement resting logic
        pass

    def clean(self):
        # Implement cleaning logic
        pass

    def vetVisit(self):
        # Implement vet visit logic
        pass

    def updateMood(self):
        # Implement mood updating logic
        pass

    def ageTick(self):
        # Implement aging logic
        self.age += 1
        if self.age % 5 == 0:  # Level up every 5 years
            self.level += 1
            self.updateMood()  # Update mood on level up
