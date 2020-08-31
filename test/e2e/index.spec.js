import { resolve } from 'path'
import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
// import { JSDOM } from 'jsdom'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
test.before(async () => {
  const config = {
    dev: false,
    rootDir: resolve(__dirname, '../../'),
  }
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
}, 30000)

// Example of testing Route / exits and contains html
test('Route / exits and contains html', async (t) => {
  // const { html, error, redirected } = await nuxt.renderRoute('/')
  //   const context = {}
  //   const { html } = await nuxt.renderRoute('/', context)

  //   const { window } = new JSDOM(html).window
  //   const element = window.document.querySelector('h2')
  //   t.not(element, null)
  //   t.is(element.textContent, 'customer')
  const window = await nuxt.renderAndGetWindow('http://localhost:4000')
  t.truthy(window.document.getElementsByTagName('h2')[0].contains('Customer'))
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', (_) => {
  nuxt.close()
})
