import { test, expect } from 'playwright/test';

const viewports = [
  { name: 'desktop', width: 1280, height: 820 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
] as const;

type Rect = { x: number; y: number; width: number; height: number };

test.describe('header layering vs hero CTA', () => {
  for (const viewport of viewports) {
    test(`hero primary CTA stays visible/clickable on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      const header = page.getByTestId('site-header');
      const heroCta = page.getByTestId('hero-primary-cta');

      await expect(header).toBeVisible();
      await expect(heroCta).toBeVisible();

      const headerRect = (await header.boundingBox()) as Rect;
      const ctaRect = (await heroCta.boundingBox()) as Rect;
      const headerBottom = headerRect.y + headerRect.height;

      expect(ctaRect.y, 'CTA should render below sticky header').toBeGreaterThanOrEqual(headerBottom - 1);

      const clickTargetIsCTA = await page.evaluate(() => {
        const cta = document.querySelector('[data-testid="hero-primary-cta"]');
        if (!cta) return false;
        const rect = cta.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const topElement = document.elementFromPoint(centerX, centerY);
        return !!topElement && (topElement === cta || cta.contains(topElement));
      });

      expect(clickTargetIsCTA, 'CTA center point should not be covered by header/overlay').toBe(true);
      await expect(heroCta).toHaveAttribute('href', /tel:\+13033283356/);
      await heroCta.click();
    });
  }
});
