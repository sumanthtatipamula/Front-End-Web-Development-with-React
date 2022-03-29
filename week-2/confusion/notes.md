## Component Types

---

- Presentation vs container
- skinny vs fat
- dumb vs smart
- stateless vs stateful

### Presentational Components

---

- Mainly Concerned with rendering the view
- Render the view based on the data that is passed to them in props
- Do not maintain their own local state
  - Can be relaxed to maintain only UI state than data.

### Container Components

---

- Responsible for making things work
  - Data fetching, state updates.
- Make use of presentational components for rendering.
  - can wrap presentational components in wrapping divs
- Provide data to presentational components
- Maintain state and communicate with data sources.

## Updating LifeCycle methods.

---

- Called when a component is being re-rendered
  - Can be caused be changes to props or state.
  - getDerivedStateFromProps()
  - shouldComponentUpdate() -- return boolean variable.
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate() -- invoked when component is updated.

## React Virtual DOM

---

- React uses a virtual DOM
  - A light weight representation of the browser DOM
  - in memory tree data structure of plains JS objects
- React does Virtual DOM Diffing and Re- rendering.
  - React does comparison of previous version of DOM and current version of modified DOM then figures out which components needs to be re rendered.

## Updating DOM.

---

- Diffing algorithm will detect those nodes that are changes.
  - Updates the entire subtree if diffing detects that two elements are of different types.
  - Using key you can hint child elements are stable.
    - No need to re-render where keys do not change.
- React Fiber : new reconciliation algorithm in React 16

## React Router

---

- Collection of navigational components
  - Enables navigation among views
  - Router components, route matching components and navigation components.
  - Uses a browser-based bookmarkable URLs as an instruction to navigate to a client-generated view in your web app.
    - can also pass along optional parameters.
- Install react-router-dom.
- eg: BrowserRouter
  - creates specialized history object
  - <HashRouter> if you are using a static file server
  - Enclose your app in BrowserRouter
- Route matching components : <Route> and <Switch>
  - <Switch> enables grouping together several routes.
  - <Redirect> enables te default route specification
- Navigation is supported through the <Link> and <NavLink> components.

## SPA(Single Page Applications)

---

- Browser --> Request Web Application --> Server --> Send Web app and Assets --> User clicks on link, new Request --> Server --> Response with JSON data.
- No need to reload the entire page.
- UX like a desktop/native application
- Most resources are retrieved with a single page load
- Redraw parts of the page when needed without requiring a full sever round trip.

### Challenges

- Not optimized for Search engine optimization.
- Partitioning the responsibility between client and server.
- Maintain History( What will be done when user clicks on back button)
- How do you support analytics.
- Speeding up the initial page load

## React Router

---

- Paths specified as a URL
- Path can also carry parameter values:
  - eg: /menu/42
- Route parameters specified in the path specification as a token
  - eg: path 'menu/:id' where id is the token

### Route Parameters

- Route parameters can be specified using a link parameter
  - <Link to{`/menu/${dish.id}`}>
- Route passes three props to the component:
  - match,location,history
- match object:
  - match object provides information about how a <Route path> matched the URL
  - eg: /menu/42 specified as /menu/:id then match.params.id = 42
