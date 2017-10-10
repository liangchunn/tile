import React, { Component } from 'react'
import injectSheet from 'react-jss'
import VirtualList from 'react-virtual-list'

const style = {
    container: {
        height: 600,
        width: '100%',
        overflow: 'scroll',
        border: '2px #ccc solid',
    }
}

const List = ({virtual, itemHeight}) => (
    <div style={{boxSizing: 'border-box', padding: 15, ...virtual.style}}>
        {virtual.items.map((item, index) => (
        <div key={`item_${item.id}`} style={{height: itemHeight, border: '2px rgba(255, 0, 0, 0.5) transparent'}}>
            <pre style={{margin: 0, border: '1px rgba(0, 0, 0, 0.5) solid'}}>RenderIndex: {index}<br/>{item.data}</pre>
        </div>
        ))}
    </div>
)

class TiledRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ListSlides: null,
            ready: false,
        }        
    }

    componentDidMount() {
        this.setState({
            ListSlides: VirtualList({
                container: this.refs.container
            })(List),
            ready: true
        })
    }

    render() {
        const { ListSlides } = this.state
        const { classes } = this.props
        return ( 
            <div className={classes.container} ref='container'>
                {this.state.ready && <ListSlides 
                    items={this.props.bigData}
                    itemHeight={105}
                />}
            </div>
        )
    }
}

export default injectSheet(style)(TiledRendering)
