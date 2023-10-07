let btns = document.querySelectorAll(".buttons button");
let images = document.querySelectorAll(".images img");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", filterImg)
}

function setActiveBtn(e) {
    btns.forEach(btn => {
        btn.classList.remove("btn-clicked");
    });
    e.target.classList.add("btn-clicked");

}

function filterImg(e) {
    setActiveBtn(e);

    images.forEach(img => {
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");

        let imgType = parseInt(img.dataset.img);
        let btnType = parseInt(e.target.dataset.btn);

        if (btnType !== 0 && imgType !== btnType) {
            img.classList.remove("img-expand");
            img.classList.add("img-shrink");
        }
    });
}


btns[0].addEventListener('click', (e) => {
    setActiveBtn(e)

    images.forEach(img => {
        img.classList.remove("img-shrink")
        img.classList.add("img-expand")
    })
})

btns[0].click()




let button = document.querySelector("#button")

button.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})




const image = document.querySelectorAll('.image_div img');
const listImages = document.querySelector(".list_images")
const imageDivs = document.querySelectorAll('.image_div');
const plus = document.querySelectorAll('.image_div .bi-plus');
const list = document.querySelector(".list");

plus.forEach((plusButton, index) => {
    plusButton.addEventListener('click', (event) => {
        const image = imageDivs[index].querySelector('img');
        const overlayImage = document.createElement('img');
        overlayImage.src = image.src;
        overlayImage.alt = image.alt;
        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay');
        overlayDiv.appendChild(overlayImage);
        list.appendChild(overlayDiv);
    });
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('overlay')) {
        event.target.remove();
    }
});

let biList = document.querySelector(".bi-list");
let navbar = document.querySelector(".navbar");

biList.addEventListener("click", (e) => {
    navbar.classList.toggle("showHide");
});