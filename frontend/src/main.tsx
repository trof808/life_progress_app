import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { setDefaultOptions } from 'date-fns';
import ru from 'date-fns/locale/ru';

setDefaultOptions({ locale: ru });

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
