// <!-- ---------4-------- -->
let select3 = document.querySelectorAll(".fin1");
let select2 = document.querySelectorAll(".in2");
let select = document.querySelectorAll(".in1");
let select1 = document.querySelectorAll(".in");
let addListContainer=document.getElementById("addListContainer");           
let select4 = document.querySelectorAll(".in3");
let select5 = document.querySelectorAll("#clear");
let select6 = document.querySelectorAll(".it1");


let sum = 0;

let str = " of 5 tasks done";

for (let i = 0; i < select1.length; i++) {
  select1[i].addEventListener("click", function () {
    if (select[i].checked) {
      select1[i].classList.toggle("line");
      sum -= 1;
    } else {
      select1[i].classList.toggle("line");
      sum += 1;
    }
    tasks_number.innerHTML = sum + str;
  });
}

function removeChecked() {
  for (let i = 0; i < select.length; i++) {
    if (select[i].checked) {
      select[i].checked = false;
      select1[i].classList.toggle("line");
    } else {
      select1[i].classList.toggle("line1");
    }
    sum = 0;
    tasks_number.innerHTML = sum + str;
  }
}

let inputs=[
];
for (let i = 0; i < select1.length; i++) {
inputs.push({
    "label": select1[i].textContent,
    "id": i,
    "checked":select[i].checked==true ?"true":"false",
});
}

for (let i = 0; i < select6.length; i++) {
    select2[i].addEventListener("click", function () {
        select3[i].classList.toggle("fin");
    });
  }

  addListContainer+="";
  var o;

function addList()
  {
    let select11 = document.querySelectorAll(".in");
    let sdsd=select11.length;

    let divosama=document.createElement("div");

    let aa;
    o=sdsd+2;
    let label_check="scales"+o;
    if(sdsd%2==0){
      aa="<div class='it1 it1--1 fin1'><div class='osa'><input class='in1' type='checkbox' id="+label_check+" name='scales' unchecked/></div><div><h1><label class='in' for="+label_check+">"+document.getElementById("addList_input1").value +"</label></h1></div></div><div class='it1 it1--2 '><span class='material-icons'>' edit' </span><span class='material-icons' class='in2'> 'clear' </span></div>";
    }
    else{
      aa="<div class='it1 it1--3 fin1'><div class='osa'><input class='in1' type='checkbox' id="+label_check +"name='scales' unchecked/></div><div><h1><label class='in' for="+label_check+">"+document.getElementById("addList_input1").value +"</label></h1></div></div><div class='it1 it1--4 '><span class='material-icons'>' edit' </span><span class='material-icons' class='in2'> 'clear' </span></div>";

    }

    addListContainer.innerHTML+=aa;
    let heighSection=document.getElementById("sec1").clientHeight;
    heighSection+=100;
    document.getElementById("sec1").style.height=heighSection+"px";
    document.getElementById("sec1").style.gridTemplateRows = "100px 100px 50% 70px";

 }

for (let i = 0; i < select1.length ; i++) {
  select1[i].addEventListener("click", function () {
    if (select[i].checked) {
      select1[i].classList.toggle("line");
      sum -= 1;
    } else {
      select1[i].classList.toggle("line");
      sum += 1;
    }
    tasks_number.innerHTML = sum + str;
  });
}

  let delete_div=document.getElementsByClassName("fin1");
  var elems = document.getElementsByClassName('fin1');
  for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'none';
  }
   function del(){   
    let heighSection=document.getElementById("sec1").clientHeight;
    
      for (let i = 0; i < select2.length ; i++) {
  select2[i].addEventListener("click", function () {

    heighSection-=200;
    document.getElementById("sec1").style.height=heighSection+"px";
    document.getElementById("sec1").style.gridTemplateRows = "100px 100px 50% 70px";
    if (select[i].checked) {
      sum -= 1;
    } else {
      sum -= 1;
    }
    select3[i].classList.toggle("fin");
    select6[i].classList.toggle("fin");
  });
    
   }}
    

  // <!-- ---------/4/-------- -->
