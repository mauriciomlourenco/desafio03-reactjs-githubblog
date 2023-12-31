import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pr-br');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
