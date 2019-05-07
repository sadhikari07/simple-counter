import React from 'react';


const Header = () =>{
  return(
    <header>
      <h1>Simple counter</h1>
    </header>
  );
};

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }

handleCountAdd = e =>{
  e.preventDefault();
  let count = this.state.count
  count++;
  this.setState({count});
};

handleCountSubtract = e =>{
  e.preventDefault();
  let count = this.state.count
  count--;
  this.setState({count});
};

render(){
  return(
    <div>
      <p>The current count is {this.state.count}</p>
      <button onClick = {this.handleCountAdd}>Click to add to the counter</button>
      <button onClick = {this.handleCountSubtract}>Click to subtract from the counter</button>
    </div>
  );
}
}

class App extends React.Component{
  render(){
    return(
    <React.Fragment>
      <Header/>
      <Counter/>
    </React.Fragment>
    );
  }
}

export default App;
