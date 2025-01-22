import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';
import { ErrorBoundary } from './components/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
