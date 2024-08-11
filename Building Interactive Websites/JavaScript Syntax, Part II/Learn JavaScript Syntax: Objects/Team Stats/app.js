const team = {
    _players: [
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 25
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            age: 30
        },
        {
            firstName: 'Sam',
            lastName: 'Wilson',
            age: 22
        }
    ],
    _games: [
        {
            opponent: 'Sharks',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Bears',
            teamPoints: 35,
            opponentPoints: 31
        },
        {
            opponent: 'Wolves',
            teamPoints: 28,
            opponentPoints: 24
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);

const totalGamesPlayed = team.games.length;
console.log(`Total games played: ${totalGamesPlayed}`);

const totalTeamPoints = team.games.reduce((total, game) => total + game.teamPoints, 0);
const averageTeamScore = totalTeamPoints / team.games.length;
console.log(`Average team score: ${averageTeamScore}`);

const totalOpponentPoints = team.games.reduce((total, game) => total + game.opponentPoints, 0);
console.log(`Total points scored by opponents: ${totalOpponentPoints}`);

const highestScoringGame = team.games.reduce((max, game) => game.teamPoints > max.teamPoints ? game : max, team.games[0]);
console.log(`Highest scoring game: ${highestScoringGame.opponent} - ${highestScoringGame.teamPoints} points`);

const winLossRecord = team.games.reduce((record, game) => {
    if (game.teamPoints > game.opponentPoints) {
        record.wins += 1;
    } else {
        record.losses += 1;
    }
    return record;
}, { wins: 0, losses: 0 });

console.log(`Wins: ${winLossRecord.wins}, Losses: ${winLossRecord.losses}`);

const totalAge = team.players.reduce((total, player) => total + player.age, 0);
const averageAge = totalAge / team.players.length;
console.log(`Average age of players: ${averageAge}`);