 
// react 
// various way to render root element in ReactJS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);








 class App extends React.Component {
        render() {
          return <h1>Hello world!</h1>
        }
      }

 ReactDOM.render(<App />, document.getElementById('root'))








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, react world!</h1>);









const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
