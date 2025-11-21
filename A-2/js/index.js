document.addEventListener("DOMContentLoaded",()=>{

    //팝업 기능

    let btnPopup = document.querySelector("#btn-popup")
    let modal = document.querySelector(".modal")
    let popup = document.querySelector(".popup")
    let btnClose = document.querySelector(".btn-close")

    //팝업 열기
    btnPopup.addEventListener("click",()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })

    //팝업 닫기
    btnClose.addEventListener("click",()=>{
        modal.classList.remove("on")
        popup.classList.remove("on")
    })


    //무한슬라이드 외우기
    let count = 0
    let train = document.querySelector(".train")

    setInterval(()=>{
        count++
        train.style.transition = `all 0.7s ease 0s`
        train.style.transform = `translateX(${-25*count}%)`

        if(count==3){
            setTimeout(()=>{
                count=0
                train.style.transition = `none`
                train.style.transform = `translateX(${-25*count}%)`
            },800)
        }
    },3000)

})