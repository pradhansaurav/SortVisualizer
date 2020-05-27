import React from 'react';
import './App.css';
import {getAnimationsForBubbleSort} from './Algorithm/bubblesort.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      array:[],
    };
  }
  
  componentDidMount(){
    this.resetArray();
  }

  bubbleSort(){
    const animations = getAnimationsForBubbleSort(this.state.array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      let colorChange = i % 3 !== 2;
      if(colorChange){
        const [barIndexOne, barIndexTwo] = animations[i];
        const barOneFig = arrayBars[barIndexOne].style;
        const barTwoFig = arrayBars[barIndexTwo].style;
        const color = i % 3 === 0 ? 'red' : 'orange';
        setTimeout(() => {
          barOneFig.backgroundColor = color;
          barTwoFig.backgroundColor = color;
        }, i * 1);
      }
      else{
        const [barIndexOne, barIndexTwo] = animations[i];
        const [barIndexOneBef,barIndexTwoBef] = animations[i-1];
        const barOneFig = arrayBars[barIndexOne].style;
        const barTwoFig = arrayBars[barIndexTwo].style;
        setTimeout(() => {
         if(barIndexOne!==barIndexOneBef){
          let prev = barOneFig.height;
          barOneFig.height = barTwoFig.height;
          barTwoFig.height = prev;
         }
        }, i * 1);
      }
    }
  }
  resetArray(){
    const array = [];
    for(let i=0;i<50;i++){
      array.push(Math.floor(Math.random()*800)+10);
    }
    this.setState({array});
  }
  render(){
    const {array} = this.state; 
    return (
      <div className="array-container">
        {array.map((elem,i)=>(
          <div 
            className="array-bar"
            key={"elem"+i}
            style = {
              {
                backgroundColor:"orange",
                height:`${elem}px`
              }
            }
          >
          </div>
        ))}
        <br></br>
         <button onClick={()=>this.resetArray()}>Reset</button>
         <button onClick={()=>this.bubbleSort()}>Bubble-Sort</button>
      </div>
    );
  }
}

export default App;
