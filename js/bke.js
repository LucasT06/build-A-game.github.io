const spaces1 = document.querySelector('.dropbox1');
const spaces2 = document.querySelector('.dropbox2');
const spaces3 = document.querySelector('.dropbox3');
const spaces4 = document.querySelector('.dropbox4');
const spaces5 = document.querySelector('.dropbox5');
const spaces6 = document.querySelector('.dropbox6');
const spaces7 = document.querySelector('.dropbox7');
const spaces8 = document.querySelector('.dropbox8');
const spaces9 = document.querySelector('.dropbox9');
const resetButton = document.querySelector('.resetButton');
const result = document.querySelector('.result');
const playerOne = document.querySelector('.playerOne');
const playerTwo = document.querySelector('.playerTwo')
const scorePlayerone = document.querySelector('.scorePayerone');
const scorePlayertwo = document.querySelector('.scorePlayertwo');
const multiplayerbtn = document.querySelector('.multiplayer');
const singelplayerbtn = document.querySelector('.singelplayer');
const winningCombinations = [
    [spaces1, spaces2, spaces3],
    [spaces4, spaces5, spaces6],
    [spaces7, spaces8, spaces9],
    [spaces1, spaces4, spaces7],
    [spaces2, spaces5, spaces8],
    [spaces3, spaces6, spaces9],
    [spaces1, spaces5, spaces9],
    [spaces3, spaces5, spaces7]
];
const draw = [spaces1, spaces2, spaces3, spaces4, spaces5, spaces6, spaces7, spaces8, spaces9]
    let player = true;
    let gameActive = true;
    resetButton.disabled = true;
    let playerOneName = prompt('player een naam:')
    let playerTwoName = prompt('player two name:')
    let gameMode = 'multiplayer'
    checkGameMode()

playerOne.innerHTML = playerOneName + ':'
playerTwo.innerHTML = playerTwoName + ':'

singelplayerbtn.addEventListener('click', function () {
    gameMode = 'singelplayer'
    checkGameMode()
})

multiplayerbtn.addEventListener('click', function () {
    gameMode = 'multiplayer'
    checkGameMode()
})

