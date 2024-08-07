const productos = [
    {
        id:1,
        descripcion:"Guitarra Alhambra 2c",
        precio:730,
        stock: 15,
        imgUrl:"/guitars/guitar1.png",
        categoria:"Clasica"
    },
    {
        id:2,
        descripcion:"Godin 5th Avenue",
        precio:950,
        stock: 4,
        imgUrl:"/guitars/guitar2.png",
        categoria:"Archtop Electrica JAZZ"
    },
    {
        id:3,
        descripcion:"Guitarra Folk Deviser",
        precio:200,
        stock: 25,
        imgUrl:"/guitars/guitar3.png",
        categoria:"ElectroAcustica"
    },
    {
        id:4,
        descripcion:"Godin Session LTD",
        precio:1940,
        stock: 7,
        imgUrl:"/guitars/guitar4.png",
        categoria:"Electrica"
    },
    {
        id:5,
        descripcion:"Guitarra Stagg STD",
        precio:420,
        stock: 13,
        imgUrl:"/guitars/guitar5.png",
        categoria:"Electrica"
    }
];

export const obtenerProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos);
        },3000);
    });
};

export const obtenerProductoId = (id) => { // Asegúrate de que `id` es un parámetro
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(p => p.id === id);
            resolve(producto);
        }, 1500);
    });
};
