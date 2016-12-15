import React, { Component } from 'react';

export default class WinterJokes extends Component {
  constructor() {
    super()
    this.nextJoke = this.nextJoke.bind(this)
    this.answer = this.answer.bind(this)
  }

  componentDidMount() {
    this.nextJoke()
  }

  nextJoke() {
    this.setState({
      joke: randomJoke(),
      answered: false,
    })
  }

  answer() {
    this.setState({answered: true})
  }

  render() {
    if (!this.state) { return null }

    const {joke, answered} = this.state    
    return (
      <div>
        <h1 onClick={answered ? this.nextJoke : this.answer}>{joke.q}</h1>
        {answered && <h2>{joke.a}</h2>}
      </div>
    )
  }
}

function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

const jokes = `Q: What did the Arctic wolf ask in the restaurant?
A: Are these lemmings fresh off the tundra?
Q: What did the big furry hat say to the warm woolly scarf?
A: You hang around while I go on ahead.
Q: What's the difference between an iceberg and a clothes brush?
A: One crushes boats and the other brushes coats!
Q: Why aren't penguins as lucky as Arctic murres?
A: The poor old penguins can't go south for the winter. (they live in Antarctica)
Q: How do you keep from getting cold feet?
A: Don't go around BRRfooted!
Q: Why is the slippery ice like music?
A: If you don't C sharp - you'll B flat!
Q: What's an ig?
A: A snow house without a loo!
Q: Where do seals go to see movies?
A: The dive-in!
Q: What kind of math do Snowy Owls like?
A: Owlgebra.
Q: What did the ocean say to the bergy bits?
A: Nothing. It just waved.
Q: What sits on the bottom of the cold Arctic Ocean and shakes?
A: A nervous wreck.
Q: How do you know if there's a snowman in your bed? 
A: You wake up wet!
Q: How do you tell the difference between a walrus and an orange?
A: Put your arms around it and squeeze it. If you don't get orange juice, it's a walrus.
Q: What do chefs call "Baked Alaska" in Alaska?
A: Baked Here
Q: Getting a job in the Arctic in the winter is great! Why?
A: When the days get short, you only have to work a 30 minute work week.
Q: Why do seals swim in salt water?
A: Because pepper water makes them sneeze!
Q: Where can you find an ocean without any water?
A: On a map!
Q: What eight letters can you find in water from the Arctic Ocean?
A: H to O! (H20)
Q: Which side of an Arctic Tern has the most feathers?
A: The outside!
Q: What vegetable was forbidden on the ships of Arctic explorers?
A: Leeks!
Q: What happened when all the collected muskox wool was stolen?
A: The police combed the area.
Q: What did one Greenland Shark say to the other?
A: Say, good lookin'... didn't I meet you last night at the feeding frenzy?
Q: What's a sign that you have an irrational fear of icebergs?
A: You start having water-tight compartments installed in your pants.
Q: What did the seal say when it swam into a concrete wall?
A: Dam!
Q: What do you call a reindeer with no eyes?
A: I have no eye deer.
Q: What do you get from sitting on the ice too long?
A: Polaroids!
Q: What did the detective in the Arctic say to the suspect?
A: Where were you on the night of September to March?
Q: What noise wakes you up at the North Pole around March 18?
A: The crack of dawn!
Q: If you live in an igloo, what's the worst thing about global warming?
A: No privacy!
Q: When are your eyes not eyes?
A: When the cold Arctic wind makes them water!
Q: What did the icy Arctic road say to the truck?
A: Want to go for a spin?
Q: What do Arctic hares use to keep their fur lookin' spiffy?
A: Hare spray!
Q: What do you call ten Arctic hares hopping backwards through the snow together?
A: A receding hare line.
Q: Why are bad school grades like a shipwreck in the Arctic Ocean?
A: They're both below C level!`
  .split('\n')
  .reduce((all, row, i) =>
    i % 2 === 0
    ? [...all, {q: row}]
    : [...all.slice(0, all.length - 1), Object.assign({a: row}, all[all.length - 1])],
    [])