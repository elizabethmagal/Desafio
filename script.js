
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const image3 = document.querySelector('.img3');
const image4 = document.querySelector('.img4');
const images = [image1,image2,image3,image4];


const nome1 = document.querySelector('.nome1');
const nome2 = document.querySelector('.nome2');
const nome3 = document.querySelector('.nome3');
const nome4 = document.querySelector('.nome4');
const nomes = [nome1,nome2,nome3,nome4];

// Gera numero aleatorio de 1 a 671
generateRandomNumber = () =>{
        const value = Math.floor(Math.random() * 671)
        return value;
    }
  
PegarPersonagem = (indice) => {
                       
        const id = generateRandomNumber();
        return fetch(`https://rickandmortyapi.com/api/character/`+id, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
                "Content-Type": 'application/json'
                }
        })
        .then((response) => response.json())
        .then((data) => 
        {
        images[indice].src = data.image;
        images[indice].alt = 'Imagem do personagem: ' + data.name;
        nomes[indice].innerHTML= data.name;
        
        })
        }
        
window.onload = getCharacters = () => {

    for(var i =0; i <4; i++){
        PegarPersonagem(i);
    }
}

