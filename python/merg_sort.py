def merge(list1, list2):
    mergedList = []
    i = 0
    j = 0

    while i < len(list1) and j < len(list2):
        if list2[j] > list1[i]:
            mergedList.append(list1[i])
            i = i + 1
        else:
            mergedList.append(list2[j])
            j = j + 1

    while i < len(list1):
        mergedList.append(list1[i])
        i = i + 1

    while j < len(list2):
        mergedList.append(list2[j])
        j = j + 1

    return mergedList


print(merge([-1, 2, 4, 8, 9, 12], [0, 3, 6, 11]))
