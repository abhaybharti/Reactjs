import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './Counter.css';

class Counter extends React.Component{

    increment =  () =>{
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <div>
                    <Button variant="contained" size="large" color="secondary" onClick={this.decrement}> - </Button>
                    <span className="counterSpace" size ="25"><strong>{this.props.count} </strong> </span>
                    <Button variant="contained" size="large" color="primary" onClick={this.increment}> + </Button>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);