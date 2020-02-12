'use strict';


// *********************************************************Model

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [{ id: 1, url: 'img/meme-imgs-square/1.jpg', keywords: ['happy'] },
{ id: 2, url: 'img/meme-imgs-square/2.jpg', keywords: ['zoz'] }];
var gMeme = {
    selectedImgId: 1, selectedLineIdx: 0,
    lines: [{ txt: 'I never eat Falafel', size: 20, align: 'left', color: 'red' },
    { txt: `I'm afraid of NACHS`, size: 20, align: 'left', color: 'red' }]

}

var gSelLineIdx = gMeme.selectedLineIdx;
var gLines;
//gMeme['lines'][0].txt

// **********************************************************functions

function setMeme(id) {
    gMeme.selectedImgId = id;
    gMeme.lines = [{ txt: '', size: 20, align: 'left', color: 'red' },
    { txt: ``, size: 20, align: 'left', color: 'red' }]


}


function getSizeLineLength() {
    return gMeme['lines'].length;
}

function getTxtLines() {
    var gLinesObj = gMeme['lines'];
    gLines = gLinesObj.map(function (gLineObj) {
        return gLineObj.txt;
    })
    return gLines;
}


function addLine(txtLine) {
    gLines.push(txtLine)
}

function getYCoord(lineIdx) {
    // var numOfLines = getSizeLineLength();
    // let yUnit = gCanvasHeight/(numOfLines+1);

    var yCoor;
    switch (lineIdx) {
        case 1:
            yCoor = 112.5;
            break;
        case 2:
            yCoor = 307.5;
            break;
    }
    return yCoor
}



function addBook(bookObj) {
    var newBook = _createBook(bookObj)
    newBook.price = bookObj.price
    gBooks.push(newBook)

}

