import react, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
//import moment from "moment";

class Weather extends Component{
    
        state={
            city:'',
            temparature:'',
            temp_min:'',
            temp_max:'',
            cityname:'',
            showWeather:false
        }
        

    
    componentDidMount(){
       let  city=this.state.city
        axios.get(`http://api.openweathermap.org/data/2.a5/weather?q=Pune&appid=094aa776d64c50d5b9e9043edd4ffd00`).then(
            (response)=>{
                console.log(response.data.main.feels_like)
                this.setState({temparature:response.data.main.temp})
                this.setState({temp_min:response.data.main.temp_min})
                this.setState({temp_max:response.data.main.temp_max})
            })
        
    }
        
    getWeatherhandler=(name)=>{
       // console.log(new datetime)
        this.setState({city:name.target.value})

        console.log(this.setState.weather)

    }
    showWeatherhandler=()=>{
        this.setState({showWeather:true})
    }
    getSuggestions=(cityname)=>{
        this.setState({cityname:cityname.target.value})
    }

    render(){
        let weather=null;
        if(this.state.showWeather){
         weather=<div>
            <p>city Name:{this.state.city}</p>
            <p>temparature :{this.state.temparature}</p>
            <p>Min Temp:{this.state.temp_min}</p>
             <p>Max temp:{this.state.temp_max}</p>
            </div>
        }
       
        return (
        <div>
            <input type='text' placeholder='Enter City Name' 
            onChange={(e)=>{this.getWeatherhandler(e)} }
            onkeydown={(e)=>{this.getSuggestions(e)}} />
            <button onClick={this.showWeatherhandler}>Weather</button>
            {weather}
        </div>
        )
    }

}

export default Weather;