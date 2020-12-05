import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
    /* state = {
         age: 20
     }
     ageUp = () => {
         this.setState({
             ...this.state,
             age: ++this.state.age
         })
     }
     ageDown = () => {
         this.setState({
             ...this.state,
             age: --this.state.age
         })
     } */
    render() {
        return (
            <div>
                <div>Age: <span>{this.props.age}</span></div>
                <div>
                    <button onClick={this.props.ageUp}>Age Up</button>
                    <button onClick={this.props.ageDown}> Age Down</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ageUp: () => dispatch({ type: 'AGE_UP' }),
        ageDown: () => dispatch({ type: 'AGE_DOWN' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
