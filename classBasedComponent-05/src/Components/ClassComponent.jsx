import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
        this.setState({count : this.state.count + 1})
    }

    componentDidMount(){
        console.log("Component Mounted/Rendered");
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count) {
            console.log("Component Updated");
        }
    }
    
    componentWillUnmount(){
        console.log("Component UnMounted");
    }

    render() {
        return (
            <>
            <h2>Count is : {this.state.count}</h2>
            <button onClick={this.handleIncrement}>Increment</button>
            </>
        )
    }
}

export default ClassComponent


