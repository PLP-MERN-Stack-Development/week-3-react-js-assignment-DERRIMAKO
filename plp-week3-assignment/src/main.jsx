import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext'; // ✅ Import ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ Wrap your app in ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
