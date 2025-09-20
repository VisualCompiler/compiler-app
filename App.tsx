// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeScreen } from '../src/Screens/HomeScreen'
import { PlaygroundScreen } from '../src/Screens/PlaygroundScreen'
import { PlaygroundProvider } from '../src/Providers/PlaygroundProvider'
import { ModalProvider } from '../src/Providers/ModalProvider'
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
          <BrowserRouter basename="/compiler-app">
            <Routes>
              <Route path="/" element={<PlaygroundScreen />} />
              <Route
                path="/playground/:folderId/:fileId"
                element={<PlaygroundScreen />}
              />
              <Route path="/Home" element={<HomeScreen />} />
            </Routes>
          </BrowserRouter>
        </PlaygroundProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
