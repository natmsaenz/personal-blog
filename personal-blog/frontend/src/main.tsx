
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home.tsx'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
  <Home />
  </BrowserRouter>,
  document.getElementById('root')
)
