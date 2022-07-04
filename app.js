const divBoard = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

const GameBoard = (() => {
	const board = [
		["X", "0", "X"],
		["X", "X", "0"],
		["0", "0", "X"],
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

for (let cell of cells) {
	cell.addEventListener("click", () => {
		console.log(cell.innerText);
		if (!cell.innerText) {
			return;
		}

		cell.innerText = "X";
	});
}
