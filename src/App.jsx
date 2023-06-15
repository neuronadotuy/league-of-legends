import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import Searchbar from './components/Searchbar'

import useChampions from './hooks/useChampions'
import Grid from './components/Grid'


function App() {

  return (
      <ThemeProvider theme={theme}>
        <div className="background">
          <Searchbar/>
          <Grid />
        </div>
      </ThemeProvider>
  )
  
}

export default App
