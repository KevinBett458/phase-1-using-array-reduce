const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(batteryList) {
  return batteryList.reduce((acc, curr) => acc + curr, 0);
}

const batteries = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = reducer(batteries);
console.log(totalBatteries);

