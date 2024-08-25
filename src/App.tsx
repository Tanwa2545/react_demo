import React from 'react';
import './App.css';
import { count } from 'console';

type AppProps = {
  message?: string;
};
type AppState = {
  counter: number;
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    counter: 0,
  }

  
  render() {
    const incCounter = () => {
      this.setState({counter: this.state.counter+1});
    }
    return (
      <div>
        {this.props.message ? this.props.message : "Nothing to see here"}
        <br />
        Counter = {this.state.counter}
        <br />
        <button onClick={incCounter}>Increment</button>
      </div>
    );
  }
}

export default App;
