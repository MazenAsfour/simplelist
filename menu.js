const input=document.querySelector("#text");
const ul1=document.querySelector("ul");
const li1=document.querySelectorAll("i");
const one=document.querySelector("#one");
const li2=document.querySelector("i");
console.log(li2);
console.log(li1);


function add(value){
input.value=value;
console.log(value);
var increment=li1.length;
//li2.style.display="block";
ul1.innerHTML+='<li>'+value+'<i class="fas fa-trash-alt" onclick="hidenew()">'+'</li>';
}
function hidenew(){
    ul1.lastChild.style.display="none";
}
/*function hide(a){

var index=a;
for (var i=0;i<li1.length;i++){
li1[i].style.display="block";
}
li1[index-1].parentElement.style.display="none";
ul1.childElementCount[index-1].style.display="none";
//li1[0].parentElement.style.display="none";
}*/
function hide1(){
    one.style.display="none";
}
function hide2(){
    document.querySelector("#two").style.display="none";
}

function hide3(){
    document.querySelector("#three").style.display="none";
}