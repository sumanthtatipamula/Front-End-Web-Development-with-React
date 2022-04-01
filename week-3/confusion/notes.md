## Controlled Forms

---

### Forms

- Cohesive,effective and compelling data entry experience
- Extensively used in websites for login.
- HTML forms allows to include various form elements such as input, textarea, button, select
- These elements maintains their own state and update it based on user input.

### Controlled Components

- Make the React component control the form that it renders
  - Typing the form state to component state.
- Every state mutation will have an associated handler function.

## MVC Framework

---

- Design pattern is well documented solution to a recurring problem.
  - Also referred to as an architectural pattern.
- Software engineering pattern
  - isolation of domain logic from user interface
  - permits independent development,testing .
- Model
  - manages the behaviour and data of the application domain.
  - responds to the request form information about its state.
- view
  - renders the model into a form suitable for interaction,typically a user interface element.
  - multiple views can exist for a single model for different purposes
- Controller
  - receives user input and initiates response by making call on model
  - controller can also call view to change its state with latest data obtained from model

## Model View View-Model

- Descendent of MVC
- Sometimes called Model-Vew-Binder
- View model
  - Abstraction of the view that exposes public properties and commands
  - Declarative data binding.

## Flux Architecture

---

- React and MVC
  - Initially React was viewed as the V in MVC
  - Problems with MVC
    - Cascading flow of updates
    - race condition
- Unidirectional Data Flow
  - Action --> Dispatcher --> store --> view
  - modification is done by store only requests are sent to store using dispatcher.
  - views can be subscribed to dispatcher.
  - view can't directly update store they need to request store using action which inturn calls dispatcher

## Redux

---

- Predictable state container for javascript apps
- inspired by Flux,Elm,Immutable
- Redux can be used with angular, vue

### Principles of Redux

- Single source of truth.
  - Single state object tree within a single store.
- State is read-only(only getters, no setters)
  - Changes should only be done through actions.
- Changes are made with pure functions(reducers)
  - Takes previous state and action and return next state
  - No mutation of the previous state.
- Single store and single state tree enables powerful techniques
  - Logging -- since every time new state is returned instead of mutating existing state. we can keep track of states.
  - API handling
  - Undo/Redo
  - State persistence
  - "time travel debugging"

#### Redux Data Flow

- Uni - directional data flow
  - Store: Dispatch -> Reducer -> State. [ --> Reducer] --> view
  - view -> Action -> Store. --> view

#### REDUX Concepts

- state : stored in plain JS Object
- Action : plain js object with a type field that specifies how to change something in the state.
- Reducer: pure functions that take the current state and action and return a new state.

  - Update data immutability ( do not modify inputs)

- Redux Store
  - created using createStore()
  - Supplies
    - dispatch() -- states state update with provided action object
    - getState() - return the current stored state value
    - subscribe() : accepts a callback function that will be run every time an action is dispatched
  - connect() -- generated a wrapper "container" component that subscribes to the store.
    - Subscribe your app root with <Provider>
      - Takes the store as an attribute
      - makes store accessible to all connected components.
- React-Redux-Form
  - A versatile, fast and intuitive library for creating complex and performant forms in react and redux.
  - Form data stored in redux store in a model.
  - Validations support for form
- Local Form
  - Maps form model to local state of the component
  - Suitable when you don't need form data persistence across component mounting.unmounting.
