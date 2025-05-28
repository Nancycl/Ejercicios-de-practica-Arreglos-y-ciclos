export {bubbleSort};

/* Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100] */


const entrada = [3, 6, 12, 5, 100, 1];


function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Intercambiar elementos
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    // Después de cada pasada, el elemento más grande se coloca al final
    n--; 
  } while (swapped);

  return arr;
}

// Ejemplo de uso

console.log(entrada); // [1, 3, 5, 6, 12, 100]