function checkGameMode(){
    if (gameMode === 'multiplayer') {
        console.log('multiplayer');
        resetGame()
        if (gameActive) {
            spaces1.addEventListener('click', function () {
                place(spaces1);
            });
            spaces2.addEventListener('click', function () {
                place(spaces2);
            });
            spaces3.addEventListener('click', function () {
                place(spaces3);
            });
            spaces4.addEventListener('click', function () {
                place(spaces4);
            });
            spaces5.addEventListener('click', function () {
                place(spaces5);
            });
            spaces6.addEventListener('click', function () {
                place(spaces6);
            });
            spaces7.addEventListener('click', function () {
                place(spaces7);
            });
            spaces8.addEventListener('click', function () {
                place(spaces8);
            });
            spaces9.addEventListener('click', function () {
                place(spaces9);
            });
        }
    function place(number) {
        if (gameActive && !number.classList.contains('red') && !number.classList.contains('green')) {
            if (player) {
                playerOne(number);
            } else {
                playerTwo(number);
            }
            player = !player;
            checkForWinner();
        }
    }

    function checkForWinner() {
        let drawFlag = true;
        let scoreOne = 0;
        let scoreTwo = 0;

        for (let tel = 0; tel < winningCombinations.length; tel++) {
            const winningCombination = winningCombinations[tel];
            if (winningCombination.every(space => space.classList.contains('red'))) {
                result.textContent = playerOneName + ' wint de ronde'
                score(scoreOne, scorePlayerone, playerOneName);
                endGame();
                break
            } if (winningCombination.every(space => space.classList.contains('green'))) {
                result.textContent = playerTwoName + ' wint de ronde';
                score(scoreTwo, scorePlayertwo, playerTwoName);
                endGame();
                break
            } else if (drawFlag && draw.every(space => space.classList.contains('red') || space.classList.contains('green'))) {
                result.textContent = 'gelijk spel'
                endGame();
            }
        }
    }

    function playerOne(space) {
        space.classList.add('red');
    }

    function playerTwo(space) {
        space.classList.add('green');
    }

    function endGame() {
        resetButton.disabled = false;
        gameActive = false;
    }

    resetButton.addEventListener('click', function () {
        resetGame();
    });

    function resetGame(player) {
        for (let i = 0; i < winningCombinations.length; i++) {
            for (let j = 0; j < winningCombinations[i].length; j++) {
                winningCombinations[i][j].classList.remove('red', 'green');
            }
        }
        result.textContent = ' '
        resetButton.disabled = true;
        player = true;
        gameActive = true;
    }

    function score(score, player, playername) {
        score++
        player.textContent = parseInt(player.textContent) + score;
        console.log(player + score);
        if (parseInt(player.textContent) === 5) {
            result.textContent = playername + ' heeft gewonnen'
            scorePlayerone.textContent = 0
            scorePlayertwo.textContent = 0
        }
    }
}else if (gameMode === 'singelplayer') {
    console.log('singelplayer');
    resetGame()
    if (gameActive) {
        spaces1.addEventListener('click', function () {
            youpPlace(spaces1);
            npcPlace()
        });
        spaces2.addEventListener('click', function () {
            youpPlace(spaces2);
            npcPlace()
        });
        spaces3.addEventListener('click', function () {
            youpPlace(spaces3);
            npcPlace()
        });
        spaces4.addEventListener('click', function () {
            youpPlace(spaces4);
            npcPlace()
        });
        spaces5.addEventListener('click', function () {
            youpPlace(spaces5);
            npcPlace()
        });
        spaces6.addEventListener('click', function () {
            youpPlace(spaces6);
            npcPlace()
        });
        spaces7.addEventListener('click', function () {
            youpPlace(spaces7);
            npcPlace()
        });
        spaces8.addEventListener('click', function () {
            youpPlace(spaces8);
            npcPlace()
        });
        spaces9.addEventListener('click', function () {
            youpPlace(spaces9);
            npcPlace()
        });
    }
    function npcPlace(){
            let numberNpc = Math.floor(Math.random() * 9);
            numberNpc = ('places' + numberNpc)
            console.log(numberNpc);
            
            if (numberNpc.classList.contains('red') && numberNpc.classList.contains('green')) {
                console.log(numberNpc);
                playerTwo(numberNpc)
            }else {
                return
            }
            
        }
    

    function youpPlace(number) {
        if (gameActive && !number.classList.contains('red') && !number.classList.contains('green')) {
            playerOne(number);
            checkForWinner();
        }
    }

    function checkForWinner() {
        drawFlag = true;
        scoreOne = 0;
        scoreTwo = 0;

        for (tel = 0; tel < winningCombinations.length; tel++) {
            const winningCombination = winningCombinations[tel];
            if (winningCombination.every(space => space.classList.contains('red'))) {
                result.textContent = playerOneName + ' wint de ronde'
                score(scoreOne, scorePlayerone, playerOneName);
                endGame();
                break
            } if (winningCombination.every(space => space.classList.contains('green'))) {
                result.textContent = playerTwoName + ' wint de ronde';
                score(scoreTwo, scorePlayertwo, playerTwoName);
                endGame();
                break
            } else if (drawFlag && draw.every(space => space.classList.contains('red') || space.classList.contains('green'))) {
                result.textContent = 'gelijk spel'
                endGame();
            }
        }
    }

    function playerOne(space) {
        space.classList.add('red');
    }

    function playerTwo(space) {
        space.classList.add('green');
    }

    function endGame() {
        resetButton.disabled = false;
        gameActive = false;
    }

    resetButton.addEventListener('click', function () {
        resetGame();
    });

    function resetGame(player) {
        for (i = 0; i < winningCombinations.length; i++) {
            for (let j = 0; j < winningCombinations[i].length; j++) {
                winningCombinations[i][j].classList.remove('red', 'green');
            }
        }
        result.textContent = ' '
        resetButton.disabled = true;
        player = true;
        gameActive = true;

        if (parseInt(player.textContent) === 5) {

        }
    }

    function score(score, player, playername) {
        score++
        player.textContent = parseInt(player.textContent) + score;
        console.log(player + score);
        if (parseInt(player.textContent) === 5) {
            result.textContent = playername + 'heeft gewonnen'
            scorePlayerone.textContent = 0
            scorePlayertwo.textContent = 0
        }
    }
}}