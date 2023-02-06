

var playerRed = "R";
var playerYellow = "Y";
var currplayer = playerRed;

var gameOver = false;
var board

var rows = 6;
var columns = 7;

windows.onload = function() {


        setGame();
}
    function setGame() {

        board = [];
         
        for(letr=0; r < rows; r++) {
            let row =[];
            for (letc=0;c < columns; c++)  {
                //js
                row.push('');

                //Html
                

                
                
                <div>id="0=0"class="tile"</div>
                
                let tile = document.createElement("div");
                tile.id = r.toString + "-" + c.toString();
                tile.classList.add("tile");
                tile.addEventlistener ("click"setPiece);
                document.getElementById("board").append(tile);



          }

          board.push(row);
        }

function setPiece() {

    if (gameOver)
    return;
}

let coords = this.id.split("-"); //"0_0" -> ["0","0"]

let r = parseInt(coord[o])
let c = parseInt (coords[1])
board[r][c] = currPlayer;
let tile = this;
if(currPlayer==playerRed){

    tile.classlist.add("red-piece");
    currPlayer= playerYellow
}
else{
tile.classlist.add("yellowpiece")
currplayer = playerRed;

    }