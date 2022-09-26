// Part 1
// 1-1

// let favNum = 23;

// async function favNumFact(num) {
//     let url = 'http://numbersapi.com';
//     let favPromise = axios.get(`${url}/${num}?json`)

//     let fav = await favPromise;

//     console.log(fav);
// }

// // 1-2

// async function favNumsFact() {
//     let baseURL = 'http://numbersapi.com';
//     let favNums = [23, 92, 30];
//     let data = await axios.get(`${baseURL}/${favNums}?json`);
//     console.log(data);
// }

// // // 1-3

// let numFacts = [];
// let favNum = 23;
// let baseURL = "http://numbersapi.com"
// async function fourFacts() {
//     let facts = await Promise.all(Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNum}?json`)))
//     facts.forEach(data => {
//         $('body').append(`${data.text}</p>`);
//     });
// }

// fourFacts()


// ************************************************
// ************************************************
// ************************************************
// ************************************************
// Part 2
// 2-1
// baseURL = 'https://deckofcardsapi.com/api/deck'
// axios.get(`${baseURL}/new/draw/`)
//     .then(res => {
//         let suit = res.data.cards[0].suit
//         let value = res.data.cards[0].value
//         console.log(`${value} of ${suit}`)
//         return res.data
//     })



$(function () {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // 1.
    async function part1() {
        let data = await $.getJSON(`${baseURL}/new/draw/`);
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }

    // 2.
    async function part2() {
        let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
        let deckId = firstCardData.deck_id;
        let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
        [firstCardData, secondCardData].forEach(card => {
            let { suit, value } = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    }

    // 3.
    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        $btn.show().on('click', async function () {
            let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
            let cardSrc = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: cardSrc,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (cardData.remaining === 0) $btn.remove();
        });
    }
    setup();
});