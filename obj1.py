a=[[1,2,3],[4,5,6],[7,8,9]]

#print(list(zip(*a)))
def test(list2d):
    stuff = list(zip(*list2d))
    for it in stuff:
       #print(it)
        for i in it:
            yield i


gen = test(a)
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))