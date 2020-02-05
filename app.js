const pics =[
    'pics/kitty_door.jpg',
    'pics/kitty_bed.jpg',
    'pics/kitty_laptop.jpg',
    'pics/kitty_sink.jpg',
    'pics/kitty_wall.jpg',
    'pics/kitty_basket.jpg',
]

const button = document.querySelector('button')
const img = document.querySelector('img')

let index = 0
button.addEventListener('click', function(){
index += 1
if (index === pics.length){
index = 0
}

img.src = pics[index]

})