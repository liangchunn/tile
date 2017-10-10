import React, { Component } from 'react';
import injectSheet from 'react-jss'

import TiledRendering from './components/TiledRendering'
import NonTiledRendering from './components/NonTiledRendering'

const bigData = (new Array(10000)).fill(void 0).map((val, index) => ({
    id: index + 1,
    data: (
        <span>START OF TILE {index}<br/>Code 3<br/>Code 4<br/>Code 5<br/>Code 6<br/>END OF TILE</span>
    )
}))

const style = {
    link: {
        '&:visited': {
            color: '3498DB'
        },
        fontFamily: 'SF Mono, Roboto Mono, Consolas, monospace',
        color: '3498DB',
        textDecoration: 'none',
    },
    button: {
        border: '2px #000 solid',
        color: 'black',
        fontSize: '1rem',
        background: '#fff',
        padding: '5px 5px',
        textAlign: 'center',
        width: 85,
        marginBottom: 20
    },
    active: {
        background: 'black',
        color: 'white',
    },
    flexContainer: {
        flexDirection: 'column'
    },
    flexChild: {
        '&:last-child': {
            paddingRight: 0
        },
        flexGrow: 1,
        paddingRight: 0
    },
    '@media screen and (min-width: 48rem)': {
        flexContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        flexChild: {
            '&:last-child': {
                paddingRight: 0
            },
            flexGrow: 1,
            paddingRight: 30
        },
    }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            show1: false,
            show2: false,
        }
    }

    render() {
        const { classes } = this.props
        return(
            <div>
                <h1>Render Perfomance Tests</h1>
                <a href="https://github.com/liangchunn/tile" className={classes.link}>https://github.com/liangchunn/tile</a>
                <p>With the tiled rendering approach, data is seperated into tiles which will only mount onto the DOM whenever it is scrolled to</p>
                <p>With the classical approach, the whole data is mounted onto the DOM at once, thus affecting performance</p>
                <div className={classes.flexContainer}>
                    <div className={classes.flexChild}>
                        <h2>Tiled Rendering</h2>
                        <div 
                            className={`${classes.button} ${(this.state.show1) ? classes.active: ''}`} 
                            onClick={() => this.setState({show1: !this.state.show1})}>
                            {(this.state.show1)
                                ? 'Hide'
                                : 'Show'
                            }
                        </div>
                        {this.state.show1 && <TiledRendering bigData={bigData}/>}
                    </div>
                    <div className={classes.flexChild}>
                        <h2>Non-Tiled Rendering</h2>
                        <div 
                            className={`${classes.button} ${(this.state.show2) ? classes.active: ''}`}
                            onClick={() => this.setState({show2: !this.state.show2})}>
                            {(this.state.show2)
                                ? 'Hide'
                                : 'Show'
                            }    
                        </div>
                        {this.state.show2 && <NonTiledRendering bigData={bigData}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default injectSheet(style)(App)
