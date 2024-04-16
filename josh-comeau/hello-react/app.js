const app = document.getElementById("app");

// Create a react element
const element = React.createElement(
    'p',
    { id: 'hello '},
    'Hello World'
);

const root = ReactDOM.createRoot(app);

// Render the application
root.render(element);