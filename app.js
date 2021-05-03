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

submit.addEventListener("click",setTable);
table.addEventListener("click",removeTable);

function setTable(event){
    event.preventDefault();
    createAndPush();
    addToTable(objArr);
}

function createAndPush(){
    let obj = {
        fName: firstName.value,
        sName: surname.value,
        Age: age.value,
        current_level: currentLev.value,
        favourite_club: favClub.value
    }
    let myJson = JSON.stringify(obj)
    objArr.push(myJson);
    return objArr;
}
function addToTable(arr){
    let output = ""
    arr.forEach((values)=>{
        let nValue = JSON.parse(values);
        let row = `
        <tr class = "table-row">
            <td>${nValue.fName}</td>
            <td>${nValue.sName}</td>
            <td>${nValue.Age}</td>
            <td>${nValue.current_level}</td>
            <td>${nValue.favourite_club}</td>
            <td><i class="far fa-trash-alt delete"></i></td>
        </tr>
        `
        output+=row
    })
   return tableBody.innerHTML = output;
}

function removeTable(event) {
    if(event.target.classList.contains("delete")){//targets the the element in the table with classname delete
        let btn = event.target;//targets the delete btn
        btn.closest("tr").remove();//finds the closest element to the targeted element and removes it
    }
}