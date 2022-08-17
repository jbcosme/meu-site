function calcBMI() {
    var pinicial = document.bmiform.pinicial.value, altura = document.bmiform.inches.value, p_atual = document.bmiform.p_atual.value, altura2 = (altura * altura / 10000), p_perdido = (pinicial - p_atual);
    document.bmiform.imc_inicial.value = parseFloat((pinicial) / (altura2)).toFixed(2);
    document.bmiform.imc_atual.value = parseFloat((p_atual) / (altura2)).toFixed(2);
    document.bmiform.p_ideal.value = parseFloat(altura2 * 25).toFixed(2);
    document.bmiform.p_excesso.value = ((pinicial) - (document.bmiform.p_ideal.value));
    document.bmiform.p_esperado.value = parseFloat((pinicial) - (document.bmiform.p_excesso.value * 0.7)).toFixed(2);
    document.bmiform.ppep.value = ((p_perdido /  document.bmiform.p_excesso.value) *100).toFixed(2);
  } 