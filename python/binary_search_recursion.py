def binary_search_recursion(arr, item, left, right):
    if left > right:
        return -1
    else:
        mid = (left + right) // 2

        if arr[mid] == item:
            return mid
        elif arr[mid] < item:
            return binary_search_recursion(arr, item, mid + 1, right)
        else:
            return binary_search_recursion(arr, item, left, mid - 1)


arr = [
    1,
    4,
    7,
    9,
    11,
    12,
    18,
    20,
    23,
    25,
    26,
    30,
    47,
    52,
    62,
    69,
    75,
    82,
    88,
    92,
    95,
    96,
    99,
    100,
]

left = 0
right = len(arr) - 1

print(binary_search_recursion(arr, 30, left, right))
