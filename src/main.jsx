import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import { createTheme, ThemeProvider } from '@mui/material/styles'

// const theme = createTheme({
//   palette: {
//     primary :{
//       main : "ae13e87"
//     },
//     secondary:{
//       main: "s2e74c9"
//     }

//   }
// })


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
 </BrowserRouter>
)
