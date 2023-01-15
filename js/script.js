
let doc = document
let imgFon = doc.querySelector('.img')
let form = doc.forms.forma
let radio = form.elements.checket
let chek = doc.querySelectorAll(".chek")
for (let item of radio) {
    item.onclick = () => {
        for (let i of chek) {
            i.classList.remove('aktiv')
            i.classList.remove('chekColor')
            console.log(i);
        }
        let rad1 = radio[0].checked
        let rad2 = radio[1].checked
        let rad3 = radio[2].checked
        console.log(rad1);
        if (rad1 == true) {
            chek[0].classList.add('chekColor')
            imgFon.style.opacity = 0
            imgFon.style.transition = '1s'

            let time = setInterval(() => {
                imgFon.style.opacity = 1
                imgFon.src = 'img/image 10.png'

            }, 1000)
            setTimeout(() => {
                clearInterval(time)
            }, 1300)

            console.log('rad1');
        } else if (rad2 == true) {
            chek[1].classList.add('chekColor')

            imgFon.style.opacity = 0
            imgFon.style.transition = '1s'

            console.log('rad2');
            let time = setInterval(() => {
                imgFon.style.opacity = 1
                imgFon.src = 'img/image 8.png'

            }, 1000)
            setTimeout(() => {
                clearInterval(time)
            }, 1300)
        } else {
            chek[2].classList.add('chekColor')

            imgFon.style.opacity = 0
            imgFon.style.transition = '1s'

            console.log('rad3');
            let time = setInterval(() => {
                imgFon.style.opacity = 1
                imgFon.src = 'img/image 9.png'

            }, 1000)
            setTimeout(() => {
                clearInterval(time)
            }, 1300)
        }
    }
}
