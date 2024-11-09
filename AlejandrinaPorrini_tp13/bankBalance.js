
function calculateBalances(operaciones) {

    let totalDepositos = 0;  
    let totalRetiros = 0;    

    for (let i = 0; i < operaciones.length; i++) {

        if(operaciones[i] > 0) {
            totalDepositos += operaciones[i]; 
        }
        else if(operaciones[i] < 0) {
            totalRetiros += operaciones[i];
        }
    }
    let saldoActual = totalDepositos + totalRetiros;

    return {
        totalDepositos,
        totalRetiros,
        saldoActual
    }; 
}


function bankBalance(nombre, apellido, operaciones) {

    const {totalDepositos, totalRetiros, saldoActual} = calculateBalances(operaciones);

    return `Estimado/a ${nombre} ${apellido}.
    El monto total de los depositos es de: $${totalDepositos}.
    El monto total de los retiros es de: $${totalRetiros}.
    Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}`;
} 

// PRUEBAS
const operaciones = [1000, -1500, 500, 2000, -300 , 2500, 800, 400];
console.log(bankBalance("Gloria", "Medina", operaciones));

//const operaciones = [300, -80, -1000, 900, 50, -2000];
//console.log(bankBalance("Fulano", "Tal", operaciones));

//const operaciones = [500, 6000, -8000, -3000, 1500];
//console.log(bankBalance("Esteban", "Quito", operaciones));

module.exports = bankBalance


