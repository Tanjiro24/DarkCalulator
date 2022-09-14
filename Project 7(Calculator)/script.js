let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
            input.style.animation = "big 0.5s ease-in-out";
            input.style.animationFillMode = "forwards";
        }
        else if (e.target.innerHTML == '%') {
            string = string / 100;
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML == '←') {
            string = string.slice(0, -1)
            document.querySelector('input').value = string;
        }


        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })

})

