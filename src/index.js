import React from "react";
import ReactDom from "react-dom";
import App from './App'
// import store from './Redux/store'
// import {Provider} from 'react-redux' 
// by name
// import {App,Mpp} from './App' 



// function HelloWorld(){
  //     return (
        //   <div>
        // <React.Fragment>
      //   <>
      // <h1>Hello</h1>
      // <p>pera</p>
      
      // </>
    //  </React.Fragment>
    //   </div>
      // )
      

  // }
  // function Hello(){
  //     return(
          
  //         <h1>WELCOME</h1>
          
  //     )
  // }


  // ReactDom.render(
  //     <HelloWorld/>,
  //     document.querySelector('#root')
  // );


  // Function component-stateless
// simple function
// Absence of this Keyword
// solution without using state 
// mainly responsible for the UI

  // const Welcome=()=> <h1>Welcome</h1>
  
  // Class component-stateful
  // More feacture rich
  // maitains their own private data-state
  // complex UI logic
  // provide lifecycle method
  // stateful
//   class Demo extends React.Component{
// render(){
//   return <h1>Welcome</h1>
// }
//   }
//   ReactDom.render(
//     <Welcome/>,
//     document.getElementById('#root')
//   );
  // JSX-html element

  ReactDom.render(
    // <Provider store={store}>
      // <App />
      // </Provider>----for redux
      <App />,
        document.getElementById('root')
      );