var arr = new Array()
var arr1 = new Array()
var arr2 = new Array()
var arr3 = new Array()
var arr4 = new Array()
let x = ["aa", "ab", "ac", "ad"];
function sortDESC(array) {
    var cardValues = new Map([
        ["TWO", 2],
        ["THREE", 3],
        ["FOUR", 4],
        ["FIVE", 5],
        ["SIX", 6],
        ["SEVEN", 7],
        ["EIGHT", 8],
        ["NINE", 9],
        ["TEN", 10],
        ["JACK", 11],
        ["QUEEN", 12],
        ["KING", 13],
        ["ACE", 14]
    ]);
    var sortedCards = array
        .map((array) => [array, cardValues.get(array)])
        .sort((a, b) => b[1] - a[1])
        .map((array) => array[0]);
    return sortedCards;
}
function sortAES(array) {
    var cardValues = new Map([
        ["TWO", 2],
        ["THREE", 3],
        ["FOUR", 4],
        ["FIVE", 5],
        ["SIX", 6],
        ["SEVEN", 7],
        ["EIGHT", 8],
        ["NINE", 9],
        ["TEN", 10],
        ["JACK", 11],
        ["QUEEN", 12],
        ["KING", 13],
        ["ACE", 14]
    ]);
    var sortedCards = array
        .map((array) => [array, cardValues.get(array)])
        .sort((a, b) => a[1] - b[1])
        .map((array) => array[0]);
    return sortedCards;
}
const getCardDetails = (url) => {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                resolve(request.response);
                var result = JSON.parse(this.responseText);
                arr = result.PackOfCards
                console.log(arr);
            } else {
                reject(this.status);
            }
        };
        request.open('GET', url, true);
        request.send();

    });
}
async function Seperate() {
    let data = await getCardDetails("../pack-of-cards.json");

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].SUIT == "HEART")
            arr1.push(arr[i].RANK);

        if (arr[i].SUIT == "CLUB")
            arr2.push(arr[i].RANK);

        if (arr[i].SUIT == "DIAMOND")
            arr3.push(arr[i].RANK);

        if (arr[i].SUIT == "SPADE")
            arr4.push(arr[i].RANK);
    }
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
}
async function Sortcards1(t) {
    let data = await getCardDetails("../pack-of-cards.json");
    if (t == 'H') {
        var sortedCards1 = sortDESC(arr1);
        arr1 = sortedCards1;
    }
    if (t == 'C') {
        var sortedCards1 = sortDESC(arr4);
        arr4 = sortedCards1;
    }
    if (t == 'D') {
        var sortedCards1 = sortDESC(arr2);
        arr2 = sortedCards1;
    }
    if (t == 'S') {
        var sortedCards1 = sortDESC(arr3);
        arr3 = sortedCards1;
    }


    ShowImages();
}
async function Sortcards2(t) {
    let data = await getCardDetails("../pack-of-cards.json");
    if (t == 'H') {
        var sortedCards2 = sortAES(arr1);
        arr1 = sortedCards2;
    }
    if (t == 'C') {
        var sortedCards2 = sortAES(arr4);
        arr4 = sortedCards2;
    }
    if (t == 'D') {
        var sortedCards2 = sortAES(arr2);
        arr2 = sortedCards2;
    }
    if (t == 'S') {
        var sortedCards2 = sortAES(arr3);
        arr3 = sortedCards2;
    }

    ShowImages();

}

async function Shufflepack() {
    let data = await getCardDetails("../pack-of-cards.json");


    let arrayOfArrays = x;
    for (let i = arrayOfArrays.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayOfArrays[i], arrayOfArrays[j]] = [arrayOfArrays[j], arrayOfArrays[i]];
    }
    x = arrayOfArrays;
    ShowImages();
}
async function ShowImages() {
    let data = await getCardDetails("../pack-of-cards.json");

    for (let j = 0; j < 4; j++) {
        if (j == 0) {
            let l = document.getElementById(`${x[j]}`);
            let s = ``;
            s += `<div class="f"><img class="ff" src="img/HEART.png"></div>`;
            s += `<div class="cl"><button button id="button" onclick="Sortcards1('H')"><img class="bi" src="img/1.png"></button>
    <button button id="button" onclick="Sortcards2('H')"><img class="bi" src="img/2.png" ></button></div>`
            for (let i = 0; i < arr1.length; i++) {
                s += `<div class="grid-item1">
    <img src="img/HEART${arr1[i]}.png">
    </div>`
            }
            l.innerHTML = s;
        }
        else if (j == 1) {
            let l = document.getElementById(`${x[j]}`);
            let ss = ``;
            ss += `<div class="f"><img class="ff" src="img/CLUB.png"></div>`;
            ss += `<div class="cl"><button button id="button" onclick="Sortcards1('C')"><img class="bi" src="img/1.png"></button>
    <button button id="button" onclick="Sortcards2('C')"><img class="bi" src="img/2.png" ></button></div>`
            for (let i = 0; i < arr4.length; i++) {
                ss += `<div class="grid-item1">
    <img src="img/CLUB${arr4[i]}.png">
    </div>`
            }
            l.innerHTML = ss;
        }
        else if (j == 2) {
            let l = document.getElementById(`${x[j]}`);
            let s1 = ``;
            s1 += `<div class="f"><img class="ff" src="img/DIAMOND.png"></div>`;
            s1 += `<div class="cl"><button id="button" onclick="Sortcards1('D')"><img class="bi" src="img/1.png"></button>
    <button id="button" onclick="Sortcards2('D')"><img class="bi" src="img/2.png" ></button></div>`
            for (let i = 0; i < arr2.length; i++) {
                s1 += `<div class="grid-item1">
    <img src="img/DIAMOND${arr2[i]}.png">
    </div>`
            }
            l.innerHTML = s1;
        }
        else {
            let l = document.getElementById(`${x[j]}`);
            let s2 = ``;
            s2 += `<div class="f"><img class="ff" src="img/SPADE.png"></div>`;
            s2 += `<div class="cl"><button id="button" onclick="Sortcards1('S')"><img class="bi" src="img/1.png"></button>
    <button id="button" onclick="Sortcards2('S')"><img class="bi" src="img/2.png" ></button></div>`
            for (let i = 0; i < arr3.length; i++) {
                s2 += `<div class="grid-item1">
    <img src="img/SPADE${arr3[i]}.png">
    </div>`
            }
            l.innerHTML = s2;
        }
    }
}
Seperate();
ShowImages();











