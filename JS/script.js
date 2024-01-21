let string = ""
let screen = document.querySelector('#screen')
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
        } 
        else{
            console.log(e.target)
            string = string + e.target.innerHTML
        }
        document.querySelector('input').value = string
    })
})