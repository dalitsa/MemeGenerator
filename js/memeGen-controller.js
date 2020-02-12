'use strict';

// ************************************************const/globals
var gCanvas;
var gCtx;
var gCanvasHeight = 500;
var gCanvasWidth = 500;

// ************************************************functions

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.dir(gCtx);
    getTxtLines();
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
     //clear text input
     var inputText = document.querySelector('.line1').value='';
}
function clearLine(lineIdx) {
    let yCoor;
    (lineIdx===1)? yCoor=0 : yCoor=225;
    gCtx.clearRect(0, yCoor, gCanvas.width, (gCanvas.height/2))
}


function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function getMeme(id) {
    drawImg3(id)
    setMeme(id)
    console.dir(gMeme)
}


// PART 10
// resizeCanvas()

// PART 11
//  window.addEventListener('resize', function(){
//     gCanvas.width = window.innerWidth
//     gCanvas.height = window.innerHeight
// })

function drawText(lineIdx) {
    clearLine(lineIdx)
    // firstAction(lineIdx);
    let text = document.querySelector(`.line${lineIdx}`).value;
    gMeme['lines'][lineIdx-1]['txt']=text;
    drawTxtLine(lineIdx);

    // gCtx.lineWidth = '2'
    // gCtx.strokeStyle = 'black'
    // gCtx.fillStyle = 'white'
    // gCtx.font = '40px IMPACT'
    // gCtx.textAlign = 'center'
    // // addLine(text);
    // var yCoor = getYCoord(lineIdx);
    // var xCoor = gCanvasWidth / 2;
    // gCtx.fillText(text, xCoor, yCoor)
    // gCtx.strokeText(text, xCoor, yCoor)
    

}
function drawTxtLine(lineIdx) {
    let text = gMeme['lines'][lineIdx-1]['txt'];
    gCtx.lineWidth = '2'
    gCtx.strokeStyle = getStorkeColor();
    gCtx.fillStyle = getFillColor();
    // gCtx.font = `${size}px IMPACT`
    gCtx.font = `40px IMPACT`
    gCtx.textAlign = 'center'
    var yCoor = getYCoord(lineIdx);
    var xCoor = gCanvasWidth / 2;
    gCtx.fillText(text, xCoor, yCoor)
    gCtx.strokeText(text, xCoor, yCoor)
}



function getStorkeColor(ev) {
    console.dir(ev)
    return document.querySelector(`.strokeColor`).value;

}

function getFillColor(ev) {
    console.dir(ev);
    return document.querySelector(`.fillColor`).value;
  
}

// function firstAction(lineIdx) {
//     if(lineIdx===1){
//         clearCanvas();
//         return;
//     }

//     if(lineIdx===2){
//         var text = document.querySelector(`.line${(1)}`);
//         anotherLine(lineInput, lineIdx)

//     }
//     var lineInputs=new.array(lineIdx-1);
//     for(vari=0;i<lineInputs.lenth;i++){
//         linesInputs[i] = document.querySelectorAll(`.line${(i+1)}`);
//         console.log(lineInputs[i]);
//     }
//     linesInputs = document.querySelectorAll(`.line`);
//     console.log(linesInputs);
//     for (var i = 0; i < linesInputs.length; i++) {
//         console.log('hi');
//     }
//     linesInputs.item(lineIdx) = '';
//     // nodeList.item(index) 

//     linesInputs.forEach(function (lineInput) {
//         if (lineInput) {
//             anotherLine(lineInput, lineIdx);
//             console.dir(gMeme);
//         }

//     })

// }

function aotherLine(lineInput, lineIdx) {
    gMeme['lines'][lineIdx].txt = lineInput;

}

function getEditorSetting() {
    var linesList = getTxtLines();

}

function drawImg() {
    var elImg = document.querySelector('img')
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function drawImg3(id) {
    var img = new Image()
    img.src = `./img/meme-imgs-square/${id}.jpg`;
    console.dir(img)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawImg2() {
    var img = new Image()
    img.src = './img/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}





// function copy{
//     var addedBook = { name: bName.value, price: bPrice.value }
//     addBook(addedBook);
//     renderBooks()
// }


