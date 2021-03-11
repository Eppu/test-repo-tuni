import React from 'react';

class Hello extends React.Component {
    render() {
        return(
            <div>
                <p>Hello {this.props.name}</p>
                <p>My age is {this.props.age}</p>
            </div>
        )
    }
}
export default Hello;