export const fn = (a, b, c) => {
A continuacion le paso un bucle a la funcion con los tres condicionales que exige el problema:
for (let i = 0; i < 40; i++) {
Este primer condicional es para que la suma de las tres variables sea menor que 40
if (a + b + c > 40) {
throwerror();
}
Este segundo es para que la suma de variables sea multiplo de 3
if ((a + b + c) % 3 !== 0) {
throwerror();
}
El ultimo es para que las tres variables sean iguales o mayores a 0
if (a < 0 || b < 0 || c < 0) {
throwerror();
}
}
Aqui sacamos la media de las empnadas contemplano su precio y con el metodo Math.ceil redondeamos el resultado hacia arriba.
return Math.ceil((12 _ a + 14 _ b + 16 \* c) / 3);
};
