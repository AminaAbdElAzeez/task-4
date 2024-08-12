import Child from "./Child";

function Parent() {
  return (
    <div>
      <Child type="text" title="Name*" />
      <Child type="password" title="Password*" />
      <Child type="email" title="Email*" />
    </div>
  );
}

export default Parent;
