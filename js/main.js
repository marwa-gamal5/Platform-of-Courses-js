// div1---------------------------------------
let Content1 = document.getElementById("Content1");
let plusBtn1 = document.getElementById("plusBtn1");
let selectCicle1 = document.getElementById("selectCicle1");
let topCircle1 = document.getElementById("topCircle1");
let downCircle1 = document.getElementById("downCircle1");
let role1 = document.getElementById("role1");
let social1 = document.getElementById("social1");
let icon1 = document.getElementById("icon1");

// Add a click event listener to the button
plusBtn1.addEventListener("click", ()=> {
    // Change the button's class to apply the clicked styles
    selectCicle1.classList.add("selected-outer-circle" ,"mb-2" );
    icon1.classList.add("d-none");
    social1.classList.remove("d-none");
    role1.classList.add("selected-p4");
    topCircle1.classList.add("selected-right-small-circle");
    downCircle1.classList.add("selected-left-small-circle");
})
Content1.addEventListener("mouseleave", function() {
    // Change the button's class to apply the clicked styles
    selectCicle1.classList.remove("selected-outer-circle");
    selectCicle1.classList.replace("mb-3" , "mb-0" );
    icon1.classList.remove("d-none");
    social1.classList.add("d-none");
    role1.classList.remove("selected-p4");
    topCircle1.classList.remove("selected-right-small-circle");
    downCircle1.classList.remove("selected-left-small-circle");
})
// div2---------------------------------------
let Content2 = document.getElementById("Content2");
let plusBtn2 = document.getElementById("plusBtn2");
let selectCicle2 = document.getElementById("selectCicle2");
let topCircle2 = document.getElementById("topCircle2");
let downCircle2 = document.getElementById("downCircle2");
let role2 = document.getElementById("role2");
let social2 = document.getElementById("social2");
let icon2 = document.getElementById("icon2");

// Add a click event listener to the button
plusBtn2.addEventListener("click", ()=> {
    // Change the button's class to apply the clicked styles
    selectCicle2.classList.add("selected-outer-circle" ,"mb-2" );
    icon2.classList.add("d-none");
    social2.classList.remove("d-none");
    role2.classList.add("selected-p4");
    topCircle2.classList.add("selected-right-small-circle");
    downCircle2.classList.add("selected-left-small-circle");
})
Content2.addEventListener("mouseleave", function() {
    // Change the button's class to apply the clicked styles
    selectCicle2.classList.remove("selected-outer-circle");
    selectCicle2.classList.replace("mb-3" , "mb-0" );
    icon2.classList.remove("d-none");
    social2.classList.add("d-none");
    role2.classList.remove("selected-p4");
    topCircle2.classList.remove("selected-right-small-circle");
    downCircle2.classList.remove("selected-left-small-circle");
})
// div3---------------------------------------
let Content3 = document.getElementById("Content3");
let plusBtn3= document.getElementById("plusBtn3");
let selectCicle3 = document.getElementById("selectCicle3");
let topCircle3 = document.getElementById("topCircle3");
let downCircle3 = document.getElementById("downCircle3");
let role3 = document.getElementById("role3");
let social3 = document.getElementById("social3");
let icon3= document.getElementById("icon3");

// Add a click event listener to the button
plusBtn3.addEventListener("click", ()=> {
    // Change the button's class to apply the clicked styles
    selectCicle3.classList.add("selected-outer-circle" ,"mb-2" );
    icon3.classList.add("d-none");
    social3.classList.remove("d-none");
    role3.classList.add("selected-p4");
    topCircle3.classList.add("selected-right-small-circle");
    downCircle3.classList.add("selected-left-small-circle");
})
Content3.addEventListener("mouseleave", function() {
    // Change the button's class to apply the clicked styles
    selectCicle3.classList.remove("selected-outer-circle");
    selectCicle3.classList.replace("mb-3" , "mb-0" );
    icon3.classList.remove("d-none");
    social3.classList.add("d-none");
    role3.classList.remove("selected-p4");
    topCircle3.classList.remove("selected-right-small-circle");
    downCircle3.classList.remove("selected-left-small-circle");
})
// div4---------------------------------------
let Content = document.getElementById("Content4");
let plusBtn = document.getElementById("plusBtn4");
let selectCicle = document.getElementById("selectCicle4");
let topCircle = document.getElementById("topCircle4");
let downCircle = document.getElementById("downCircle4");
let role = document.getElementById("role4");
let social = document.getElementById("social4");
let icon = document.getElementById("icon4");

// Add a click event listener to the button
plusBtn.addEventListener("click", ()=> {
    // Change the button's class to apply the clicked styles
    selectCicle.classList.add("selected-outer-circle" ,"mb-2" );
    icon.classList.add("d-none");
    social.classList.remove("d-none");
    role.classList.add("selected-p4");
    topCircle.classList.add("selected-right-small-circle");
    downCircle.classList.add("selected-left-small-circle");
})
Content.addEventListener("mouseleave", function() {
    // Change the button's class to apply the clicked styles
    selectCicle.classList.remove("selected-outer-circle");
    selectCicle.classList.replace("mb-3" , "mb-0" );
    icon.classList.remove("d-none");
    social.classList.add("d-none");
    role.classList.remove("selected-p4");
    topCircle.classList.remove("selected-right-small-circle");
    downCircle.classList.remove("selected-left-small-circle");
})

//Course Details Buttons
// // Get all the buttons by their IDs
// const overviewButton = document.getElementById("overviewButton");
// const curriculumButton = document.getElementById("curriculumButton");
// const instructorButton = document.getElementById("instructorButton");
// const reviewButton = document.getElementById("reviewButton");
//
// // Add click event listeners to toggle the "active" class for each button
// overviewButton.addEventListener("click", toggleActiveClass);
// curriculumButton.addEventListener("click", toggleActiveClass);
// instructorButton.addEventListener("click", toggleActiveClass);
// reviewButton.addEventListener("click", toggleActiveClass);
//
// function toggleActiveClass() {
//     // Remove the "active" class from all buttons
//     overviewButton.classList.remove("active");
//     curriculumButton.classList.remove("active");
//     instructorButton.classList.remove("active");
//     reviewButton.classList.remove("active");
//
//     // Add the "active" class to the clicked button
//     this.classList.add("active");
// }
