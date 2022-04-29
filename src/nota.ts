//Utilizando un map para modificar un arreglo

let arreglo: any[] = [{
    nombre: 'cesar',
    primer_apellido: 'castillo'

}, {
    nombre: 'pedro',
    primer_apellido: 'hernandez'

}, {
    nombre: 'felipe',
    primer_apellido: 'moreno'

}]


let arreglo_nombres: string[] = arreglo.map((item: any) => {
    return item.nombre;
});

console.log(arreglo_nombres);

let arreglo_apellidos: string[] = arreglo.map((item: any) => {
    return item.primer_apellido;
});

console.log(arreglo_apellidos);




//Utilizando in para los keys de una objecto JSON

let diccionario: any = {
    adkfjaodjkln: {
        name: "Producto 1",
        price: 12

    },
    asdasf: {
        name: "Producto 1",
        price: 12

    },
    dssdfsdf: {
        name: "Producto 1",
        price: 12

    },
    sdfsdfs: {
        name: "Producto 1",
        price: 12

    }
}

for (let key in diccionario) {
    console.log(diccionario[key]);
}