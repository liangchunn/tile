import React from 'react'

const NonTiledRendering = ({bigData}) => {
    const elems = bigData.map((item) => {
        return (
            <span>
                {item.data}
                <br/>
            </span>
        )
    })
    return (
        <div style={{height: 600, width: 400, overflow: 'scroll', border: '2px #ccc solid'}}>
            <pre style={{margin: 0}}>
                {elems}
            </pre>
        </div>
    )
}

export default NonTiledRendering