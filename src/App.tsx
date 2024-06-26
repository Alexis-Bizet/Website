import { Box } from '@mui/material'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  return (
      <Box sx={{ margin: 5, height:'100vh'}}>
        <Header />
        <Content />
      </Box>
  )
}

export default App
