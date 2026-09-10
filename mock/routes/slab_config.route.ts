import { Page, Route } from "playwright";

export async function slabConfig(page: Page, MockIncentiveResponse: object, statusCode: number = 200): Promise<void> {
    await page.route('**/api/incentives/v1/incentive-points/*/slab-configs?page=1&limit=20', (route: Route) => {
        route.fulfill({
            status: statusCode,
            body: JSON.stringify(MockIncentiveResponse),
        })
    })
}