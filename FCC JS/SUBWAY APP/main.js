
 // initialize count as 0
 // listen for increment button
 // increment the count variable when the button is clicked
 // change the count-el in the HTML to reflect the new count

 // always use textContent not innerText
 
 let saveEl = document.getElementById("save-el")
 let countEL = document.getElementById("count-el")
 let count = 0;

 console.log(saveEl)



function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
   let countStr = count+ " - "

   saveEl.textContent += countStr
   countEL.textContent = 0
   count = 0

    console.log(count)
}







 

