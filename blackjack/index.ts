
const suits: string[] = ["Spades", "Hearts", "Diamonds", "Clubs"]
const values: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const card: [suit, value] = 
// const player;
// const dealer;

const deckOfCards = (suits: string[], values: string[]) => {
    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            let card: [string, string] = [suit, value]
            deck.push(card)
        }
       
    }
}

deckOfCards(suits, values)