const prompt = require('prompt-sync')();
const suits: string[] = ["Spades", "Hearts", "Diamonds", "Clubs"]
const values: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let player: {}[] = [];
let dealer: {}[] = [];


function deckOfCards(suits: string[], values: string[]) {
    let cards: {}[] = []
    for (let suit of suits) {
        for (let value of values) {
            let card: {} = { suit, value }
            cards.push(card)
        }
    }
    getRandCard(cards)
    return cards;
}

let cards = deckOfCards(suits, values);

function getRandCard(cards) {
    let randCard = cards[Math.floor(Math.random() * cards.length)];
    return randCard
}

function givePlayerCards() {
    for (let i = 0; i <= 1; i++) {
        player.push(getRandCard(cards));
    }
    console.log(`Players Hand: [${player[0]["value"]} of ${player[0]["suit"]}][${player[1]["value"]} of ${player[1]["suit"]}]`)
}

function giveDealerCards() {
    for (let i = 0; i <= 1; i++) {
        dealer.push(getRandCard(cards));
    }
    console.log(`Dealers Hand: [${dealer[0]["value"]} of ${dealer[0]["suit"]}][HIDDEN CARD]`)
}

function hit() {
   return getRandCard(cards)
}
let playersHand = givePlayerCards()
let dealersHand = giveDealerCards()

let playerDecision = prompt('Hit, Double or Stay');

if (playerDecision === 'Hit' || 'Double') {
    let hitCard = hit();
    player.push(hitCard)
    console.log(`Players Hand: [${player[0]["value"]} of ${player[0]["suit"]}][${player[1]["value"]} of ${player[1]["suit"]}][${player[2]["value"]} of ${player[2]["suit"]}]`);
    
    let playerDecision2 = prompt('Hit, Stay or Bust');
    if (playerDecision2 === "Bust") {
        console.log("Too Many, you lose. Ctrl C to restart.")
    }
    if (playerDecision2 === 'Hit') {
        let hitCard = hit();
        player.push(hitCard)
        console.log(`Players Hand: [${player[0]["value"]} of ${player[0]["suit"]}][${player[1]["value"]} of ${player[1]["suit"]}][${player[2]["value"]} of ${player[2]["suit"]}][${player[3]["value"]} of ${player[3]["suit"]}]`)
        let playerDecision3 = prompt('Stay or Bust');
        if (playerDecision3 === "Bust") {
        console.log("Too Many, you lose. Ctrl C to restart.")
        }
    }  
} 


console.log(`Dealers Hand: [${dealer[0]["value"]} of ${dealer[0]["suit"]}][${dealer[1]["value"]} of ${dealer[1]["suit"]}]`)
let dealerDecision = prompt('CPU - Hit or Stay')

const dealerDecisionfunc = (dealer) => {
    for (let i = 0; i <= dealer.length; i++) {
        let card1 = dealer[i]
        console.log(card1)
    }
}
dealerDecisionfunc(dealer)
    
if (dealerDecision === 'Hit') {
    let hitCard = hit();
    dealer.push(hitCard)
    console.log(`Dealers Hand: [${dealer[0]["value"]} of ${dealer[0]["suit"]}][${dealer[1]["value"]} of ${dealer[1]["suit"]}][${dealer[2]["value"]} of ${dealer[2]["suit"]}]`)
    let dealerDecision2 = prompt('Hit, Stay or Bust');
    if (dealerDecision2 === "Bust") {
        console.log("Too Many for the dealer! You Win!")
    }
    if (dealerDecision2 === 'Hit') {
        let hitCard = hit();
        player.push(hitCard)
        console.log(`Players Hand: [${dealer[0]["value"]} of ${dealer[0]["suit"]}][${dealer[1]["value"]} of ${dealer[1]["suit"]}][${dealer[2]["value"]} of ${dealer[2]["suit"]}][${dealer[3]["value"]} of ${dealer[3]["suit"]}]`)
    }

}

export { }