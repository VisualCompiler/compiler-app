// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeScreen } from './Screens/HomeScreen'
import { PlaygroundScreen } from './Screens/PlaygroundScreen'
import { PlaygroundProvider } from './Providers/PlaygroundProvider'
import { ModalProvider } from './Providers/ModalProvider'

function App() {
  return (
    //
    <ModalProvider>
      <PlaygroundProvider>
        <BrowserRouter>
          {/* Use <Routes> to wrap all individual routes */}
          <Routes>
            {/* Pass a JSX element to the `element` prop */}
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/playground/:folderId/:fileId"
              element={<PlaygroundScreen />}
            />
          </Routes>
        </BrowserRouter>
      </PlaygroundProvider>
    </ModalProvider>
  )
}

export default App
