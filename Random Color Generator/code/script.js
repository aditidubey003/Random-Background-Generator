let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')

btn1.addEventListener("click", getRandomColor)
btn2.addEventListener("mousemove", getRandomColor)


// Generating a random number by Math.random()
// convert the number into string 
// cut a slice up to 6 digits (removed "0." 2 elemets)
// give padEnd to the number (if no. is not in 6 digits add 0)
// add '# '

function getRandomColor (){
// Generating a Random color
    const hexColor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
    console.log(hexColor)
// Generating the background
   document.body.style.background = hexColor;
}

getRandomColor()