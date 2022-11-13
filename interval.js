//set interval


// var a=0
// setInterval(anim,1000)

// function anim(){
//     a=a+10
//     var target=  document.getElementById("test")
//     target.style.marginLeft=a+"px"
//     // console.log(a)
// }



//clear interval

// var a=0
// var id=setInterval(anim,500)

// function anim(){
//     a=a+10
//     if(a==300){
//         clearInterval(id)
//     }else{
//         var target=  document.getElementById("test")
//     target.style.marginLeft=a+"px"
//     // console.log(a)
//     }
    
// }


//set timeout


var id=setTimeout(anim,3000)

function anim(){
    var target=document.getElementById("test")
    target.style.width="500px"
}

function stop(){
   clearTimeout(id)
}