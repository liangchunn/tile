import React, { Component } from 'react';
import TiledRendering from './components/TiledRendering'
import NonTiledRendering from './components/NonTiledRendering'

const bigData = (new Array(10000)).fill(void 0).map((val, index) => ({
    id: index + 1,
    data: (
        <span>START OF TILE {index}<br/>Code 3<br/>Code 4<br/>Code 5<br/>Code 6<br/>END OF TILE</span>
    )
}))

class App extends Component {
    constructor(){
        super()
        this.state = {
            show1: false,
            show2: false,
        }
    }

    render() {
        return(
            <div>
                <h1>Render Perfomance Tests</h1>
                <p>With the tiled rendering approach, data is seperated into tiles which will only mount onto the DOM whenever it is scrolled to</p>
                <p>With the classical approach, the whole data is mounted onto the DOM at once, thus affecting performance</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{minWidth: 500}}>
                        <h2>Tiled Rendering</h2>
                        <button onClick={() => this.setState({show1: !this.state.show1})}>Toggle</button>
                        {this.state.show1 && <TiledRendering bigData={bigData}/>}
                    </div>
                    <div style={{minWidth: 500}}>
                        <h2>Non-Tiled Rendering</h2>
                        <button onClick={() => this.setState({show2: !this.state.show2})}>Toggle</button>
                        {this.state.show2 && <NonTiledRendering bigData={bigData}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default App
