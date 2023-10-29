import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import ReactDOM from 'react-dom/client'
import Routes from 'routes'

import * as Containers from 'containers'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

console.log("env filelani ko'rish", process.env)

root.render(
  <BrowserRouter>
    <Containers.Auth>
      <MantineProvider withNormalizeCSS>
        <Routes />
        <Notifications position="top-right" />
      </MantineProvider>
    </Containers.Auth>
  </BrowserRouter>
)
