
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
//   add task
    

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

