let p = 0; //Value starts at 0

//This line of code directly targets the button and if the value is at 0 it places x but when it gets subtracted it places O then it would repeat
function place(e) {
    if (p == 0) {
        e.target.innerHTML = "X";

        p++;
    }
     else {
        e.target.innerHTML = "O"
        p--;
    }
}

//Resets the board for a new game
function reset() {
    button1.innerHTML = "";
    button2.innerHTML = "";
    button3.innerHTML = "";
    button4.innerHTML = "";
    button5.innerHTML = "";
    button6.innerHTML = "";
    button7.innerHTML = "";
    button8.innerHTML = "";
    button9.innerHTML = "";
   
}

window.alert("Game Rules = Get 3 in a row to Win")
//Pops up a message displaying the game rules



 



