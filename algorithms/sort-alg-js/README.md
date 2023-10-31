# This README file is all about Sorting Algorithms:

## [Insertion Sort Algorithm:](https://www.notion.so/Insertion-Sort-51254143a9d74a67ba80ee05794bd89a?pvs=4)

Insertion sort works similarly to selection sort by searching the array sequentially and
moving the unsorted items into a sorted sublist on the left side of the array.

### Insertion Sort Algorithm PseudoCode:

```bash
  insertionSort(array)
    mark first element as sorted (start the loop from the second element in the array)
    for i = 1 to i < array.length
      extract the element in index i (make a tmp variable to store the value of the element in the index i)
  			tmp = array[i]

  		(start the second loop from i - 1)
  		j = i - 1
      while j >= 0 && array[j] > tmp
          move sorted element to the right by 1
  				array[j + 1] = arr[j]
  				j--

      break loop and insert tmp here
  		array[j + 1] = tmp

    return array
```

`Time Complexity: O(n²)`

Again, this sorting algorithm has a quadratic time complexity of O(n2) like bubble
and insertion sort because of the nested for loop.

#### Worst Case Complexity: O(n²)

Suppose, an array is in ascending order, and you want to sort it in descending order. In this case, worst case complexity occurs.

Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made.

Thus, the total number of comparisons = n\*(n-1) ~ n2

##### Best Case Complexity: O(n)

When the array is already sorted, the outer loop runs for n number of times whereas the inner loop does not run at all. So, there are only n number of comparisons. Thus, complexity is linear.

#### Average Case Complexity: O(n²)

It occurs when the elements of an array are in jumbled order (neither ascending nor descending).

`Space Complexity: O(1)`

Space complexity is O(1) because an extra variable (tmp) is used.

## [Selection Sort Algorithm:](https://www.notion.so/Selection-Sort-52a09fd14891439c973c9174191f0dd6?pvs=4)

Selection sorting works by scanning the elements for the smallest element and inserting
it into the current position of the array.

### Selection Sort Algorithm PseudoCode:

```bash
  selectionSort(array)
    for i = 0 to len(array)
  		assume that the first element is the smallest one
  		min = i

  		for j = i + 1 to len(array)
  			check if the element in the (j) index is less than the element in the (min) index
  			if array[j] < array[min]
  				the new (min) value is (j)
  				min = j

  		if (min) does not equal (i) then swap the element in the (i) index with the element in the (min) index
  		if i !== min
  			swap(array[i], array[min])

  	return array
```

`Time Complexity: O(n²)`

The time complexity for selection sort is still O(n2) because of the nested for loop.

The time complexity of the selection sort is the same in all cases. At every step, you have to find the minimum element and put it in the right place. The minimum element is not known until the end of the array is not reached.

#### Worst Case Complexity: O(n²)

If we want to sort in ascending order and the array is in descending order then, the worst case occurs.

##### Best Case Complexity: O(n²)

It occurs when the array is already sorted

#### Average Case Complexity: O(n²)

It occurs when the elements of the array are in jumbled order (neither ascending nor descending).

`Space Complexity: O(1)`

Space complexity is O(1) because an extra variable min is used.
