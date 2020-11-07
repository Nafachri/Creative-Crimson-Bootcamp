let move = prompt("UP, RIGHT, BOTTOM or LEFT?");

switch (move) {
    case "UP":
        alert("Your character is going to up!")
        break;
    case "RIGHT":
        alert("Your character is going to the right!")
        break;
    case "BOTTOM":
        alert("Your character is going to down!")
        break;
    case "LEFT":
        alert("Your character is going to the left!")
        break;
    default:
        break;
}