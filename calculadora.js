function calcBMI() {
    var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
    document.bmiform.bmi.value = parseInt((weight) / (height * height / 10000));
  } 