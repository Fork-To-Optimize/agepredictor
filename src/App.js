import './custom.scss';
import logo from './pic/Untitled design.svg';
import React from 'react';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '',age:0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    let response = await fetch(`https://api.agify.io/?name=${this.state.value}`);
    let result = await response.json();
    (result.age != null)?this.setState({age: result.age}):this.setState({age:0});
  }
  render(){
  return (
    <div class="container">
    <br/>
      <center><img src={logo} height="70"></img></center>
    <br/>
    <center><h2 class="text-primary">Age Predictor</h2></center>
    <br/>
    <form onSubmit={this.handleSubmit}>
      <center><input class="form-control" onChange={this.handleChange}  placeholder="Enter Your Name"></input></center>
    <br/>
    <center><button type="submit" class="btn btn-primary">Predict</button></center>
    <br/>
    </form>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary"><center>Predicted Age</center></h5>
        <br/>
        <h1 class="text-primary"><center>{this.state.age}</center></h1>
      </div>
    </div>

    <footer class="footer">
      <span> Api Courtesy : agify.io </span>
    </footer>
    </div>
  );
  }
}

export default App;
