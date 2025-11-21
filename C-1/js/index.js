document.addEventListener("DOMContentLoaded",()=>{

    //fade-in-out slider
    let count = 0
    const slides = document.querySelectorAll(".train>li")

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(li=>{li.classList.remove("on")})
        slides[count].classList.add("on")
    },3000)

    //tab menu

    const tabs = document.querySelectorAll(".tabs a")
    const tabDescs = document.querySelectorAll(".tab-desc ul")

    tabs.forEach((tab,idx)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach(a=>{a.classList.remove("on")})
            tab.classList.add("on")
            tabDescs.forEach(ul=>{ul.classList.remove("on")})
            tabDescs[idx].classList.add("on")

        })
    })

    //popup

    const popup = document.querySelector(".popup")
    const btnClosed = document.querySelector(".btn-closed")
    const btnPopup = document.querySelector(".btn-popup")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })

    btnClosed.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

})