const inquirer = require('inquirer');
const Pokemon = require('./lib/Pokemon');
const Trainer = require('./lib/Trainer');

const trainerArray = [];

const pokemonApp = async () => {
    try {
        const data = await inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Choose your option!',
                    name: 'option',
                    choices: ['Add trainer', 'Add Pokemon', 'Get random Pokemon', 'Show Trainers', 'Quit'],
                }
            ]);
            switch(data.option) {

                case 'Add trainer':
                    let addTrainerData = await inquirer
                        .prompt([
                           {
                                type: 'input',
                                message: "What is the trainer's name?",
                                name: 'trainerName',
                           }
                        ]);
                    trainerArray.push(new Trainer(addTrainerData.trainerName));
                    console.log(trainerArray);
                    pokemonApp();
                    break;

                case 'Add Pokemon':
                    let addPokemonData = await inquirer
                        .prompt([
                            {
                                type: 'list',
                                message: 'Choose your trainer:',
                                name: 'pokemonTrainer',
                                choices: trainerArray,
                            },
                            {
                                type: 'input',
                                message: "What is your pokemon's name?",
                                name: 'pokemonName',
                            },
                            {
                                type: 'input',
                                message: "What is your pokemon's hp?",
                                name: 'pokemonHP',
                            },
                            {
                                type: 'input',
                                message: "What is your pokemon's attack power?",
                                name: 'pokemonATK',
                            },
                        ]);
                    // const pokemon = new Pokemon(addPokemonData.pokemonName, addPokemonData.pokemonHP, addPokemonData.pokemonATK);
                    console.log(trainerArray);
                    console.log(addPokemonData);
                    for (let i = 0; i < trainerArray.length; i++) {
                        if (trainerArray[i].name.match(addPokemonData.pokemonTrainer)) {
                            console.log(i);
                            trainerArray[i].addPokemon(addPokemonData.pokemonName, addPokemonData.pokemonHP, addPokemonData.pokemonATK);
                            console.log(trainerArray);
                        }
                        break;
                    }

                    pokemonApp();
                    break;
                
                case 'Show Trainers':
                    console.log(trainerArray);
                    pokemonApp();
                    break;

                case 'Quit':
                    break;
            }
    } catch (err) {
        console.log(err);
    }
}

pokemonApp();
