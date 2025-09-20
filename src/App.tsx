// App.js

import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomeScreen } from './Screens/HomeScreen'
import { PlaygroundScreen } from './Screens/PlaygroundScreen'
import { PlaygroundProvider } from './Providers/PlaygroundProvider'
import { ModalProvider } from './Providers/ModalProvider'
import { ThemeProvider } from 'next-themes'

function App() {
  return (
    //
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ModalProvider>
        <PlaygroundProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<PlaygroundScreen />} />
              <Route
                path="/playground/:folderId/:fileId"
                element={<PlaygroundScreen />}
              />
              <Route path="/Home" element={<HomeScreen />} />
            </Routes>
          </HashRouter>
        </PlaygroundProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
