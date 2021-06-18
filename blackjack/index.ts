
let suits: string[] = ["Spades", "Hearts", "Diamonds", "Clubs"]
let values: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// const player;
// const dealer;

function deckOfCards(suits: string[], values: string[]) {
    let cards: {}[] = []
    for (let suit of suits) {
        for (let value of values) {
            let card: {} = { suit, value }
            cards.push(card)
        }
    }
    return cards;
}


let cards = deckOfCards(suits, values);


function getRandCard(cards) {
    let randCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(randCard)
}


getRandCard(cards)

export {}