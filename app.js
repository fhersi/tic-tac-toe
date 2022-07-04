const divBoard = document.querySelector(".board");

const GameBoard = (() => {
	const board = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];
	return { board };
})();

const PlayerFactory = (name) => {
	let playerName = name;

	const win = () => "Congratulations You've Won!";
	const lose = () => "Sorry You've Lost";

	return { playerName, win, lose };
};

const displayBoard = () => {
	for (let row of GameBoard.board) {
		const div = elementCreate("div", "row");
		div.classList.add("board");
		for (let cell of row) {
			const rowCell = elementCreate("div", "cell", cell);
			div.appendChild(rowCell);
		}
		divBoard.appendChild(div);
	}
};

const elementCreate = (elementType, className, value) => {
	const newElement = document.createElement(elementType);
	newElement.classList.add(className);

	if (value) {
		newElement.innerText = value;
	}

	return newElement;
};

displayBoard();

const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
	cell.addEventListener("click", () => {
		if (cell.innerText !== "") {
			return;
		}

		cell.innerText = "X";
		computerMove();
	});
}

const won = () => {
	const top_row = [cells[0], cells[3], cells[6]];
	const middle_row = [cells[1], cells[4], cells[7]];
	const bottom_row = [cells[2], cells[5], cells[8]];
	const left_col = [cells[0], cells[1], cells[2]];
	const middle_col = [cells[3], cells[4], cells[5]];
	const right_col = [cells[6], cells[7], cells[8]];
	const diag_1 = [cells[0], cells[4], cells[8]];
	const diag_2 = [cells[2], cells[4], cells[6]];

	const checkWin = [
		top_row,
		middle_row,
		bottom_row,
		left_col,
		middle_col,
		right_col,
		diag_1,
		diag_2,
	];

	//console.log(top_row);

	for (let winningCombination of checkWin) {
		let notBlank = winningCombination[0].innerText === "";
		if (
			winningCombination[0].innerText === winningCombination[1].innerText &&
			winningCombination[0].innerText === winningCombination[2].innerText &&
			!notBlank
		) {
			for (let cell of winningCombination) {
				cell.classList.add("winningCombo");
			}

			return true;
		}
		//console.log(winningCombination);
	}
	return false;
};

const random = (number) => Math.floor(Math.random() * number);

const computerMove = () => {
	let randomNum = random(cells.length);
	console.log(randomNum);
	if (won()) {
		console.log("game over!");
		return;
	}
	let currCell = cells[randomNum];
	console.log(currCell);
	if (currCell.innerText === "") {
		currCell.innerText = "0";
		won();
		return;
	}
	computerMove(random(cells.length));
};
