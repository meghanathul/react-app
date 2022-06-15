// rafce
import     React           from   'react'
import     FunctionClick   from   './Event/FunctionClick.js'
import     ClassClick      from   './Event/ClassClick.js'
import     EventBinding    from   './Event/EventBinding.js'

// function component
const App = () => {
  return (
    <div>
      <FunctionClick />
      <ClassClick />
      <EventBinding />
    </div>
  )
}
export default App