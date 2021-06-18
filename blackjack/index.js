"use strict";
exports.__esModule = true;
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// const player;
// const dealer;
function deckOfCards(suits, values) {
    var cards = [];
    for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
        var suit = suits_1[_i];
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            var card = { suit: suit, value: value };
            cards.push(card);
        }
    }
    return cards;
}
var cards = deckOfCards(suits, values);
function getRandCard(cards) {
    var randCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(randCard);
}
getRandCard(cards);
