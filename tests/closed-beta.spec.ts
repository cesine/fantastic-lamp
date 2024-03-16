import { expect, test } from '@playwright/test'

test.describe('cryptogram tests', () => {
  test('should show a link for how to join the beta', async ({
    page,
    isMobile,
  }) => {
    await page.goto('/')

    expect(await page.getByText('Please use the link provided')).toHaveText(
      'Please use the link provided to you, or click the link below to get beta access.Get my link!'
    )

    await page.getByRole('link', { name: 'Get my link!' }).click()

    // Mobile devices will use an intent instead of a link, so only test the link on desktop
    if (!isMobile) {
      expect(
        await page.getByRole('heading', { name: 'Sign in to continue' })
      ).toHaveText('Sign in to continue')
    }
  })
})
