document.addEventListener("DOMContentLoaded",()=>{

    //무한 슬라이드
    let count = 0
    let train = document.querySelector(".train")

    setInterval(()=>{
        count++
        train.style.transition = `all 0.7s ease 0s`
        train.style.transform = `translateX(${-25*count}%)`

        if (count==3){

            setTimeout(()=>{
                count = 0
                train.style.transition = `none`
                train.style.transform = `translateX(${-25*count}%)`
            },800)
        }
    },3000)


    //탭메뉴
    let tabs = document.querySelectorAll(".tabs a")
    let tabDesc = document.querySelectorAll(".tab-desc>ul")

    tabs.forEach((tab,idx)=>{
        tab.addEventListener("click",()=>{
            //tab 활성화 기능
            tabs.forEach(tab=>{tab.classList.remove("on")})
            tab.classList.add("on")
            tabDesc.forEach(desc=>{desc.classList.remove("on")})
            tabDesc[idx].classList.add("on")
        })
    })

    //팝업기능
    let no1 = document.querySelector("#no1")
    let btnClose = document.querySelector("#btn-close-popup")
    let popup = document.querySelector(".popup")

    no1.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

})