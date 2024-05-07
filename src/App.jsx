import "./styles/style.css";
// We import other components to be able to use them inside of this component
import MainFrame from "./components/MainFrame/MainFrame";

function App() {
  return (
    <MainFrame/>
  );
}

export default App;

// App.jsx is a React component. A React component holds UI,
// logic, and data, all in one place.
// Function App is the initial component, always created first in a React app,
// and serves as a parent for all other content and React components.
// ::: :point_up: We call App a root component, as it represents the root of the
// React application rendered to the DOM. :::

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
