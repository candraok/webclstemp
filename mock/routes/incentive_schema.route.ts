import { Page, Route } from "playwright";

export async function mockIncentiveSchemas(page: Page, MockIncentiveResponse: object, statusCode: number = 200): Promise<void> {
    await page.route('**/api/incentives/v1/schemas', (route: Route) => {
        route.fulfill({
            status: statusCode,
            body: JSON.stringify(MockIncentiveResponse),
        })
    })
}