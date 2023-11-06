# This README is all about Advanced Sorting Algorithms - (Merge, Quick and Radix Sort)

## [Merge Sort Algorithm:](https://www.notion.so/Merge-Sort-59be0cbb831a47bebdf7e4daf26ce555?pvs=4)

Merge sort works by dividing the array into sub-arrays until each array has one element.
Then, each sub-array is concatenated (merged) in a sorted order

### Merge Sort Pseudo Code:

1- Break up the array into halves until you have arrays that are empty or have one element

2- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

3- Once the array has been merged back together, return the merged (and sorted!) array

`Time Complexity: O(n*logn)`

(Time complexity Description)

#### Worst Case Complexity: O(nlogn)

#### Best Case Complexity: O(nlogn)

#### Average Case Complexity: O(nlogn)

`Space Complexity: O(n)`
