// 1. Variável para o valor do salgado
const salgado = 8.00;

// 2. Variável para o valor do suco
const suco = 5.00;

// 3. Variável para o valor pago
const valorPago = 20.00;

// 4. Calcula o total e o troco
const total = salgado + suco;
const troco = valorPago - total;

// 5. Mostra o troco no console
console.log("Total da compra: R$", total);
console.log("Troco a receber: R$", troco);