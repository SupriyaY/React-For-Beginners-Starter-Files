import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'; 
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    //1. take a copy of the existing state
    const fishes = {...this.state.fishes}
    //2. add new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object to state
    this.setState({fishes});
};

loadSamplesFishes = () => {
  this.setState({fishes: sampleFishes})
}

addToOrder = (key) => {
  //1. take a copy of state
  //2. Either add to the order or update the number in our order
  //3. call set state to update our state object

}
  
  render() {
    return (
    <div className="catch-of-the-day">
    <div className="menu">
    <Header tagline="Fresh Seafood Market"/>
    <ul className="fishes">
    {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
    </ul>
    </div>
     <Order/>
    <Inventory addFish={this.addFish} 
    loadSampleFishes={this.loadSamplesFishes}/>
    </div>
    );
  }
}

export default App;