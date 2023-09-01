# The binary_search function takes a sorted array and an item.
# list = generate_random_sorted_list()

# If the item is in the array, the function returns its position.
# You’ll keep track of what part of the array you have to search through.
# At the beginning, this is the entire array:
# low = 0
# high = len(list) - 1


# Each time, you check the middle element:
# mid is rounded down by Python automatically if (low + high) isn’t an even number.
# mid = (low + high) / 2
# guess = list[mid]

# If the guess is too low, you update low accordingly:
# if guess < item:
# low = mid + 1

# And if the guess is too high, you update high.
# if guess > item:
# high = mid - 1


def binary_search(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = list[mid]

        if guess == item:
            return mid
        elif guess > item:
            high = mid - 1
        else:
            low = mid + 1

    return None


# list = [
#     1,
#     4,
#     7,
#     9,
#     11,
#     12,
#     18,
#     20,
#     23,
#     25,
#     26,
#     30,
#     47,
#     52,
#     62,
#     69,
#     75,
#     82,
#     88,
#     92,
#     95,
#     96,
#     99,
#     100,
# ]


print(binary_search(list, 42))
