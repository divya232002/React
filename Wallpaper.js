import React, { Component } from 'react'
import logo from '../Assets/logo.jpg'
import '../styles/Wallpaper.css'



export default class Wallpaper extends Component {
  constructor(){
    super();
    this.state={
      locations:[],
      restaurants:[]
    }
  }

  fetcRestaurants=(event)=>{
    console.log(event.target.value)
    fetch(`http://localhost:9090/restaurant/${event.target.value}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState({restaurants:data.data}))

    
  
  }
  componentDidMount(){
    fetch('http://localhost:9090/location',{method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState({locations:data.data}))
  }


  render() {
    const locationlist=this.state.locations.length && this.state.locations.map(item=><option key={item.name} value={item.city_id}>{item.name}</option>)
    const restaurantlist=this.state.restaurants.length && 
                                                          
                                                          this.state.restaurants.map(item=>
                                                          <option key={item.name} >
                                                              {item.name}
                                                          </option>)
                                                          
                                            
    return (  
    <div>
        <div className='banner'>
            <div className='header'>
                <a href="#">Login</a>
                <a href="#">Create an account</a>
            </div>
            <div className='box'>
                <img src={logo}/>
                <h1>Find the best restaurants, cafe`s and bars</h1>
            </div>
            <div className='search'>
                <select className='locationDropdown' onChange={this.fetcRestaurants}>
                  {locationlist}
                </select>
                
                <select className='input' placeholder="Search for restaurants">
                {restaurantlist}
                </select>
                
        </div>
        </div>
        <div className="headings">
        <h1>Quick searches</h1>
        <h5>Discover restaurants by type of meal</h5>
    </div>
    </div>

    )
  }
}
