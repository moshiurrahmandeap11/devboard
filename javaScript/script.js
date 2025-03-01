document.getElementById("header-back-button").style.display = 'none';
document.getElementById("section-second").style.display = 'none';

// background changer
const backgroundChanger = document.getElementById("colorChangerID");
backgroundChanger.addEventListener('click', function(event){
    event.preventDefault();
    document.body.style.backgroundColor = 'green'
})
// today date
const date = new Date();
const newDate = date.toDateString();
document.getElementById("todayDate").innerText = newDate;

// a function for all buttons

let completedButton = 0;

function allInOne(countedBtn) {
  alert("Board Update Successfullly");
  // task assigned
  const taskAssigned = document.getElementById("taskAssigned").innerText;
  const convertedTask = parseInt(taskAssigned) - 1;
  document.getElementById("taskAssigned").innerText = convertedTask;
  // header number
  const headerNum = document.getElementById("headerNumber").innerText;
  const convertedNumber = parseInt(headerNum) + 1;
  document.getElementById("headerNumber").innerText = convertedNumber;

  //   button disable
  document.getElementById(countedBtn).disabled =true;

  completedButton++;

  if (completedButton === 6){
    alert('Congratulations!! You have completed all the current task.')
  }
}

const completeBtn = ["ShopEase", "cloudSync", "swiftPay", "metaID", "googleLLC", "glassDoar"];
for (let countedBtn of completeBtn){
    document.getElementById(countedBtn).addEventListener('click', function(event){
        event.preventDefault();
        allInOne(countedBtn);
    });
}


// history part

// Shopease 
document.getElementById("ShopEase").addEventListener('click', function(){
    const addDarkTask = document.getElementById("fixMobile").innerText;
    const currentTime = new Date().toLocaleTimeString();

    const fullComment = `You have Complete The Task <strong>${addDarkTask}</strong> at ${currentTime}`;

    const commentContainer = document.getElementById("history-container");
    const commentElement = document.createElement("p");
    commentElement.classList.add("history-style");
    commentElement.innerHTML = fullComment;

    commentContainer.appendChild(commentElement); 
});

// cloudSync
document.getElementById("cloudSync").addEventListener("click", function () {
  const addDarkTask = document.getElementById("addDark").innerText; 
  const currentTime = new Date().toLocaleTimeString();

  const fullComment = `You have Complete The Task <strong>${addDarkTask}</strong> at ${currentTime}`;

  const commentContainer = document.getElementById("history-container"); 
  const commentElement = document.createElement("p");
  commentElement.classList.add('history-style')
  commentElement.innerHTML = fullComment; 

  commentContainer.appendChild(commentElement); 
});


// swiftPay
document.getElementById("swiftPay").addEventListener('click', function(){
    const addDarkTask = document.getElementById("optimizeHome").innerText;
    const currentTime = new Date().toLocaleTimeString();

    const fullComment = `You have Complete The Task <strong>${addDarkTask}</strong> at ${currentTime}`;

    const commentContainer = document.getElementById("history-container");
    const commentElement = document.createElement("p");
    commentElement.classList.add("history-style");
    commentElement.innerHTML = fullComment;

    commentContainer.appendChild(commentElement); 
});

// metaID
document.getElementById("metaID").addEventListener('click', function(){
    const addDarkTask = document.getElementById("addNewEmoji").innerText;
    const currentTime = new Date().toLocaleTimeString();

    const fullComment = `You have Complete The Task <strong>${addDarkTask}</strong> at ${currentTime}`;

    const commentContainer = document.getElementById("history-container");
    const commentElement = document.createElement("p");
    commentElement.classList.add("history-style");
    commentElement.innerHTML = fullComment;

    commentContainer.appendChild(commentElement); 
})

// googleLLC
document.getElementById("googleLLC").addEventListener('click', function(){
    const addDarkTask = document.getElementById("integrateApi").innerText;
    const currentTime = new Date().toLocaleTimeString();

    const fullComment = `You have Complete The Task <strong>${addDarkTask}</strong> at ${currentTime}`;

    const commentContainer = document.getElementById("history-container");
    const commentElement = document.createElement("p");
    commentElement.classList.add("history-style");
    commentElement.innerHTML = fullComment;

    commentContainer.appendChild(commentElement); 
})

// glassDoar
document.getElementById("glassDoar").addEventListener('click', function(){
    const addDarkTask = document.getElementById("improveJob").innerText;
    const currentTime = new Date().toLocaleTimeString();

    const fullComment = `You have Complete The Task <strong>${addDarkTask}</strong> at ${currentTime}`;

    const commentContainer = document.getElementById("history-container");
    const commentElement = document.createElement("p");
    commentElement.classList.add("history-style");
    commentElement.innerHTML = fullComment;

    commentContainer.appendChild(commentElement); 
})

// clear history 
const clear = document.getElementById("clearHistory");
clear.addEventListener('click', function(event){
    event.preventDefault();
    const commentContainer = document.getElementById("history-container");
    const removeAllHistory = commentContainer.querySelectorAll('.history-style')

    for (const history of removeAllHistory){
        history.remove();
    }
})


// discover something toggle button
const discover = document.getElementById("discover-something");
discover.addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('section-first').style.visibility = 'hidden'
    document.getElementById("headerNumberID").style.visibility = 'hidden';
    document.getElementById("colorChangerID").style.visibility = 'hidden';
    document.getElementById("header-back-button").style.display = "block";
    document.getElementById("section-second").style.display = "block";
})

const headerButton = document.getElementById('header-back-button');
headerButton.addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("section-first").style.visibility = "visible";
    document.getElementById("headerNumberID").style.visibility = 'visible';
    document.getElementById("colorChangerID").style.visibility = 'visible';
    document.getElementById("header-back-button").style.display = 'none';
    document.getElementById("section-second").style.display = "none";
})