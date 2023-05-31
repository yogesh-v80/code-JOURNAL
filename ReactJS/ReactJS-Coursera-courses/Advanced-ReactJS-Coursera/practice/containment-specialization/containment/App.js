function Button(props) {
  return (
    <button className={props.className}>
      {props.children}
    </button>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

function App() {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Button className="primary">Submit</Button>
      </Form>
    </div>
  );
}



In this example, the Button component
 is contained within the Form component, 
 which is contained within the App component.