import React, { Component } from 'react';
import Block from './components/Header/Header.js';
import Blocks from './components/Blocks/block.js';
import block from './info.json';
import './index.css';

class App extends Component {
  state = {
      block: block,
      picked: 0,
      guessed: [],
    }

  selected = (id) => {
    if (this.state.guessed.includes(id)) {
      this.setState({guessed: []})
      alert("Nice Try, but you lost");
      window.location.reload();
    } else if (this.state.picked === 2) {
      alert("!!!you won!!!");
      window.location.reload();
  } else {
      this.setState({guessed: [...this.state.guessed, id]})
      this.setState({picked: this.state.picked + 1})
    }
  }

  rearrange = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({block:block});
  }

  enterBlocks = (array) => {
    return this.state.block.map(block => (
      <section  id={block.id}>
        <Blocks
          backgroundColor ={block.color} 
          changeBlocks={() => {this.rearrange(this.state.block)}}
          clickedBlock={() => {this.selected(block.id)}}/>
      </section>
      )
    )
  }

  render() {
    return (
      <div>
        <Block picked={this.state.guessed}/>
        <br/>
        <div>
          {this.enterBlocks(this.state.block)}
        </div>
      </div>
    );
  }
}

export default App;