import React from 'react'
import injectSheet from 'react-jss'

const style = {
    container: {
        height: 600,
        width: '100%',
        overflow: 'scroll',
        border: '2px #ccc solid',
    },
    pre: {
        margin: 0,
        padding: 15
    }
}

const NonTiledRendering = ({bigData, classes}) => {
    const elems = bigData.map((item) => {
        return (
            <span>
                {item.data}
                <br/>
            </span>
        )
    })
    return (
        <div className={classes.container}>
            <pre className={classes.pre}>
                {elems}
            </pre>
        </div>
    )
}

export default injectSheet(style)(NonTiledRendering)