import { useState } from "react";
import "./App.css";
import image1 from "../src/assets/react.png";
import Parent from "./Components/Parent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Task 4</h1>
      <div className="card" style={{ paddingBottom: 100 }}>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>-</button>
      </div>
      <p>
        In React,<b> state</b> is a fundamental concept used to manage data that
        affects how a component renders and behaves. It represents the local
        data storage for a component, and it can change over time in response to
        user interactions or other events. State is Local Data: It is a set of
        data stored within a component that determines how that component should
        render and behave. State is Component-Specific: Each component can have
        its own state that manages its specific data and interactions.{" "}
        <b>State Updates Re-render the Component: </b> When the state changes,
        React automatically re-renders the component to reflect the new state in
        the user interface. using State: In functional components, you use the
        useState hook to define and manage state. In class components, you use
        this.state to define state and this.setState to update it. Updating
        State: Changing state with setState (in class components) or the state
        updater function returned by useState (in functional components) causes
        React to re-render the component with the new state.
      </p>
      <img
        src={image1}
        alt="react"
        style={{ width: 800, height: 400, marginBottom: 30 }}
      />
      <hr />
      <p>
        In React, <b>props</b> (short for properties) are{" "}
        <b>
          used to pass data and event handlers from a parent component to a
          child component.
        </b>{" "}
        They are a way to make components more reusable by allowing you to
        customize their behavior and appearance through external data. props are
        Read-Only meaning that a child component cannot modify the props it
        receives. They are meant to be immutable. Passed from Parent to Child:
        Props are used to pass data and functions from a parent component to one
        or more child components. Enable Reusability: By using props, you can
        create reusable components that can display different data or react to
        different events based on the props passed to them. How to Use Props to
        Pass Data Between Components Passing Props: You pass props to a child
        component by adding attributes to the component in the parent components
        JSX. Each attribute corresponds to a prop name and value. Receiving
        Props: The child component receives the props as an object. You can
        access these props within the child component and use them to render
        content or handle events
      </p>
      <hr />
      <Parent />
    </>
  );
}

export default App;
