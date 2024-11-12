function display(){
    var toggle /*the variable is  used to store a method or code sha*/= document.getElementById("display");
    
    if(toggle.innerHTML==="")/*the triple equals to means if the innerHTML is the same has empty it should show the innerHTML content*/{
    toggle.innerHTML="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";

    }
    else{
        toggle.innerHTML="";
    }
}

function display1(){
    var toggle /*the variable is  used to store a method or code sha*/= document.getElementById("display1");
    
    if(toggle.innerHTML==="")/*the triple equals to means if the innerHTML is the same has empty it should show the innerHTML content*/{
    toggle.innerHTML="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";

    }
    else{
        toggle.innerHTML="";
    }
}

function display2(){
    var toggle /*the variable is  used to store a method or code sha*/= document.getElementById("display2");
    
    if(toggle.innerHTML==="")/*the triple equals to means if the innerHTML is the same has empty it should show the innerHTML content*/{
    toggle.innerHTML=" Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";

    }
    else{
        toggle.innerHTML="";
    }
}

function display3(){
    var toggle /*the variable is  used to store a method or code sha*/= document.getElementById("display3");
    
    if(toggle.innerHTML==="")/*the triple equals to means if the innerHTML is the same has empty it should show the innerHTML content*/{
    toggle.innerHTML="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";

    }
    else{
        toggle.innerHTML="";
    }
}



function change(){
    var icon=document.getElementById('change');
    if(icon.src.endsWith('plus.svg')){
        icon.src='./icon-minus.svg';
    }
    else{
        icon.src='./icon-plus.svg';
    }
}

function change1(){
    var icon=document.getElementById('change1');
    if(icon.src.endsWith('plus.svg')){
        icon.src=./icon-minus.svg';
    }
    else{
        icon.src='./icon-plus.svg';
    }
}

function change2(){
    var icon=document.getElementById('change2');
    if(icon.src.endsWith('plus.svg')){
        icon.src='./icon-minus.svg';
    }
    else{
        icon.src='./icon-plus.svg';
    }
}

function change3(){
    var icon=document.getElementById('change3');
    if(icon.src.endsWith('plus.svg')){
        icon.src=./icon-minus.svg';
    }
    else{
        icon.src='./icon-plus.svg';
    }
}


