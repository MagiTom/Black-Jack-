import { Player } from './Player.js';
import { Deck } from './Deck.js';
import { Table } from './Table.js';
import { Message } from './Message.js';

class Game {
    constructor({ player, playerPoints, computerPoints, table, hitButton, standButton, messageBox }) {
        this.hitButton = hitButton;
        this.standButton = standButton;
        this.playerPoints = playerPoints;
        this.computerPoints = computerPoints;
        this.messageBox = messageBox;
        this.player = player;
        this.table = table;
        this.computer = new Player('Computer');
        this.deck = new Deck();
        this.deck.shuffle();
    }

    run() {
        this.hitButton.addEventListener('click', (event) => this.hitCard());
        this.standButton.addEventListener('click', (event) => this.computerPlays());
        this.dealCards();
    }

    hitCard() {
        const card = this.deck.pickOne();
        this.player.hand.addCard(card);
        this.table.showPlayersCard(card);
        this.playerPoints.innerHTML = this.player.calculatePoints();
    }

    dealCards() {
        for (let i = 0; i < 2; i++) {
            let card1 = this.deck.pickOne();
            this.player.hand.addCard(card1);
            this.table.showPlayersCard(card1);

            let card2 = this.deck.pickOne();
            this.computer.hand.addCard(card2);
            this.table.showComputersCard(card2);
        }
        this.playerPoints.innerHTML = this.player.calculatePoints();
        this.computerPoints.innerHTML = this.computer.calculatePoints();
    }

    computerPlays() {
        while (this.computer.points <= this.player.points && this.computer.points <= 21 && this.player.points <= 21) {
            const card = this.deck.pickOne();
            this.computer.hand.addCard(card);
            this.table.showComputersCard(card);
            this.computerPoints.innerHTML = this.computer.calculatePoints();
        }
        this.endGame();
    }

    endGame() {
        this.hitButton.removeEventListener('click', (event) => this.hitCard());
        this.standButton.removeEventListener('click', (event) => this.dealerPlays());
        this.hitButton.style.display = 'none';
        this.standButton.style.display = 'none';

        if (this.player.points < 21 && this.player.points == this.computer.points) {
            this.messageBox.setText('Draw').show();

            return;
        }

        if (this.player.points > 21) {
            this.messageBox.setText('Computer Wins').show();
            return;
        }

        if (this.computer.points > 21) {
            this.messageBox.setText('Player Wins').show();

            return;
        }

        if (this.player.points < this.computer.points) {
            this.messageBox.setText('Computer Wins').show();

            return;
        }
    }
}

const table = new Table(document.getElementById('computersCards'), document.getElementById('playersCards'));

const messageBox = new Message(document.getElementById('message'));

const player = new Player('Magda');
const game = new Game({
    hitButton: document.getElementById('hit'),
    standButton: document.getElementById('stand'),
    computerPoints: document.getElementById('computerPoints'),
    playerPoints: document.getElementById('playerPoints'),
    player,
    table,
    messageBox
});

game.run();