import './App.css';
import { getUser } from './services/requests'
import Sidebar from './components/Sidebar'
import Content from './containers/Content';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([])

  useEffect (() => {
    const getUserData = async() => {
      try{
        const { data } = await getUser()
        setUser(data)
      } catch(err) {
        console.err(err)
      }
    }
    getUserData()
  }, [])

  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
