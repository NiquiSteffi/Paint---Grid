//Creación del grid.
rows = 13;
colums = 13;

const tableContainer = document.querySelector(".table-container");

let gridRows, gridColums;

for (let i = 0; i < rows; i++){
  //Creo los "tr"
  gridRows = document.createElement("tr");
  //Agregar "tr" dentro de la tabla.
  tableContainer.appendChild(gridRows);
  for (let j = 0; j < colums; j++) {
    gridColums = document.createElement("td");
    gridColums.className = "painterBlock";
    gridColums.setAttribute("id", `square-${i}-${j}`);
    //Agregar los td dentro de los tr.
    gridRows.appendChild(gridColums);
  }
}

//Que aparezca el nombre de color elegido.
let nameColor;
const colorSelected = (event) => {
  nameColor = event.target.id;
  const strongTarget = document.querySelector("#selected-color");
  strongTarget.textContent = nameColor;
}
const colorSquares = document.querySelectorAll(".color");
colorSquares.forEach((square) => square.addEventListener("click", colorSelected));


//Detectar el cuadro elegido en la cuadricula y agregarle color al cuadro seleecionado.
const squareSelected = (event) => {
  if (!nameColor) return; //Impide que tenga una clase "Undifined" por no seleccionar un color.
  const squareSelect = document.querySelector(`#${event.target.id}`);
  squareSelect.className = `painterBlock ${nameColor}`; //Agrega la clase "nameColor" y pinta los cuadrados.
}
const gridSquares = document.querySelectorAll(".painterBlock");
gridSquares.forEach((square) => square.addEventListener("click", squareSelected));

//Pintar moviendo el mouse.
const paintSquareOnMove = (event) => {
    if (event.buttons !== 1) return; //Si el boton seleecionado es distinto de 1 no hace nada.
    squareSelected(event); //Reusamos una función para no volver a reescribirla.
}
gridSquares.forEach((square) => square.addEventListener("mousemove", paintSquareOnMove));

//Resetear grilla.
const resetGrid = () => {
    gridSquares.forEach((square) => square.className = "painterBlock");
    const strongTarget = document.querySelector("#selected-color");
    nameColor = null;
    strongTarget.textContent = "";
}
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", resetGrid);
  
const idSquares = document.querySelectorAll(".painterBlock");
idSquares.forEach((square) => square.addEventListener("click", squareSelected));
  