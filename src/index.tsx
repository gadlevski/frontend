import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import 'shared/config/i18n/i18n';
import { ErrorPage } from 'widgets/ErrorPage';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import './app/styles/index.scss';

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
