import React from 'react';

const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage extends React.Component {
    constructor(props){
        super(props)
        this.state ={}
    }
  render() {
    return (
    <div>
    <h1>Hello {this.props.name}</h1>
    <ul>
      {lists.map((result, index) => {
        return (<li key={index}>{result}</li>);
      })}
    </ul>
    </div>);
  }
}

 HelloMessage.defaultProps = {
      name: 'Tom',
  }

export default HelloMessage;