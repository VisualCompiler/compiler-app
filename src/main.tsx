import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialize CompilerLogic module
function initializeCompiler() {
  return new Promise<void>((resolve) => {
    const checkCompiler = () => {
      if ((window as any).CompilerLogic?.JsonExport) {
        console.log('CompilerLogic initialized successfully');
        resolve();
      } else {
        setTimeout(checkCompiler, 100);
      }
    };
    checkCompiler();
  });
}

// Initialize compiler before rendering the app
initializeCompiler().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
