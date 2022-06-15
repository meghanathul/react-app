
# CSS IN REACT-->
1. css stylesheet
2. inline styling
3. css modulas
# ----------------------------------------------------------------------------------# 

# Lifecycle Method (Class component)
1. MOUNTING : When an instance of a component is being created and inserted in tne DOM.
2. RENDARING(UPDATING) : When a component is being re-render as a result of changes to either its props or state.
3. UNMOUNTING : When a component is being removed from DOM.

## Mounting:
1) constructor:-  [only in mounting]
- A spectial type of function that will get called whenever new component is created.
- used to initialize state & Binding events.
- Not perform, Http req.

2) static getDerivedStateFromProps:- (Rarely used)
- when the state of componet depend on change of props.
- set the state
- Not perform, Http req.

3) render:- 
- Only Required Method.
- Return JSX.
# - children component Lifecycle methods also get executed.
- Not perform, Http req.

4) componentDidMount:-   [only in mounting]
- Invoked immideatly after a component and its child component have been render to DOM.
# - Perform AJAX call to load data


## UPDATING:
1)static getDerivedStateFromProps:-
- this method is called every time a component is re-rendered
- set the state
- Not perform , Http req.

 2)shouldComponentUpdate:-
- dictates if the component schould re-render or not
- for performancer optimization
- Not perform , Http req.

 3)render:-
- only Required method
- Return JSX
- Not perform , Http req.

4)getSnapshotBeforeUpdate:- [RARELY USED]
- called right before the changes from the virtual DOM are to be reflected in the DOM.
- capture some information from DOM.

5)componentDidUpdate:-
- after all children.
- called after updated data render to DOM succesfully.
- called after the render is finished in the re-render cycle.
- cause side effect.


## UNMOUNTING (last wish)
### componentWillUnmount:-
- Method is invoked immideatly before a component is unmonted and destroyed.
- cancelling any network requist , also invalidating timers.
- Do not call the setState method.
------------------------------------------------- #


### REDUX

## Redux is a pattern and library
# 1.ACTION (pure object)
- Are plane js object that have a type field.
- WHAT TO DO ?

# 2.REDUCER
- HOW TO DO ?

# 3.STORE
- OBJECT WHICH HOLD THE STATE OF THE APPLICATION.