
def pairsSumFunc(list1d,val):
    for i, _ in enumerate(list1d[:-1]):
        if list[i+1] and list1d[i] + list1d[i+1]==val:
            yield "({}, {})".format(list1d[i], list1d[i+1])
        elif list[i-1] and list1d[i] + list1d[i-1]==val:
            yield "({}, {})".format(list1d[i], list1d[i-1])
           
    

gen = pairsSumFunc([1, 9, 2, 4, 7, 4], 11)
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))