// import React from 'react'
// import {renderToString} from 'react-dom/server'
// import puppeteer from 'puppeteer'
//
// import Resume from './src/pages'

import path from 'path'
import {chromium} from 'playwright-core'
import {readFileSync} from 'fs'

// const renderHtml = async () => {
//   // if (__DEV__) css = generateCSS()
//
//   return (
//     `
//     <!doctype html>
//     <html lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <title>
//           Resume - Drew Mendenhall
//         </title>
//         <meta name="viewport" content="width=device-width,initial-scale=1" />
//       </head>
//       <body>
//   ` +
//     renderToString(React.createElement(Resume)) +
//     `
//       </body>
//     </html>
//   `
//   ).replace(/\n\s*/g, '')
// }
const renderPdf = async ({filename, html}) => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  try {
    await page.setContent(html)
    await page.pdf({
      path: filename,
      format: 'Letter',
      margin: {
        top: '1in',
        bottom: '1in',
        left: '1in',
        right: '1in',
      },
    })
  } finally {
    await browser.close()
  }
}

const render = async () => {
  // await renderHtml()
  await renderPdf({
    filename: './out/drew-mendenhall-resume.pdf',
    html: readFileSync('./out/index.html', 'utf8').replace(
      /url\(((?!data:).+?)\)/g,
      (match, url) =>
        `url(data:;base64,${readFileSync(
          path.join('./out', url),
          'base64',
        )})`,
    ),
  })
}

render()
// export default render
