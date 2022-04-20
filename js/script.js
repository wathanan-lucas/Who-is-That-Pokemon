let numberTotal = 898;
let number = 0;

function loadPok() {
    number = Math.floor(Math.random() * numberTotal)
    
    let url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let img = data['sprites']['front_default']
    
            document.querySelector('.poke-img').setAttribute('src', img)       
        })
        .catch((erro) => {
            console.log("Erro " + erro);
        })
}


function reset() {
    document.querySelector('.resp h2').innerHTML = "";
    document.querySelector('.poke-img').classList.remove("acertou");
    loadPok()
}


let enviar = document.querySelector("#enviar")

enviar.onclick = () => {

    let url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {  

            let resposta = document.querySelector('input').value.trim();
            let resp =  document.querySelector('.resp h2')
            let poke_img = document.querySelector('.poke-img');

            if(resposta.length != "")
            {
                if(resposta.toLowerCase() == data['name']) 
                {
                    resp.innerHTML = "Parabéns! É o " + data['name']
                    poke_img.classList.add("acertou")
                    document.querySelector('input').value = ""
                    setTimeout( () => { 
                        reset(); 
                    }, 1900)
        
                }else {
                    resp.innerHTML = "Você errou! É o " + data['name']
                    poke_img.classList.add("acertou")
                    document.querySelector('input').value = ""
                    setTimeout( () => { 
                        reset(); 
                    }, 1900)
                }
            }
          
        })   
}

window.onload = loadPok;

