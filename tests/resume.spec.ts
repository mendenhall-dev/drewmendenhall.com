import {test, expect} from '@playwright/test'

test('has title', async ({page}) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Drew Mendenhall - Résumé')
  expect(page.getByRole('heading', {name: 'Drew Mendenhall'})).toBeDefined()
  expect(page.getByRole('link', {name: 'drew@mendenhall.io'})).toBeDefined()
  expect(page.getByRole('heading', {name: 'Experience'})).toBeDefined()
  expect(page.getByRole('heading', {name: 'Education'})).toBeDefined()
})

test('has section headings', async ({page}) => {
  await page.goto('/')

  expect(page.getByRole('heading', {name: 'Drew Mendenhall'})).toBeDefined()
  expect(page.getByRole('heading', {name: 'Experience'})).toBeDefined()
  expect(page.getByRole('heading', {name: 'Education'})).toBeDefined()
})

test('has context info', async ({page}) => {
  await page.goto('/')

  expect(page.getByRole('link', {name: 'drew@mendenhall.io'})).toBeDefined()
})

test.describe('screenshots', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')

    await page.waitForLoadState('networkidle')
  })

  test.describe('dark color scheme', () => {
    test.use({colorScheme: 'dark'})

    test('matches snapshot', async ({page}) => {
      expect(await page.screenshot()).toMatchSnapshot('resume-dark.png')
    })
  })

  test.describe('light color scheme', () => {
    test.use({colorScheme: 'light'})

    test('matches snapshot', async ({page}) => {
      expect(await page.screenshot()).toMatchSnapshot('resume-light.png')
    })
  })
})
