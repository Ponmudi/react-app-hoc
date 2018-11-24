import React, {Component} from 'react';

const HOC = (propName) => (WrappedComponent) => {
    return class HOC extends Component {

        render(){
            //console.log(this.props[propName])
            return this.props[propName].length === 0 ? 'Loading...' : <WrappedComponent {...this.props} />
        }
        
    } 
}

export default HOC;