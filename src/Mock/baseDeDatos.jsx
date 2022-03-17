const PRODUCTOS = [
    {
        id: 1,
        nombre: `item 1`,
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus doloribus soluta officia error? Maiores rerum tempore, officiis odit, corrupti magni sunt, repellat consequuntur ducimus facilis natus cupiditate. Ab, repellendus.",
        precio: 10000,
        img: "https://picsum.photos/200",
    },
    {
        id: 2,
        nombre: `item 2`,
        descripcion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus doloribus soluta officia error? Maiores rerum tempore, officiis odit, corrupti magni sunt, repellat consequuntur ducimus facilis natus cupiditate. Ab, repellendus.`,
        precio: 145000,
        img: "https://picsum.photos/200",
    },
    {
        id: 3,
        nombre: `item 3`,
        descripcion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus doloribus soluta officia error? Maiores rerum tempore, officiis odit, corrupti magni sunt, repellat consequuntur ducimus facilis natus cupiditate. Ab, repellendus.`,
        precio: 11400,
        img: "https://picsum.photos/200",
    },
    {
        id: 4,
        nombre: `item 4`,
        descripcion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus doloribus soluta officia error? Maiores rerum tempore, officiis odit, corrupti magni sunt, repellat consequuntur ducimus facilis natus cupiditate. Ab, repellendus.`,
        precio: 14550,
        img: "https://picsum.photos/200",    
    },
    {
        id: 5,
        nombre: `item 5`,
        descripcion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus doloribus soluta officia error? Maiores rerum tempore, officiis odit, corrupti magni sunt, repellat consequuntur ducimus facilis natus cupiditate. Ab, repellendus.`,
        precio: 18300,
        img: "https://picsum.photos/200",
    }
];

const getProductos = () => {
    return new Promise((resp) => {
        setTimeout(() => resp(PRODUCTOS), 2000);
    });
};

// export default getProductos;

const getProducto = ( id ) => {
    console.log(id);
    return new Promise((resp) => {
        setTimeout(() => resp(PRODUCTOS.find(producto => producto.id === Number(id))), 2000);
    });
};

// export default getProducto;

export {
    getProducto,
    getProductos
};