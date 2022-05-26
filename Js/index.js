let changemode = document.getElementById("changemode")
let changecolor = document.getElementById("changecolor")
let headerBg = document.getElementById("headerBg")
let titleBg = document.getElementById("titleBg")
let titleColor = document.getElementById("titleColor")
let sectionBg = document.getElementById("sectionBg")
let hiddenul = document.getElementById("hiddenul")
let header=document.querySelector("header")
let img=document.querySelectorAll("img")

changemode.addEventListener("click",eo=>{

    document.getElementById("body").classList.toggle("dark")
})

changecolor.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = 'block';
});
changecolor.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = 'none';
});

headerBg.addEventListener("click",(eo) => {
let random=Math.random()*255;
header.style.backgroundColor=`rgb(${random}, 23, 22)`
})
titleBg.addEventListener("click",(eo)=>{
    let random=Math.random()*217;
    document.getElementById("header_title").style.backgroundColor=`hsl(${random},70%,60%)`
})
titleColor.addEventListener("click",(eo)=>{
    let random=Math.random()*217;
 document.querySelectorAll(".title").forEach(item=>{
     let random=Math.floor(Math.random()*255)
     item.style.color=`rgb(${random},230,${random})`
 })

})
let i=0;
sectionBg.addEventListener("click",(eo)=>{
    let sectionColors=["green","purple","orange",'red','black']
  
    document.querySelectorAll("section").forEach(item=>{
        
        item.style.backgroundColor=`${sectionColors[i]}`
    })
    i++;
    if(i>sectionColors.length-1){
        i=0;
    }
})
img.forEach(item=>{
    addEventListener("mousemove",eo=>{
        if (eo.target==item){
            item.classList.add("rounded")
        }
    })
})
img.forEach(item=>{
    addEventListener("mouseout",eo=>{
        if (eo.target==item){
            item.classList.toggle("rounded")
        }
    })
})