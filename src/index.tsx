import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import 'shared/config/i18n/i18n';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { ErrorPage } from 'widgets/ErrorPage';
import './app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorPage error={error} resetErrorBoundary={resetErrorBoundary} />
        )}
      >
        <ThemeProvider>
          <Suspense fallback={<PageLoader />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
