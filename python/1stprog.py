# practice question

class Student:
    college_name = "IGDTUW"
    def __init__(self ,name):
        print("add new student to database")
        self.name = name

    @staticmethod
    def hello():
        print("Hello")

s1 = Student("Manvi")
print(s1.name)
s1.hello()

s2 = Student("Kavya")
print(s2.name)