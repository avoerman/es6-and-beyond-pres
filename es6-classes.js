// ES6 Classes

class FootballSimulator {
    constructor(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }

    predictWinner() {
        if (this.homeTeam === 'Packers') return this.homeTeam;
        if (this.awayTeam === 'Packers') return this.awayTeam;
        return this.homeTeam; // some other logic
    }
}


game1 = new FootballSimulator('Packers', 'Bears');

console.assert(game1.predictWinner() === 'Packers');

game2 = new FootballSimulator('Vikings', 'Packers');

console.log(game2.predictWinner() === 'Packers');