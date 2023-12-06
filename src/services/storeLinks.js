//Buscar os Links salvos

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];


    return linksSaves;
}






// Salvar um link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

//Se já tover um link salvo com algum ID eu não vou deixar duplicar
const hasLink = linksStored.some( link => link.id === newLink.id)

if(hasLink){
    console.log("ESSE LINK JA EXISTE NA SUA LISTA")
    return;
}

//Adicionar esse novo link na lista.. 
linksStored.push(newLink)
await localStorage.setItem(key, JSON.stringify(linksStored))
console.log('LINK SALVO COM SUCESSO!');
}

//Deletar algum link já salvo


export function deleteLink(Links, id){

    let myLinks = Links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletedo com sucesso! ")

    return myLinks;

}