let numberTotal = 898;
let number = 0;
let score = 0;
let life = 5;
let Earn = 5;
let Loss = 1;

scoreText = document.querySelector(' .score p')
lifeText = document.querySelector('.life h3')

function start() {
    life = 5
    score = 0

    scoreText.innerHTML = score
    lifeText.innerHTML = life
    loadPok()
}

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

    if(life == 0) {
        start()
    }  
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
                    incrementScore(Earn)
                    setTimeout( () => { 
                        reset(); 
                    }, 1900)
        
                }else {
                    resp.innerHTML = "Você errou! É o " + data['name']
                    poke_img.classList.add("acertou")
                    document.querySelector('input').value = ""
                    decrementLife(Loss)
                    setTimeout( () => { 
                        reset(); 
                    }, 1900)
                }
            }
          
        })   
}

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

decrementLife = totalLife => {
    
    life -= totalLife
    lifeText.innerText = life
    
   
}



start()

