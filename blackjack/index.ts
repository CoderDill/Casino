
const suits: string[] = ["Spades", "Hearts", "Diamonds", "Clubs"]
const values: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
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



deckOfCards(suits, values);

// const getRandCard = (cards) => {
//     console.log(cards)
// }

// getRandCard()
