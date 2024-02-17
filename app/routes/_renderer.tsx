import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="https://unpkg.com/chota@latest" />

        <Script src="/app/client.ts" />
        <Style />
      </head>
      <body class="container">
        <nav class="nav">
          <div class="nav-left">
            <a class="brand" href="/">
              😇
            </a>
          </div>
          <div class="nav-center">
            <div class="tabs">
              <a href="/">Home</a>
              <a href="/todo">Todo</a>
            </div>
          </div>
        </nav>
        <main style="margin-top:5em;">{children}</main>
      </body>
    </html>
  );
});
