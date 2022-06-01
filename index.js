let answer  = window.prompt('Do you head left, or right?')
let firstAnswer  = window.prompt('Do you head left, or right?')
// console.log(firstAnswer)
// let firstAnswer  = window.prompt('Do you head left, or right?')

if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path? Type "follow" or "path". To start over type "back"`)

} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny past of treasure. Another path would 
lead you away from the dragon all together. Which do you take? Type "past" or "away". To start over type "back" `)
}
function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path? Type 'follow' or 'path' or 'back'`)
    if(secondAnswer === 'back'){
        start()
    } else if (secondAnswer==='follow'){
        follow()
    } else if (secondAnswer==='path'){
        path()
    }
}
function path(){
    let pathAnswer = window.prompt(`You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take? Type 'ladder' or 'staircase' or "back"`)
    if(pathAnswer === 'ladder'){
        ladder()
    } else if (pathAnswer===staircase){
        staircase()
    } else if (pathAnswer===back){
        start()
    }
}
function ladder(){
    let ladderAnswer = window.alert(`After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.`)
}
function staircase(){
    let staircaseAnswer = window.prompt(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
}
function follow(){
    let followAnswer = window.prompt(`You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Type "stay" or "alert" or "back"`)
    if(followAnswer==='stay'){
        stay()
    } else if (followAnswer==='alert'){
        alert()
    } else if (followAnswer==='back'){
        start()
    }
}
function stay(){
    window.alert('You live happily amongst the cats for the rest of your days.')
}
function alert(){
    window.alert ('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
}
function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon all together. Which do you take? Type 'past', 'away' or 'back'`)
    if(secondAnswer === 'back'){
        start()
    } else if(secondAnswer ===past){
        past()
    } else if (secondAnswer===away){
        away()
    }
}

start(firstAnswer)

function past(){
    let thirdAnswer = window.prompt ('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run. Type "stay","run" or "back')
    if(thirdanswer=== 'back'){
        start()
    } else if (thirdAnswer === 'stay'){
        stay()
    } else if (thirdAnswer==='run'){
        run()
    }
}
function stay() {
    let stayAnswer = window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
}
function run(){
    let runAnswer = window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
}
function away(){
    let awayAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? Type "draw", "pick" or "back"`)
    if (awayAnswer==='back'){
        start()
    } else if (awayAnswer==='pick'){
        pick()
    } else if (awayAnswer==='draw'){
        draw()
    }
}
function pick(){
    let pickAnswer = window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
}
function draw(){
    let drawAnswer = window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.`)
}