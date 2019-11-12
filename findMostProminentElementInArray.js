const INPUT_ARRAY = [3, 3, 3, 3, 3, 5, 7, 7, 8, 9];

/**
 * We create a map where we have a key for each unique element in the array
 * and the value is the count of how often that element occurs in the array.
 * We then find the maximum frequemcy.
 * If the maximum frequency is more than half the length of the array, we return the associated key (which gives us the most prominent number).
 * Otherwise, we return -1.
 * The time complexity for the provided solution is O(n) where n is the length of the array.
 * The space complexity is O(k) where k is the number of unique values in the array.
 */

function findMostProminentElementInArray(array) {
  const countingMap = new Map();
  array.forEach(el => {
    if (countingMap.has(el)) {
      const currCount = countingMap.get(el);
      countingMap.set(el, currCount + 1);
    } else {
      countingMap.set(el, 1);
    }
  });
  const maxFrequency = Math.max.call(null, ...countingMap.values());
  if (maxFrequency > (array.length / 2)) {
    // We need to find the element with the most count
    for (const [key, value] of countingMap.entries()) {
      if (value === maxFrequency) {
        return key;
      }
    }
  }
  return -1;
}

findMostProminentElementInArray(INPUT_ARRAY);
