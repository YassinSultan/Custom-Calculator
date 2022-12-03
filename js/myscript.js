let currNum = document.getElementById("currNum")
let prevNum = document.getElementById("prevNum")
let buttons=document.querySelectorAll("button")

let num;
let plus=false;
let minus=false;
let times=false;
let divide=false;
let equll=false;
let minusNum=false;

// button.addEventListener("click",()=>{
//     button.style="box-shadow:inset rgb(0 0 0 / 54%) 1px -1px 13px 0px;"
// })

// format function
function format(){
    currNum.value=""
    prevNum.value=""
    num=undefined
    result=undefined
    plus=false
    minus=false
    divide=false
    times=false
    equll=false
}

// delete function
function deletee(){
    if(equll!=true){
        if(currNum.value!=""){
            let str = currNum.value
            currNum.value=str.slice(0 , -1)
            if(str.length==1){
                buttons[0].innerHTML="AC"
            }
        }

    }
    else{
        currNum.value=""
        prevNum.value=""
        num=undefined
        result=undefined
        plus=false
        minus=false
        divide=false
        times=false
        equll=false
    }
}
// add function
function add(){
    plus=true
    minus=false
    divide=false
    times=false
    if(currNum.value!=""){
        if(equll==true){
            prevNum.value=prevNum.value+"="+currNum.value
            currNum.value=""
            equll=false
        }
        else{
            if(num==undefined){
                num=0
                num=num+Number(currNum.value)
            }
            else{
                num=num+Number(currNum.value)
            }
            if(prevNum.value==""){
                prevNum.value=currNum.value
                currNum.value=""
            }
            else{
                prevNum.value=prevNum.value+"+"+currNum.value
                currNum.value=""
            }

        }

    }
}
// minus function
function minuss(){
    plus=false
    minus=true
    divide=false
    times=false
    if(equll==true){
        prevNum.value=prevNum.value+"="+currNum.value
        currNum.value=""
        equll=false
    }
    else{
        if(currNum.value!=""){
            if(num==undefined){
                num=0
                num=num+Number(currNum.value)
            }
            else{
                num=num-Number(currNum.value)
            }
            if(prevNum.value==""){
                prevNum.value=currNum.value
                currNum.value=""
            }
            else{
                prevNum.value=prevNum.value+"-"+currNum.value
                currNum.value=""
            }
    
        }
        else{
            currNum.value="-"
        }
    }

}
// times function
function timess(){
    plus=false
    minus=false
    divide=false
    times=true
    if(equll==true){
        prevNum.value=prevNum.value+"="+currNum.value
        currNum.value=""
        equll=false
        console.log("yaseen")
    }
    else{
        if(currNum.value!=""){
            if(num==undefined){
                num=0
                num=num+Number(currNum.value)
            }
            else{
                num=num*Number(currNum.value)
            }
            if(prevNum.value==""){
                prevNum.value=currNum.value
                currNum.value=""
            }
            else{
                prevNum.value=prevNum.value+"*"+currNum.value
                currNum.value=""
            }
    
        }
    }

}
// divide function
function dividee(){
    plus=false
    minus=false
    divide=true
    times=false
    if(equll==true){
        prevNum.value=prevNum.value+"="+currNum.value
        currNum.value=""
        equll=false
    }
    else{
        if(currNum.value!=""){
            if(num==undefined){
                num=0
                num=num+Number(currNum.value)
            }
            else{
                num=num/Number(currNum.value)
            }
            if(prevNum.value==""){
                prevNum.value=currNum.value
                currNum.value=""
            }
            else{
                prevNum.value=prevNum.value+"/"+currNum.value
                currNum.value=""
            }
    
        }
    }

}


// equl function
function equl(){
    if(equll==false){
        if(num!=undefined){
            equll=true
            buttons[0].innerHTML="AC"
            if(plus==true){
                num=num+Number(currNum.value)
                prevNum.value=prevNum.value+"+"+currNum.value
                currNum.value=num
            }
            else if(minus==true){
                num=num-Number(currNum.value)
                prevNum.value=prevNum.value+"-"+currNum.value
                currNum.value=num
            }
            else if(times==true){
                num=num*Number(currNum.value)
                prevNum.value=prevNum.value+"*"+currNum.value
                currNum.value=num
            }
            else if(divide==true){
                num=num/Number(currNum.value)
                prevNum.value=prevNum.value+"/"+currNum.value
                currNum.value=num
            }
        }
    }

}


