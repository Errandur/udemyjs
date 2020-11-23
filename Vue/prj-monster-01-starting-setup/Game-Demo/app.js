function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

new Vue({
    el: '#app',
    data: {
        varplayerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attackMonster() {
            attackValue = getRandomValue(5.12);
            monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            playerHealth -= getRandomValue(8, 15);
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        specialAttack() {
            this.attack(5, 15);
            if (this.checkWin()) {
                return;
            }
        },
        heal() {
            this.playerHealth += Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        giveUp() {
            this.gameIsRunning = false;
            alert("You have given up...What a shame!")
        },
        checkWin() {
            if (monsterHealth <= 0) {
                if (confirm('You Win! Play Again?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (playerHealth <= 0) {
                if (confirm('You Lose! Play Again?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});