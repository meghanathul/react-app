import React from 'react'
import Auther from "./Auther"
import Avatar from './Avatar'
import './index.css'
import Message from "./Message"
import Time from './Time'
import Options from './Options'

const Tweet = ({tweetData}) => {
  console.log(tweetData)
    return (
    
           <div className='tweet'>
           <Avatar has={tweetData.gravator}/>
           <div className='content'>
             <Auther />
             <Time/>
             <Message />
              <div className='button'>
             <Options/>
             </div>
           </div>
           
       </div>
   
    
      )
  }
  
  export default Tweet

