export class Table {
    constructor(computersCards, playersCards){
        this.computersCards = computersCards;
        this.playersCards = playersCards;
    }

    showPlayersCard(card){
        this.playersCards.appendChild(card.render());
    }

    showComputersCard(card){
        this.computersCards.appendChild(card.render());
    }


}