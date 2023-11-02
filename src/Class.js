import React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        //runs when your component first mounts
        console.log("mounted!");
        //performs operations as soon as the component is rendered in the screen
    }

    componentDidUpdate() {
        //Called after updating the component, state changed and so on
        console.log("Updated!");
    }

    componentWillUnmount() {
        //The component is about to be destroyed
        //perform a clean-up-operation
        console.log("Cleanup");
    }

    clickedButton () {
        this.setState({count: this.state.count +1});
        console.log("clicked!");
        this.props.destroy(false);
    }

    render() {
        return (
            <div>
                <p>Clicked {this.state.count}</p>
                <button className="btn btn-primary" onClick={() => {this.clickedButton()}}>
                    Click me!
                </button>
            </div>
        );
    }
}