// number buttons
buttons[4].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-7"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+7

    }
})
buttons[5].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-8"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+8

    }
})
buttons[6].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-9"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+9

    }
})
buttons[8].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-4"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+4

    }
})
buttons[9].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-5"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+5

    }
})
buttons[10].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-6"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+6

    }
})
buttons[12].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-1"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+1

    }
})
buttons[13].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-2"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+2

    }
})
buttons[14].addEventListener("click",()=>{
    if(minusNum==true){
        currNum.value=currNum.value+"-3"
        minusNum=false
    }
    else{
        currNum.value=currNum.value+3

    }
})
buttons[16].addEventListener("click",()=>{
    currNum.value=currNum.value+0

})
buttons[17].addEventListener("click",()=>{
    currNum.value+="."
})



// format button
buttons[0].addEventListener("click",()=>{
    format();
})
// delete button
buttons[1].addEventListener("click",()=>{
    deletee();
})
// add button
buttons[15].addEventListener("click",()=>{
    add();
})
// equl button
buttons[18].addEventListener("click",()=>{
    equl();
})
// minus button
buttons[11].addEventListener("click",()=>{
    minuss();
})
// times button
buttons[7].addEventListener("click",()=>{
    timess();
})
// divide button
buttons[3].addEventListener("click",()=>{
    dividee();
})
// +/- button
buttons[2].addEventListener("click",()=>{
    currNum.value=0-currNum.value
})

// keyboard
window.addEventListener("keydown",e=>{

    if((e.which>=48) && (e.keyCode<=57)){
        currNum.value+=e.key
    }
    else if((e.key=='+')){
        add()
    }
    else if((e.key=="/")){
        dividee()
    }
    else if((e.key=="*")){
        timess();
    }
    else if((e.key=="-")){
        minuss();
    }
    else if((e.key=="Backspace")){
        deletee();
    }
    else if((e.key=='=')||(e.key=="Enter")){
        equl();
    }
    else if(e.key=='.'){
        currNum.value+="."
    }
    else if(e.key=='Escape'){
        format()
    }


})


// custom calc
let backgroundColor = document.getElementById("backgroundColor")
let bodyColor = document.getElementById("bodyColor")
let buttonColor = document.getElementById("buttonColor")
let fontColor = document.getElementById("fontColor")
let buttonRadius = document.getElementById("buttonRadius")
let darkMode = document.getElementById("darkMode")

let darkValue=false;

let background = document.querySelector("body")
let body =document.querySelector(".main")

backgroundColor.addEventListener("input",()=>{
    background.style.backgroundColor=`${backgroundColor.value}`
})
bodyColor.addEventListener("input",()=>{
    body.style.backgroundColor=`${bodyColor.value}`
})
buttonColor.addEventListener("input",()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor=`${buttonColor.value}`
    })
})
fontColor.addEventListener("input",()=>{
    buttons.forEach(button=>{
        button.style.color=`${fontColor.value}`
    })
    let buttonsI=document.querySelectorAll("button i")
    buttonsI.forEach(buttonI=>{
        buttonI.style.color=`${fontColor.value}`
    })
    currNum.style.color=`${fontColor.value}`
    prevNum.style.color=`${fontColor.value}`
})
buttonRadius.addEventListener("input",()=>{
    buttons.forEach(button=>{
        button.style.borderRadius=`${buttonRadius.value}%`
    })
    buttons[16].style.borderRadius=`${buttonRadius.value}px`
    buttons[19].style.borderRadius=`${buttonRadius.value}px`
})
darkMode.addEventListener("input",()=>{
    if(darkValue==false){
        console.log("on")
        darkValue=true
        document.documentElement.style.setProperty('--first-color','#424242')
        document.documentElement.style.setProperty('--second-color','#F6F6F6')

    }
    else{
        console.log("off")   
        darkValue=false
        document.documentElement.style.setProperty('--first-color','#F6F6F6')
        document.documentElement.style.setProperty('--second-color','#424242')
    }
})




