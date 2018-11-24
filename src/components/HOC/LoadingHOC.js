import React, { Component } from 'react';
import "./LoadingHOC.css"

const HOC = (propName) => (WrappedComponent) => {
    return class HOC extends Component {

        render(){
            return this.props[propName].length === 0 ? <div className="loader" /> : <WrappedComponent {...this.props} />
        }
        
    } 
}

// function HOC(propName) {
//     return function (WrappedComponent) {
//         return class HOC extends Component {
//             render(){
//                 return this.props[propName].length === 0 ? <div className="loader" /> : <WrappedComponent {...this.props} />
//             }
//         }
//     }
// }

export default HOC;


