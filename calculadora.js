function calcBMI() {
    var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
    document.bmiform.bmi.value = parseFloat((weight) / (height * height / 10000)).toFixed(2);
  } 