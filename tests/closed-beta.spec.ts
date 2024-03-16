import { expect, test } from '@playwright/test'

test.describe('cryptogram tests', () => {
  test('should show a link for how to join the beta', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    expect(await page.getByText('Please use the link provided')).toHaveText(
      'Please use the link provided to you, or click the link below to get beta access.Get my link!'
    )

    await page.getByRole('link', { name: 'Get my link!' }).click()
    expect(
      await page.getByRole('heading', { name: 'Sign in to continue' })
    ).toHaveText('Sign in to continue')
  })
})
