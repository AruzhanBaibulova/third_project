const random_number_call = (number) => {
    let random_number = Math.floor(Math.random()*11)
    let human_input = number; 
    if (random_number === human_input) {
        console.log(`You've picked ${human_input} and the computer choice is ${random_number}. You've guessed the number, congratulations!!!`);
    } else if (typeof human_input === "undefined" || human_input === null) {
        return "You didn't pick up any number!";
    } else if (human_input > 10|| human_input < 0) {
        return "You need to pick up a number between 0 and 10"
    } else if (typeof human_input === "string") {
        return "You need to pick up a NUMBER"; 
    } else {
        console.log(`You've picked ${human_input} and the computer choice is ${random_number}. You've picked the wrong number, try again!`);
    }
};

console.log(random_number_call(12));






