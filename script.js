function mincost(arr) {
  if (arr.length <= 1) return 0;

  // 1. Sort the initial array (Min-Heap simulation)
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // 2. Take the two smallest ropes
    // In a real Min-Heap, this is extractMin() twice
    let first = arr.shift();
    let second = arr.shift();

    // 3. Connect them and add to total cost
    let currentCost = first + second;
    totalCost += currentCost;

    // 4. Put the new rope back into the list
    // We must maintain the sorted order (Binary Search insertion is best)
    insertInOrder(arr, currentCost);
  }

  return totalCost;
}

// Helper function to keep the array sorted efficiently
function insertInOrder(arr, val) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = (low + high) >>> 1;
    if (arr[mid] < val) low = mid + 1;
    else high = mid;
  }
  arr.splice(low, 0, val);
}

module.exports=mincost;
