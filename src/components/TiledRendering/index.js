import React, { Component } from 'react'
import VirtualList from 'react-virtual-list'

const List = ({virtual, itemHeight}) => (
    <div style={{boxSizing: 'border-box', ...virtual.style}}>
        {virtual.items.map((item, index) => (
        <div key={`item_${item.id}`} style={{height: itemHeight, border: '2px rgba(255, 0, 0, 0.5) transparent'}}>
            <pre style={{margin: 0}}>RenderIndex: {index}<br/>{item.data}</pre>
            {/* {item.id} RenderIndex: {index} */}
        </div>
        ))}
    </div>
)

class TiledRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ListSlides: 'Loading',
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
        const ListSlides = this.state.ListSlides
        return ( 
            <div style={{height: 600, width: 400, overflow: 'scroll', border: '2px #ccc solid'}} ref='container'>
                {this.state.ready && <ListSlides 
                    items={this.props.bigData}
                    itemHeight={105}
                />}
            </div>
        )
    }
}

export default TiledRendering
