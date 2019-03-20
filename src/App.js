import React, { Component } from 'react';
import './App.css';
import {Bookpage} from './components/Bookpage/Bookpage';
import {Review} from './components/Review/Review';
import {Signup} from './components/Signup/Signup';
import {Thankyou} from './components/Thankyou/Thankyou';


const initialState={ route:'welcome',
      isSignedIn:false,
      input:''}

class App extends Component {
  constructor (){
     super();
     this.state=
      initialState;
     
  };
   
  onInputChange=(event) =>{
    this.setState({input:event.target.value});
}
onRouteChange = (route)=> {
  // if (route === 'signout'){
  //   this.setState({initialState})
  // } else if (route ==='home'){
  //     this.setState({isSignedIn:true})
  // }
  this.setState({route : route});
}

  render() {
    const {route,} =this.state
    return (
      <div className="App">
      <Thankyou />
        {
          route ==='welcome'?
          <div> 
          <Signup onRouteChange={this.onRouteChange}/>
          
          </div>:

          (route ==='readbook'?<Bookpage onRouteChange={this.onRouteChange}/>
         :<Review onRouteChange={this.onRouteChange}/>
          )
        }
           
      </div>
    );
  }
}

export default App;



//  {
//         /* 
//       <Listpage/>
//       <Addreview/> */
//       } 