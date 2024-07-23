
// ------------------------add name into the dom--------------------

// function addName(name){
//     let li = document.createElement('li')
//     li.setAttribute("class",'li')
//     li.innerHTML = name
//     document.querySelector("ul").appendChild(li)
// }

// addName("alka")
// addName("alvi")

// -----------------------add input value into the dom-------------------------

// let input = document.querySelector("#input")

// let btn = document.querySelector("#btn")

// // btn.addEventListener("click",()=>{
// //     let li = document.createElement('li')
// //     li.setAttribute("class",'li')
// //     li.innerHTML = input.value
// //     document.querySelector("ul").appendChild(li)
// //     input.value = ""
// // })

// btn.addEventListener("click",()=>{
//     let li = document.createElement('li')
//     li.setAttribute("class",'li')
//     li.appendChild(document.createTextNode(input.value))
//     document.querySelector("ul").appendChild(li)
//     input.value = ""
// })

// -------------------------------Make input Form which display all the value onto the screen----------------------

let inputs = document.querySelectorAll("input")
let lables = document.querySelectorAll("label")
console.log(lables)
let ul = document.querySelector("ul")

const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let allfield = true;
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value === ""){
            allfield = false;
            break;
        }
    }
    if (allfield){
        for(let i=0; i<inputs.length; i++){
            const li = document.createElement("li")
            li.setAttribute("class",'items')
            li.textContent = `Your ${lables[i].id} is ${inputs[i].value}`
            ul.appendChild(li)
            inputs[i].value = ""
            
        }
    }
})


