export const Weights = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
]

export const Types = ["♠", "♣", "♥", "♦"];


export class Card {
    constructor(weight, type) {
        this.weight = weight;
        this.type = type;
    }

    get color() {
        return this.type === "♠" || this.type === "♠" ? "black" : "red"
    }

    render(){
        const card = document.createElement('div');
        card.innerText = this.type;
        card.classList.add("card", this.color);
        card.dataset.value = `${this.weight} ${this.type}`
        card.innerHTML = `${this.weight}`;

        return card;
    }
}