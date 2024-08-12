function Child({ title, type }) {
  return (
    <div>
      <input type={type} placeholder={title} />
    </div>
  );
}

export default Child;
