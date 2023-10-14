export async function  fetchAPI(URL) {
    const data = await fetch(URL);
    const response = await data.json();
    return response;
}