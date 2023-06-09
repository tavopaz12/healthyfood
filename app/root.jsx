import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import stylesheet from '~/styles/global.css'
import resetCss from '~/styles/reset.css'

export const links = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: resetCss }
]

export default function App () {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
