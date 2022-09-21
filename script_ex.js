//document 개체를 대상으로 이벤트 리스너를 추가합니다.
//이벤트 종류는 "DOMcontentLoaded"입니다.
//document.addEventListener("DOMContentLoaded",
    //이벤트 핸들러입니다.
    //HTML 코드가 로딩된 다음 비동기적으로 수행할 작업들입니다.
    //function(e) {
        //input 태그를 찾아 button변수에 저장합니다.
        //let button = document.querySelector("input")
        //button 변수에 이벤트 리스너를 추가합니다.
        //이벤트 종류는 "input"입니다.
        // button.addEventListener("input", 
           // function(e) {
                //콘솔에 입력창의 값을 출력합니다.
                //console.log(e.target.value)
            //}
        //)
    //}
//)

//<p>태그에서 인라인 이벤트 모델로 호출할 함수를 정의합니다. 
//함수의 이름은 hi입니다.
//function hi() {
    //alert를 띄워 "hi"라는 글자를 출력합니다.
    //alert("hi")
//}
//document.addEventListener("DOMContentLoaded",
//    function(e) {
       // document.addEventListener("keydown",
           // function(e){
                //console.log(e.key)
                //if(e.key==="q"){
                    //alert("this is Q!")
                //}
            //}
        //)

        //let keydown = document.querySelector("#keydown")
        //keydown.addEventListener("keydown", 
            //function(e) {
                //console.log(e.target.value)
            //}
        //)
        // let change = document.querySelector("#change")
        // change.addEventListener("change", 
        //     function(e) {
        //         console.log(e.target.value)
        //     }
        // )
        // let input = document.querySelector("#input")
        // input.addEventListener("input", 
        //     function(e) {
        //         console.log(e.target.value)
        //     }
        // )
//    }
//)

function red(e) {
    e.target.style.backgroundColor="red"
}
function blue(e){
    e.target.style.backgroundColor="blue"
}

// document.addEventListener("DOMContentLoaded",
//    function(e) {
//         let input = document.querySelector("input")
//         input.addEventListener("click",
//             function(e){
//                 console.log(e.target.getAttribute("type"))
//             }
//         )
//     }
// )

// document.addEventListener("DOMContentLoaded",
//    function(e) {
//         let input = document.querySelector("input")
//         input.addEventListener("click",
//             function(e){
//                 console.log(e.target.setAttribute("type", "text"))
//             }
//         )
//     }
// )

// document.addEventListener("DOMContentLoaded",
//    function(e) {
//         let input = document.querySelector("input")
//         input.addEventListener("click",
//             function(e){
//                 if(e.target.getAttribute("type")==="button"){
//                     e.target.setAttribute("type", "text")
//                 }
//             }
//         )
//         input.addEventListener("change",
//             function(e){
//                 e.target.setAttribute("type", "button")
//             }
//         )
//     }
// )

document.addEventListener("DOMContentLoaded",
    function(e){
        let button = document.querySelector("input")

        let img = document.querySelector("img")
        let img1 = "image/hl 1.jpg"
        let img2 = "image/hl 2.jpg"
        let img3 = "image/profile.jpg"

        button.addEventListener("click",
            function(e){
                let src = img.getAttribute("src")
                if (src === img1){
                    img.setAttribute("src", img2)
                } else if (src === img2){
                    img.setAttribute("src", img3)
                } else{
                    img.setAttribute("src", img1)
                }
            }
        )
    }
)

