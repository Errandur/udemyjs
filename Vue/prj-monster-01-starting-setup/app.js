function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

new Vue({
    el: "#game",
    data: {
            playerHealth: 100,
            monsterHealth: 100
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster() {
            attackValue = getRandomValue(5.12);
            monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            playerHealth -= getRandomValue(8, 15);
        },
        spAttack() {
            
        }
    }
});