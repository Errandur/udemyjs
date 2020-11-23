new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameisRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameisRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits Monster for " + damage
            });
            if (this.checkWinCondition()) {
                return;
            }

            this.monsterAttacks();
        },
        spAttack() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits Monster hard for " + damage
            });
            if (this.checkWinCondition()) {
                return;
            }
            this.monsterAttacks();
        },
        monsterAttacks() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits Player for " + damage
            });
            this.checkWinCondition();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player heals for 10"
            });
        },
        giveUp() {
            if (confirm("Give up?")) {
                this.gameisRunning = false;
            }
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWinCondition() {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New Game?")) {
                    this.startGame();
                } else {
                    this.gameisRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game?")) {
                    this.startGame();
                } else {
                    this.gameisRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});