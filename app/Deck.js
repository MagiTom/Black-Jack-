import { Card, Types, Weights } from './Card.js';

export class Deck {
    cards = [];

    constructor(){
        Types.forEach((type) => Weights.forEach((weight) => this.cards.push(new Card(weight, type))));
}

shuffle(){
    for (let i = this.cards.length - 1; i>0; i--){
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldValue = this.cards[i];
        this.cards[i] = this.cards[newIndex];
        this.cards[newIndex] = oldValue;
    }
    return this.cards;
}

pickOne(){
    return this.cards.pop();
}

}