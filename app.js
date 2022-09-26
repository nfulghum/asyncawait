// Part 1
// 1-1

let favNum = 23;

async function favNumFact(num) {
    let url = 'http://numbersapi.com';
    let favPromise = axios.get(`${url}/${num}?json`)

    let fav = await favPromise;

    console.log(fav);
}



// // 1-2
// let favNums = [23, 92, 30];

// axios.get(`${url}/${favNums}`)
//     .then(res => {
//         console.log("First fact")
//         console.log(res.data)
//         return axios.get(res.data.text)
//     })
//     .then(res => {
//         console.log("Second fact")
//         console.log(res.data)
//         return axios.get(res.data.text)
//     })
//     .then(res => {
//         console.log("Third fact")
//         console.log(res.data)
//     })
//     .catch(err => console.log("rejected", err))

// // 1-3

// let numFacts = [];

// axios.get(`${url}/${favNum}`)
//     .then(res => {
//         console.log("First fact")
//         console.log(res.data)
//         numFacts.push(res.data)
//         return res.data.text
//     })
// axios.get(`${url}/${favNum}`)
//     .then(res => {
//         console.log("Second fact")
//         console.log(res.data)
//         numFacts.push(res.data)
//     })
// axios.get(`${url}/${favNum}`)
//     .then(res => {
//         console.log("Third fact")
//         console.log(res.data)
//         numFacts.push(res.data)
//     })
// axios.get(`${url}/${favNum}`)
//     .then(res => {
//         console.log("Fourth fact")
//         console.log(res.data)
//         numFacts.push(res.data)
//         numFacts.forEach(fact => {
//             $("body").append(`<p>${fact}</p>`);
//         });

//     })
//     .catch(err => console.log("rejected", err))


// ************************************************
// ************************************************
// ************************************************
// ************************************************
// Part 2
// 2-1
// url = 'https://deckofcardsapi.com/api/deck'
// axios.get(`${url}/new/draw/`)
//     .then(res => {
//         console.log("First draw")
//         let suit = res.data.cards[0].suit
//         let value = res.data.cards[0].value
//         console.log(`${value} of ${suit}`)
//         return res.data
//     })

// 2-2

// $(function () {
//     let baseURL = 'https://deckofcardsapi.com/api/deck';

//     // 1.
//     $.getJSON(`${baseURL}/new/draw/`).then(data => {
//         let { suit, value } = data.cards[0];
//         console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//     });

//     // 2.
//     let firstCard = null;
//     $.getJSON(`${baseURL}/new/draw/`)
//         .then(data => {
//             firstCard = data.cards[0];
//             let deckId = data.deck_id;
//             return $.getJSON(`${baseURL}/${deckId}/draw/`);
//         })
//         .then(data => {
//             let secondCard = data.cards[0];
//             [firstCard, secondCard].forEach(function (card) {
//                 console.log(
//                     `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
//                 );
//             });
//         });

//     // 3.
//     let deckId = null;
//     let $btn = $('button');
//     let $cardArea = $('#card-area');

//     $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
//         deckId = data.deck_id;
//         $btn.show();
//     });

//     $btn.on('click', function () {
//         $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
//             let cardSrc = data.cards[0].image;
//             let angle = Math.random() * 90 - 45;
//             let randomX = Math.random() * 40 - 20;
//             let randomY = Math.random() * 40 - 20;
//             $cardArea.append(
//                 $('<img>', {
//                     src: cardSrc,
//                     css: {
//                         transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//                     }
//                 })
//             );
//             if (data.remaining === 0) $btn.remove();
//         });
//     });
// });