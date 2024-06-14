const player_one_grid = document.querySelector(".playerone-warships")
const player_two_grid = document.querySelector(".playertwo-warships")
const shoot_mode_button = document.querySelector(".shoot_mode")
let player_one_name = document.querySelector(".player_one_name")
let player_two_name = document.querySelector(".player_two_name")

let gamemode = "place_ships";
playerOneName = prompt("player1 choose a name, please");
playerTwoName = prompt("player2 choose a name, please");

player_one_name.innerHTML = playerOneName
player_two_name.innerHTML = playerTwoName

let turn = "player_one";

const player_one_ship_positions = [];
const player_two_ship_positions = [];
const player_one_ships_sunk = [];
const player_two_ships_sunk = [];
player_one_grid
for (let i = 0; i < 100; i++) {
    const block = document.createElement('div');
    block.addEventListener("click", function () {
        console.log(turn);
        console.log(gamemode);
        if (turn === "player_one") {
            if (gamemode === "place_ships") {
                if (player_one_ship_positions.length < 5) {
                    block.classList.add('ships');
                    console.log("player one ships length:", player_one_ship_positions.length);
                    player_one_ship_positions.push(i)
                    console.log(player_one_ship_positions);
                }

                if (player_one_ship_positions.length === 5) {
                    alert("max ships placed switching to:" + ' ' + playerTwoName)
                    turn = "player_two";
                }
            }
        }
        if (turn === "player_two") {
            if (gamemode === "shoot_mode") {
                if (player_one_ship_positions.includes(i)) {
                    block.classList.add("hit");
                    block.innerHTML = "O"
                    player_one_ships_sunk.push(i);
                    if (player_one_ships_sunk.length === 5) {
                        alert(playerTwoName + "- " + "wins")
                    }
                } else {
                    block.classList.add("miss");
                    block.innerHTML = "X"
                    turn = "player_one"
                }
            }

        }
    });
    block.classList.add("tile");
    player_one_grid.appendChild(block);
}

for (let i = 0; i < 100; i++) {
    const block = document.createElement("div");
    block.addEventListener("click", function () {
        console.log(turn);
        console.log(gamemode);
        if (turn === "player_two") {
            if (gamemode === "place_ships") {
                if (player_two_ship_positions.length < 5) {
                    block.classList.add("ships");
                    console.log("player two ships length:", player_two_ship_positions.length);
                    player_two_ship_positions.push(i);
                    console.log(player_two_ship_positions);
                }
                if (player_two_ship_positions.length === 5) {
                    alert("max ships placed please switch to fire mode!")
                }
            }
        }
        if (turn === "player_one") {
            if (gamemode === "shoot_mode") {
                if (player_two_ship_positions.includes(i)) {
                    block.classList.add("hit");
                    block.innerHTML = "O"
                    player_two_ships_sunk.push(i);
                    if (player_two_ships_sunk.length === 5) {
                        alert(playerOneName + " " + "wins!")
                    }
                } else {
                    block.classList.add("miss");
                    block.innerHTML = "X"
                    turn = "player_two";
                }
            }
        }
    });
    block.classList.add("tile");
    player_two_grid.appendChild(block);
}
shoot_mode_button.addEventListener("click", function () {
    gamemode = "shoot_mode";
    console.log(gamemode);
});