const characterId = document.getElementById('characterId');
const button = document.getElementById('buttonOK');
const conteudo = document.getElementById('conteudo');
const image = document.getElementById('img');



//conversa com a api externa e tras uma promessa que passada em json
const fetchApi = (value) => {
    return fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

//converte os dados de json para um lista HTML
const jsonToHtml = (data) => {
    // Lista apenas os campos desejados
    const html = `
        <ul>
            <li>ID: ${data.id}</li>
            <li>Name: ${data.name}</li>
            <li>Status: ${data.status}</li>
            <li>Species: ${data.species}</li>
            <li>Type: ${data.type || 'N/A'}</li>
            <li>Gender: ${data.gender}</li>
            <li>Origin: ${data.origin.name}</li>
        </ul>`;
    return html;
}

//Quando o botão é clicado, ele chama a função fetchApi
//Depois de obter os dados, ele converte os dados para HTML usando jsonToHtml e atualiza o innerHTML do elemento conteudo
button.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(characterId.value);
    conteudo.innerHTML = jsonToHtml(result);
    image.src = result.image;
});

