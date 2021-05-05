let firstName = document.querySelector("#first-name");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let currentLev = document.querySelector("#curr-level");
let favClub = document.querySelector("#fav-club");
let tableBody = document.querySelector(".tbody");
let table = document.querySelector(".table");
let submit = document.querySelector("#sub-btn");
let delete_btn = document.querySelector(".delete");

const objArr =[];
let id = 0;

submit.addEventListener("click",setTable);
table.addEventListener("click",removeTable);

function setTable(event){
    event.preventDefault();
    validateInput(firstName.value,surname.value,age.value, currentLev.value,favClub.value);
}

function createAndPush(){
    let obj = {
        fName: firstName.value,
        id: id,
        sName: surname.value,
        Age: age.value,
        current_level: currentLev.value,
        favourite_club: favClub.value,
        deleted: false
    }
    let myJson = JSON.stringify(obj)
    objArr.push(myJson);
    return objArr;
}
function addToTable(arr){
    let row;
    let position = "beforeend"
    arr.forEach((values)=>{
        let nValue = JSON.parse(values);
        row = `
        <tr class = "table-row">
            <td>${nValue.fName}</td>
            <td>${nValue.sName}</td>
            <td>${nValue.Age}</td>
            <td>${nValue.current_level}</td>
            <td>${nValue.favourite_club}</td>
            <td><i class="far fa-trash-alt delete" id = "${id}"></i></td>
        </tr>
        `
    })
   return tableBody.insertAdjacentHTML(position,row);
}

function removeTable(event) {
    let arr = [];
    if(event.target.classList.contains("delete")){//targets the the element in the table with classname delete
        let btn = event.target;//targets the delete btn
        btn.closest("tr").remove();//finds the closest element to the targeted element and removes it
    }
    //btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);
}
function validateInput(...inputs){
        if(inputs.includes("")){
            alert("All inputs must be filled");
        }else{
            createAndPush();
            addToTable(objArr);
            id++;
        }
}