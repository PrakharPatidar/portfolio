import React, { Component } from 'react'

class apps extends Component {
    render() {
        return (
            <div className="container blog-container transition-left-to-right">
                <h2>
                    Apps published
                </h2>
                <li>
                    <a target="_blank" href="https://titanic-predict-prakhar.herokuapp.com/"> 
                        Titanic survival prediction : 
                    </a>
                    <span>
                        - This is built using streamlit and prediction using tensorflow linear models.
                    </span>
                </li>
            </div>
        )
    }
}

export default apps
