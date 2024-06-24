// Variáveis para armazenar histórico de números gerados
var historicoGS = [];
var historicoEXH = [];

document.getElementById('btnGerarGS').addEventListener('click', function() {
  // Gerar números aleatórios
  var numero1 = Math.floor(Math.random() * 18) + 1; // Número aleatório de 1 a 18
  var numero2 = Math.floor(Math.random() * 9) + 1;  // Número aleatório de 1 a 9
  var numero3 = Math.floor(Math.random() * 2) + 1;  // Número aleatório de 1 a 2

  // Exibir o número aleatório no campo correspondente
  document.getElementById('numeroAleatorioGS').value = `${numero1}, ${numero2}, ${numero3}`;
  
  // Adicionar ao histórico
  historicoGS.push(`${numero1}, ${numero2}, ${numero3}`);
  // Limitar o histórico aos dois últimos números
  if (historicoGS.length > 2) {
    historicoGS.shift(); // Remove o primeiro elemento (o mais antigo)
  }
  // Atualizar o histórico exibido
  atualizarHistorico('historicoGS', historicoGS);
});

document.getElementById('btnGerarEXH').addEventListener('click', function() {
  // Gerar números aleatórios
  var numero1 = Math.floor(Math.random() * 18) + 1; // Número aleatório de 1 a 18
  var numero2 = Math.floor(Math.random() * 9) + 1;  // Número aleatório de 1 a 9
  var numero3 = Math.floor(Math.random() * 2) + 1;  // Número aleatório de 1 a 2

  // Exibir o número aleatório no campo correspondente
  document.getElementById('numeroAleatorioEXH').value = `${numero1}, ${numero2}, ${numero3}`;

  // Adicionar ao histórico
  historicoEXH.push(`${numero1}, ${numero2}, ${numero3}`);
  // Limitar o histórico aos dois últimos números
  if (historicoEXH.length > 2) {
    historicoEXH.shift(); // Remove o primeiro elemento (o mais antigo)
  }
  // Atualizar o histórico exibido
  atualizarHistorico('historicoEXH', historicoEXH);
});

// Função para atualizar o histórico exibido
function atualizarHistorico(elementId, historico) {
  var historicoElement = document.getElementById(elementId);
  historicoElement.innerHTML = '<strong>Historico:</strong><br>';
  historico.forEach(function(item) {
    historicoElement.innerHTML += `${item}<br>`;
  });
}
