## Component Types

- Presentation vs container
- skinny vs fat
- dumb vs smart
- stateless vs stateful

### Presentational Components

- Mainly Concerned with rendering the view
- Render the view based on the data that is passed to them in props
- Do not maintain their own local state
  - Can be relaxed to maintain only UI state than data.

### Container Components

- Responsible for making things work
  - Data fetching, state updates.
- Make use of presentational components for rendering.
  - can wrap presentational components in wrapping divs
- Provide data to presentational components
- Maintain state and communicate with data sources.

## Updating LifeCycle methods.

- Called when a component is being re-rendered
  - Can be caused be changes to props or state.
  - getDerivedStateFromProps()
  - shouldComponentUpdate() -- return boolean variable.
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate() -- invoked when component is updated.

## React Virtual DOM

- React uses a virtual DOM
  - A light weight representation of the browser DOM
  - in memory tree data structure of plains JS objects
- React does Virtual DOM Diffing and Re- rendering.
  - React does comparison of previous version of DOM and current version of modified DOM then figures out which components needs to be re rendered.

## Updating DOM.

- Diffing algorithm will detect those nodes that are changes.
  - Updates the entire subtree if diffing detects that two elements are of different types.
  - Using key you can hint child elements are stable.
    - No need to re-render where keys do not change.
- React Fiber : new reconcilaion algorithm in React 16
  - Incremental rendering.
