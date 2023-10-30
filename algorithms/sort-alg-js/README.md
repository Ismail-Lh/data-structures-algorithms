# This README file is all about Sorting Algorithms:

## [Insertion Sort Algorithm Pseudo Code:](https://www.notion.so/Insertion-Sort-51254143a9d74a67ba80ee05794bd89a?pvs=4)

function insertionSort(array)
mark first element as sorted (start the loop from the second element in the array)
for i = 1 to i < array.length
'extract' the element in index i (make a tmp variable to store the value of the element in the index i)
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
