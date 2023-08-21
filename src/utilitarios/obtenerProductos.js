export const obtenerProductos = async () => {
  const url = 'https://fakestoreapi.com/products';
  const resp = await fetch(url);
  const productos = await resp.json();
  return productos;
};
