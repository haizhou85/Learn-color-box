import React, { Component } from 'react'

class ColorBox extends Component {
    constructor(props){
        super(props)
            this.state = {
                color: "",
                count: -1
            }
    }


    handleChange = () =>{
        let i = this.state.count + 1
        this.setState({ count: i })
        let colorSet = ["green", "blue", "yellow", "red", "purple", "orange"]
        let newColor = colorSet[i%6]
        this.setState({ color: newColor})
    }


    render(){
        let { color } =  this.state
        return(
            <button onClick = { this.handleChange } class="box" style={{backgroundColor: color}}>
            { color }
            </button>
        )


    }
}
export default ColorBox
