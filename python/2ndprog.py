class Student:
    college_name="IGDTUW"
    def __init__(self,name):
        print("add new student to database")
        self.name=name

    @staticmethod
    def hello():
        print("hello")

s1 = Student("manvi")
s1.hello()
print(s1.name)

s2 = Student("kavya")
s2.hello()
print(s2.name)

s3 = Student("khushi")
s3.hello()
print(s3.name)
