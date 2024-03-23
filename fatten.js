// Fatten an Array
// It means converting 3d or 2d arrays into 1d array.

const arr = [
  ["zone_1", "zone_2"],
  ["zone_3", "zone_4"],
  ["zone_5", "zone_6"],
  ["zone_7", "zone_8", ["zone_9", "zone_10"]],
];

let flatArr = arr.reduce((accumulator, currVal) => {
    return accumulator.concat(currVal);
})
console.log(flatArr);