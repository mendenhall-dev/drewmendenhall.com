// import React from 'react'
// import {renderToString} from 'react-dom/server'
// import puppeteer from 'puppeteer'
//
// import Resume from './src/pages'

const path = require('path')
const puppeteer = require('puppeteer')
const {readFileSync} = require('fs')

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
  const browser = await puppeteer.launch({
    // ...(!__DEV__ && {args: ['--no-sandbox', '--disable-setuid-sandbox']}),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // executablePath: config.chromiumExecutablePath,
  })
  const page = await browser.newPage()

  await page.goto(`data:text/html,${html}`)
  return page
    .pdf({
      path: filename,
      format: 'Letter',
      margin: {
        top: '1in',
        bottom: '1in',
        left: '1in',
        right: '1in',
      },
    })
    .finally(async content => {
      await browser.close()
      return content
    })
}

const render = async () => {
  // await renderHtml()
  await renderPdf({
    filename: './public/drew-mendenhall-resume.pdf',
    html: readFileSync('./public/index.html', 'utf8').replace(
      /url\(((?!data:).+?)\)/g,
      (match, url) =>
        `url(data:;base64,${readFileSync(
          path.join('./public', url),
          'base64',
        )})`,
    ),
  })
}

render()
// export default render
