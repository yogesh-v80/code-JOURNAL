import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./App"


// const root = React.createElement(document.getElementById('root'))

// root.render(<App />)


// ReactDOM.render( < App />, document.getElementById("root"))

//newer way in React 18
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />)