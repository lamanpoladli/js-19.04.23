// let wrapper = document.querySelector(".images-wrapper");
// let fileInput = document.querySelector("#upload");
// let undo = document.querySelector(".undo");
// let dropZone = document.querySelector(".drop-zone");
// let lastDeleted = undefined;

// fileInput.addEventListener("change", (e) => {
//   let files = Array.from(e.target.files);
//   files.forEach((file) => {
//     ShowImage(file);
//   });
// });

// function ShowImage(file) {
//   const fileReader = new FileReader();
//   fileReader.readAsDataURL(file);
//   fileReader.addEventListener("loadend", () => {
//     let src = fileReader.result;
//     let size = Math.floor(file.size / 1024);

//     wrapper.innerHTML += `<div class="col-3">
//     <div class="card">
//         <button class="remove btn btn-danger">X</button>
//         <p class="size">${size}KB</p>
//         <img src="${src}" alt="${file.name}">
//     </div>
//     </div>`;
//     fileInput.value = "";
//     //remove button click
//     let removeButtons = [];
//     for (let i = 0; i < wrapper.children.length; i++) {
//       removeButtons.push(wrapper.children[i].children[0].children[0]);
//     }
//     removeButtons.forEach((removeButton) => {
//       removeButton.addEventListener("click", (e) => {
//         if (window.confirm("Are you sure to delete?")) {
//           lastDeleted = e.target.parentElement.parentElement;
//           e.target.parentElement.parentElement.remove();
//         }
//       });
//     });
//   });
// }

// undo.addEventListener("click", () => {
//   if (lastDeleted !== undefined) {
//     wrapper.append(lastDeleted);
//   } else {
//     window.alert("nothing deleted!");
//   }
// });

// //drag-drop
// dropZone.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// dropZone.addEventListener("drop", (e) => {
//   e.preventDefault();
//   console.log(e);
//   let files = Array.from(e.dataTransfer.files);
//   files.forEach((file) => {
//     ShowImage(file);
//   });
// });


let ul =document.querySelector(".ul");
let undo = document.querySelector(".undo");
let buttonend = document.querySelector(".end-button");
let div2 = document.querySelector(".haha");

undo.addEventListener("click",(e)=>{
    e.preventDefault();
    let input = document.querySelector(".inputt");
    let errorMsg=document.querySelector(".error");
    if(input.value ==""){
        
        errorMsg.classList.replace("d-none","d-block");
    }
    else{
        ul.innerHTML += `
    <li>
        <div class="list-div">
            ${input.value}
            <button class="delete-button">Delete</button>
        </div>
    </li>

`
errorMsg.classList.replace("d-block","d-none");
    }
input.value="";

let removeButtons=[];

    for (let i = 0; i < ul.children.length; i++) {
        removeButtons.push(ul.children[i]);
    }
    removeButtons.forEach((removeButton)=>{
        removeButton.addEventListener("click",(e)=>{
            if (window.confirm("Silmək istədiyindən əminsən?")) {
                e.target.parentElement.parentElement.remove();
            }
        })
    })


})

