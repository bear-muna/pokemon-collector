const Pokemon = require('./Pokemon');

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemonCollection = [];
    };

    addPokemon(name, hp, atk) {
        this.pokemonCollection.push(new Pokemon(name, hp, atk));
    };

    getRandomPokemon() {
        const index = Math.floor(Math.random() * this.pokemonCollection.length);
        return this.pokemonCollection[index];
    };
}


module.exports = Trainer