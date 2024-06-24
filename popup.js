document.getElementById('btnGerarGS').addEventListener('click', function() {
  // Gerar números aleatórios
  var numero1 = Math.floor(Math.random() * 18) + 1; // Número aleatório de 1 a 18
  var numero2 = Math.floor(Math.random() * 9) + 1;  // Número aleatório de 1 a 9
  var numero3 = Math.floor(Math.random() * 2) + 1;  // Número aleatório de 1 a 2

  // Exibir o número aleatório no campo correspondente
  document.getElementById('numeroAleatorioGS').value = `${numero1}, ${numero2}, ${numero3}`;
  
});

document.getElementById('btnGerarEXH').addEventListener('click', function() {
  // Gerar números aleatórios
  var numero1 = Math.floor(Math.random() * 18) + 1; // Número aleatório de 1 a 18
  var numero2 = Math.floor(Math.random() * 9) + 1;  // Número aleatório de 1 a 9
  var numero3 = Math.floor(Math.random() * 2) + 1;  // Número aleatório de 1 a 2

  // Exibir o número aleatório no campo correspondente
  document.getElementById('numeroAleatorioEXH').value = `${numero1}, ${numero2}, ${numero3}`;

});

