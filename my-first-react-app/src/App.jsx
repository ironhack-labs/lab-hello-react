import './App.css';
import Head from './components/head/head';
import List from './components/list/list';

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Head />
        </div>
        <div className="body">
          <List />
        </div>
      </div>
    </>
  )
}

export default App
