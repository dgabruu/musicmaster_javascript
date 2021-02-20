import React from 'react';
import './App.css';
import Music from './Music.js';
import Mytrack from './Mytracks.js';
class App extends React.Component {

  state={
    input:' ',
    title:null,
    tracks:[],
    name:'ravi',

  };

  my_api= 'https://spotify-api-wrapper.appspot.com';

  changefunc=(event)=>{
    this.setState({input:(event.target.value)});
   
  }
  display=(event)=>{
    if(event.key==='Enter')
    this.result();
  }

  result=()=>{
    fetch(`${this.my_api}/artist/${this.state.title}`)
    .then(res=>res.json())
    .then(result=>{
      const title=result.artists.items[0];
      this.setState({title});

      fetch(`${this.my_api}/artist/${title.id}/top-tracks`)
      .then(response=>response.json())
      .then(json=>this.setState({tracks:json.tracks}))
      
    })
    
    
    //console.log(this.state.title)
  }
  render(){
    
    return (
      <div>
      <center>
        <h1><u>Hello !! Welcome to World of music..</u></h1>
        <h3><b>Search Any Singer</b></h3>
        <input type='text' placeholder='enter ur fav singer' onChange={this.changefunc} onKeyPress={this.display} required></input>
        <button onClick={this.result}>Go For It</button>

        <Music track={this.state.title} dis='fun' />
        <Mytrack mytrack={this.state.tracks} />
        </center>
      </div>
    
    );
  }
  
}

export default App;
