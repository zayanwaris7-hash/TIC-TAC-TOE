let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".rstbtn");
let nod = document.querySelector(".container");

let condition = true; // true = O, false = X
let gameOver = false;
let msg = null;

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Click logic
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText !== "" || gameOver) return;

        box.innerText = condition ? "O" : "X";
        condition = !condition;
        box.disabled = true;

        checkWinner();
    });
});

function checkWinner() {
    for (let pattern of winner) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            gameOver = true;

            if (!msg) {
                msg = document.createElement("h1");
                msg.style.marginTop = "20px";
                nod.appendChild(msg);
            }

            msg.innerText = `🎉 Player ${pos1} Wins!`;
            msg.style.display = "block"; // ✅ SHOW message
            return;
        }
    }
}

// Reset button
resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });

    condition = true;
    gameOver = false;

    if (msg) {
        msg.style.display = "none"; // ✅ hide on reset
    }
});
