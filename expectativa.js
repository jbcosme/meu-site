function calcBMI() {
    var pinicial = document.bmiform.pinicial.value, altura = document.bmiform.inches.value, p_atual = document.bmiform.p_atual.value, altura2 = (altura * altura / 10000);
    document.bmiform.imc_inicial.value = parseFloat((pinicial) / (altura2)).toFixed(2);
    document.bmiform.imc_atual.value = parseFloat((p_atual) / (altura2)).toFixed(2);
  } 