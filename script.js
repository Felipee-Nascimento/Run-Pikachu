const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const clouds = document.querySelector('.clouds');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px','');
    
    if(pokeballPosition <= 140 && pokeballPosition > 0 && pikachuPosition < 80 ){
        pokeball.style.animation = 'none'; 
        pokeball.style.left = `${pokeballPosition}px`;

        pikachu.style.animation = 'none'; 
        pikachu.style.bottom = `${pikachuPosition}px`;

        clouds.style.animation = 'none'; 
        clouds.style.right = `${cloudsPosition}px`;

        pikachu.src = './images/gameover.png';
        pikachu.style.height = '100px';
        pikachu.style.marginLeft = '15px' 
        pikachu.style.marginTop = '130px';  

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);