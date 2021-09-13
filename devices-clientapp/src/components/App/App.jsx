import DevicesPageFull from '../pages/DevicesPageFull/DevicePageFull'
import Theme from '../../theme'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={Theme}>
    <DevicesPageFull />
  </ThemeProvider>
)

export default App
