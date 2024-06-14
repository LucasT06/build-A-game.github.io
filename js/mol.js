const cursor = document.querySelector('.cursor')
const holes = document.querySelectorAll('.hole')
const holes2 = document.querySelectorAll('.hole2')
const scoreEl = document.querySelector('.score span')
const board = document.querySelector(".board")
const board2 = document.querySelector(".board2")
const addboard = document.querySelector('.addBoard')
let score = 0

const sound = new Audio("fotos/smash.mp3")

run()
function run() {
    const t1 = Math.floor(Math.random() * holes.length)
    const hole1 = holes[t1]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'fotos/images.jpg.png'

    img.addEventListener('click', () => {
        score += 1
        sound.play()
        scoreEl.textContent = scoreg
        img.src = 'fotos/gravediglett.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole1.removeChild(img)
            run()
        }, 500)
    })

    hole1.appendChild(img)

    timer = setTimeout(() => {
        hole1.removeChild(img)
        run()
    }, 1000)
    if (score > 5) {
        timer = setTimeout(() => {
            hole1.removeChild(img)
            run()
        }, 700)
    } if (score > 10) {
        timer = setTimeout(() => {
            hole1.removeChild(img)
            run()
        }, 500)
    }  if (score > 15) {
        timer = setTimeout(() => {
            hole1.removeChild(img)
            run()
        }, 300) 
    }


    if (score === 50) {
        board.innerHTML = ' '
        addboard.innerHTML = `
        <div class='board2'>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        <div class='hole2'></div>
        </div>
        `
        run()
        score++
        const t2 = Math.floor(Math.random() * holes2.length);
        const hole2 = holes2[t2];
        let timer2 = null;

        const img2 = document.createElement('img');
        img2.classList.add('mole');
        img2.src = 'fotos/images.jpg.png';

        img2.addEventListener('click', () => {
            score += 1;
            sound.play();
            scoreEl.textContent = score;
            img2.src = 'fotos/gravediglett.png';
            clearTimeout(timer2);
            setTimeout(() => {
                hole2.removeChild(img2);
                run();
            }, 500);
        });


        timer2 = setTimeout(() => {
            run();
        }, 1000);
    }
}








 




window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})


