let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let msg = document.querySelector(".msg")
let newbtn = document.querySelector(".newbtn")
let container=document.querySelector(".msg-box")
let turn0 = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    count = 0;
}

const enablebox = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}

const resetGame = () => {
    enablebox();
    turn0 = true;
    container.classList.add("hide");
    
    }
    


const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    container.classList.remove("hide");
    disablebox()
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
                showWinner(pos1)
            }
            
        }
    }
}

const gameDraw = () => {
    container.classList.remove("hide");
    msg.innerText = "Game was a Draw";
    disablebox();
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        count++;
        console.log(count);
        if (turn0 == true) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

        if (count === 9) {
            gameDraw();
        }


    });
    
});

reset.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);