//codigo que soma los numeros impares duma lista

let lista = [5, 9, 10, 2, 6, 3];
let lista1 = [];
soma = 0;
i = 0;

for (let item of lista) {
    if (item % 2 != 0) {
        soma += item;
        lista1[i] = item;
        i++;
    }
}

console.log("a soma dos impares da lista", lista1, "é", soma);