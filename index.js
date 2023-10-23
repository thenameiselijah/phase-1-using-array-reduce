const batteryBatches = [
    { id: 1, amount: 20 },
    { id: 2, amount: 10 },
    { id: 3, amount: 1 }
  ];
  
  const totalBatteries = batteryBatches.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.amount;
  }, 0);
  
  console.log(totalBatteries);