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
	console.log(cell);
	cell.addEventListener("click", () => {
		if (cell.innerText !== "") {
			return;
		}

		cell.innerText = "X";
	});
}
