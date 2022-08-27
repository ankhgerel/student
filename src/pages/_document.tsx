import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Disable IE */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) {
                  window.location = 'microsoft-edge:' + window.location;
                  setTimeout(function() {
                    window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
                  }, 1);
                }
						    `,
            }}
          />
          <noscript>This website requires JavaScript to be enabled.</noscript>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
