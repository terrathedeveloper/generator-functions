

def pairwiseFunc(list1d):
    result = [];
    for i, _ in enumerate(list1d[:-1]):
        if list[i+1]:
            result.append(list1d[i] + list1d[i+1])
           # print (list1d[i])
           # print (list1d[i+1])
    yield result

gen = pairwiseFunc([1,9,2,4,1,4])
print(next(gen))