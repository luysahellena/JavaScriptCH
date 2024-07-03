
let pagamento = parseFloat(prompt("Digite o valor do pagamento: "));

let numParcelas = parseInt(prompt("Digite o número de parcelas: "));

let valorParcela = pagamento / numParcelas;

for (let i = 1; i <= numParcelas; i++) {
  alert(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
}