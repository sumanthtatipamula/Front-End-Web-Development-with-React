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

### Redux Thunk

---

- Provides the capability to run code after an action is dispatched but before it reaches the reducer.
  - Third Party extension point
  - logging,async api calls
- MiddleWare:
  - Forms pipeline that wraps around the dispatch
  - Pass actions onward
  - Access the store state.
- Middleware Used for:
  - Inspecting the actions
  - Modifying actions
  - Stop actions from reaching the reducers.
- applyMiddleware() function
  - sets up the middleware pipeline.
  - returns a "store enhancer" that is passed to create store

### Thunk

---

- InProgramming , a thunk is a subroutine used to inject an additional calculation in another subroutine.

  - Delay a calculation until its result is needed.
  - Insert operations at the beginning ot end of the subroutine.

- Middleware that allows you to write action creators that return a function instead of an action
  - Can be used to delay the dispatch of an action or
  - Dispatch only if a certain condition is met
- Inner function receives the dispatch() and getState() store methods.

- Useful for complex synchronous logic
  - Multiple dispatches
  - conditional dispatches
  - Simple async logic
- Redux Saga : Uses Es6 generators to control pauseable functions
  - complex async logic
  - Ongoing "background thread" like processing behavior

## Web Services

- A system designed to support interoperability of systems connect across
  - Service oriented architecture.
- Two common approaches used in practice:
  - Soap
  - Rest

### Rest

- A style of software architecture for distributed hypermedia systems such as the world wide web.
- Introduced in 1995 by Tim Berners-Lee.
- Four Basic principles
  - Use http methods explicitly
  - Expose directory structure like URIs
  - Stateless
- Rest Concepts :
  - Nouns: represent resources (unconstrained)
    - Represented with a global identifier
    - Rest uses URIs to identify resources
    - Directory structure to identify resources.
  - Verbs: GET,PUT,POST(CONSTRAINED)
    - GET - READ
    - POST - CREATE
    - PUT - UPDATE
    - DELETE - DELETE
  - Representations: XML,JSON(constrained)

### Stateless Server

- Server side should not track the client state:
  - Every request is a new request from the client.
- Client side should track its own state:
  - Eg: Using cookies
  - client-side MVC setup

## JSON Server

- commands :
  - npm install -g json-server
  - json-server --watch db.json -d 2000 -p 3001
  - here d means delay in sending data from json server
  - p mean to port server should listen to
