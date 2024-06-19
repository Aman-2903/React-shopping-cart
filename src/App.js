//this is root component
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './component/Navigation'

const App = () => {
  return (
    <>
    <Router>
        <Navigation></Navigation>
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App