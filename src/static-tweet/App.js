import React from 'react'
import Tweet from "./static-tweet/Tweet.js"

// const testTweet = {
//   message: "Something about cats.",
//   gravator: "xyz",
//   author: {
//     handle: "catperson",
//     name: "Cat Person ABC"
//   },
//   likes: 2,
//   retweet: 0,
//   timestamp: "3 hr ago"
// }

const App = () => {
  return (
    <div>
      <Tweet/>
      {/* <Tweet tweet={testTweet} /> */}
      {/* <Tweet tweet={testTweet} />
      <Tweet tweet={testTweet} />
      <Tweet tweet={testTweet} /> */}

    </div>
  )
}
export default App
