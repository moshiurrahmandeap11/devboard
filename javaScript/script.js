// adding theme color changer for theme btn
// document
// .getElementById("colorChanger")
// .addEventListener('click', function(event){
//     event.preventDefault();
//     document.body.style.backgroundColor = 'green' 
//     console.log('moshiur');
// });

// shopEase completed button

function buttonClicker(){
    alert("Board Update Successfully");
    // task assigned
    const taskAssigned = document.getElementById("taskAssigned").innerText;
    const convertedTask = parseInt(taskAssigned) - 1;
    document.getElementById("taskAssigned").innerText = convertedTask;
    // header number
    const headerNum = document.getElementById("headerNumber").innerText;
    const convertedNumber = parseInt(headerNum) + 1;
    document.getElementById("headerNumber").innerText = convertedNumber;
    document.getElementById("ShopEase").disabled = true;

}