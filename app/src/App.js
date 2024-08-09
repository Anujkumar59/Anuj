// import logo from './logo.svg';
import About from './about';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './home';
import './App.css';

const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
])

function App() {

  const getUser =async() => {
    let res = await fetch("https://reqres.in/api/users");
    let serverRes = await res.json();
    console.log(serverRes['data'])

  }
  return (
    <div>
      {/* <RouterProvider config={config}/> */}

      <Home/>
      <About/>

      <button onClick={getUser}>Click to get user list </button>

    </div>
  );
}


export default App;