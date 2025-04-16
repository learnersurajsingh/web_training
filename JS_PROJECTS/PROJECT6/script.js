const random = ()=>{
    const hex = '0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalID
document.querySelector('#start').addEventListener('click',()=>{
    if(intervalID!=null){
        clearInterval(intervalID)
    }
    intervalID = setInterval(()=>{
        document.body.style.backgroundColor=random()
    },1000)
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intervalID)
})