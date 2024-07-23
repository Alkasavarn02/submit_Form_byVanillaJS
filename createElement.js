
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

let input = document.querySelectorAll("input");
let label = document.querySelectorAll("label");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let allFilled = true;
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        document.querySelector("ul").innerHTML="";
        for (let i = 0; i < input.length; i++) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`Your ${label[i].innerHTML} is ${input[i].value}`));
            document.querySelector("ul").appendChild(li);
            input[i].value = "";
        }
    } 
    else {
        alert("All fields are required!");
    }
});


