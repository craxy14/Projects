const previous = document.getElementById("previous");
const nextbutt = document.getElementById("next");
const photo = document.getElementById("photo");

const randImg  =  ["1.jpg","2.jpg","3.jpg"];

function show(index) {
    if (index < 0) {
        currentIndex = randImg.length - 1
    } else if (index >= randImg.length) {
        currentIndex = 0
    } else {
        currentIndex = index
    }
    photo.src = randImg[currentIndex]
}

currentIndex = 0
previous.addEventListener("click" , () => {
    currentIndex --
    show(currentIndex)
})

nextbutt.addEventListener("click",() =>{
    currentIndex ++
    show(currentIndex)

})