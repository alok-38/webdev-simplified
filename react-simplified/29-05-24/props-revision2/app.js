const appElement = document.getElementById("app");

function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <input type="checkbox" checked={isComplete} />
      <label>{children}</label>
    </div>
  );
}

const root = ReactDOM.createRoot(appElement);
root.render(<TodoListItem isComplete={true}>Learn React</TodoListItem>);


// TodoListItem component
// Props: children = name, isComplete: boolean
// Checkbox (checked if complete)
// Label (children value)
