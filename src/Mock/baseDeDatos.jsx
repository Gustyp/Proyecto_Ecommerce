const PRODUCTOS = [
    {
        id: 1,
        nombre: `item 1`,
        descripcion: `Descripción del item número 1`,
        precio: 10000,
        img: "https://picsum.photos/200",
    },
    {
        id: 2,
        nombre: `item 2`,
        descripcion: `Descripción del item número 2`,
        precio: 145000,
        img: "https://picsum.photos/200",
    },
    {
        id: 3,
        nombre: `item 3`,
        descripcion: `Descripción del item número 3`,
        precio: 11400,
        img: "https://picsum.photos/200",
    },
    {
        id: 4,
        nombre: `item 4`,
        descripcion: `Descripción del item número 4`,
        precio: 14550,
        img: "https://picsum.photos/200",    
    },
    {
        id: 5,
        nombre: `item 5`,
        descripcion: `Descripción del item número 5`,
        precio: 18300,
        img: "https://picsum.photos/200",
    }
];

const getProductos = () => {
    return new Promise((resp) => {
        setTimeout(() => resp(PRODUCTOS), 2000);
    });
};

export default getProductos;