import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './tom.js'
import Timer from './time.js'
import Acton from './click.js'
import * as serviceWorker from './serviceWorker';
import { waitForElementToBeRemoved } from '@testing-library/react';

ReactDOM.render(
  <React.StrictMode>
    <App />
  
    <Timer />
  </React.StrictMode>,
  document.getElementById('root')
  
);
ReactDOM.render(
  <React.StrictMode>
    <Acton />
  <HelloMessage name="sam"/>
  </React.StrictMode>,document.getElementById('tom')
);

const img = ()=>{
  var out=[]
  for(let i=0;i<5;++i){
    let res = "https://picsum.photos/300/300?random="+i
    out.push(<img src={res}></img>)
  }
  return out
}
ReactDOM.render(<div>{img()}</div>,document.getElementById('tom'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
