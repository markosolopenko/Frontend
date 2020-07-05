# print(5 + 2000 == 2005, 5 + 2000 is 2005)
class User:
    __slots__ = ('x', 'y')

u = User()
u.x = 1
u.y = 2
print(u.__dict__)