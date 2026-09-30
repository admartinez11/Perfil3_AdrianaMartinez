const BASE_URL = 'https://fakestoreapi.com';

/**
 * Consulta la lista de productos de Fake Store API.
 * Lanza un error si la respuesta no es 2xx para que el hook lo capture.
 */
const getAll = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
        throw new Error(`Error ${response.status} al obtener los productos`);
    }
    return response.json();
};

export default { getAll };
