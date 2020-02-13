import React, { Component } from 'react';
import ColorBox from './ColorBox'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                boxList: []
            }
    }
    addBox = () => {
        let newBox = [<ColorBox />]
        this.setState({ boxList: this.state.boxList.concat(newBox) })
    }
    deleteBox = () =>{
        let newBox = this.state.boxList.slice(1)
        this.setState({ boxList: newBox})
    }

    render() {
        let { boxList } = this.state
        return (
            <div>
                <div class = "addRemoveButton">
                    <button class = "addRemove" onClick = { this.addBox }> Add a box</button>
                    <button class = "addRemove" onClick = { this.deleteBox }> Delete a box</button>
                </div>
                <div class = "theBoxes">
                    <ColorBox />
                    {boxList}
                </div >
            </div>
        )
    }
}
export default App;
