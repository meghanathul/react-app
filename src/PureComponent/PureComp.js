import React,{PureComponent} from 'react'

 class PureComp extends PureComponent {
  render() {
      console.log('Pure Component')
    return (
      <div>PureComp<h1>{this.props.name}</h1></div>
    )
  }
}

export default PureComp
//we can create a Pure Component by extending the PureComponent class.
//IMP--A Purecomponent implemented shouldcomponentUpdate 
//lifecycle method by performing comparision.
//If there is no diferense ,then component is not re-renderd-(Performance Boost).