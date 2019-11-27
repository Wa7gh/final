import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import person from '../imge/stylestPerson.png'



export default class StylisList extends Component {

 

    state = {
        startDate: new Date()
      };

      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    
    render() {

        console.log(this.props.elm);
        return (

            <div >
                <br/>
    <Card body  > 

    <img src={person}  className ="imgP" alt="" />
    <h2>Stylist Name :   {this.props.elm.first_name} {this.props.elm.last_name} </h2>
    <br/>
    <h4>{ this.props.elm.email}</h4>

    <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />


    </Card>

 

  
       
            </div>
        )
    }
}
