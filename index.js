let string = "";
let memory = "";
let btn = document.querySelectorAll('.btn');

Array.from(btn).forEach(button =>
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('.display').innerHTML = string;
            memory = string;
        }
        else if (e.target.innerHTML === 'AC') {
            memory = document.querySelector('.display').innerHTML;
            string = '';
            document.querySelector('.display').innerHTML = string;

        }
        else if (e.target.innerText === 'M+') {
            let check = memory.slice(-1);
            if (check === "+" || check === "-") {
                document.querySelector('.display').innerHTML = "Invalid";
            } else {
                memory = memory + "+";
                string = memory;
                document.querySelector('.display').innerHTML = string;
            }
        }
        else if (e.target.innerText === 'M-') {
            let check = memory.slice(-1);
            if (check === "-" || check === "+") {
                document.querySelector('.display').innerHTML = "Invalid";
            } else {
                memory = memory + "-";
                string = memory;
                document.querySelector('.display').innerHTML = string;
            }
        }
        else if (e.target.innerText === 'del') {
            string = string.slice(0, -1);
            document.querySelector('.display').innerHTML = string;

        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.display').innerHTML = string;
            memory = string;
        }
    }
    )
)