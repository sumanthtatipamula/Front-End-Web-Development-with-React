## Redux Actions

---

- payloads of information that send data from your application to store.
  - done through store.dispatch()
- A type property that indicates the type of action to be performed.
  - Best supported by defining action types as Strong constants
  - Rest fo the object contains the data necessary for he action.

### Action Creators

- Functions that create actions
  - Encapsulate the process of creating the action objects
  - Return the action object
  - Resulting action object can be passed to store through dispatcher

### Actions and Reducers

- Reducers should be able to take the previous state and action and return next state:
  - Do not mutate state
    - Make a copy and modify the copy before returning it.
  - Actions typically handled through a switch statement switching on the action type.
  - Return the previous state in the default case.

### Splitting and Combining Reducers

- Depending on the state shape ,fields and updates then could be decoupled:
  - Split the reducer into simple reducer functions that operate on only some of the fields
    - Manages parts/slices of the global state.
  - Combine the simpler functions to generate the overall state.
