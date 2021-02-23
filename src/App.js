import React, { Component, useState, useEffect} from 'react';

const App =() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  const increment = () => setCount(count + 1)
  
  return (
    <div className="App">
      <h2>Counter App</h2>
      <button onClick={increment} className="btn-success btn-sm">Clicked {count} times</button>
    </div>

  );
}


// class App extends Component {

//   state = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`
//   }
//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`
//   }


//   render() {
//     return (
//       <div className="App">
//        <h2>Counter App</h2>
//        <button onClick={this.increment} className="btn-success btn-sm">Clicked {this.state.count} times</button>
//       </div>

//     );
//   }
// }

export default App;
