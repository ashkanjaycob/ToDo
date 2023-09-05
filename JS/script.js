const input = document.querySelector('.inpt');
const list = document.querySelector('#list');


// Create & Submit TodoS
const form = document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault()
    appendtoList();
    SaveData();

})

// append child <li> to list 
function appendtoList() {
    const Li = document.createElement("li");
    Li.innerHTML = `
    ${input.value}
    `
    if (input.value !== "") {
        list.appendChild(Li);
        console.log(input.value);
        input.value = "";
    } else {
        alert("Please Fill Out The Input Fisrt.")
    }
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    Li.appendChild(span);
}

// append close button & done button 

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('cheked');
        SaveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        SaveData();
    }
})

// make a local storage  on your browser to save data 
function SaveData() {
    localStorage.setItem("data", list.innerHTML);
}
function ShowList() {
    list.innerHTML = localStorage.getItem('data');
}
ShowList();

// add clock 

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;

    console.log(time);
    setTimeout(showTime, 1000);
    const showTi = document.querySelector('#timeShow').innerHTML = time;
}

showTime();








