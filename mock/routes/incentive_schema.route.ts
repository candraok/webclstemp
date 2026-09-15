import { Page, Route } from "playwright";
import { EditWindow } from "../response/params/edit_window.param";

export async function mockIncentiveSchemas(page: Page, MockIncentiveResponse: object, statusCode: number = 200): Promise<void> {
    await page.route('**/api/incentives/v1/schemas', (route: Route) => {
        route.fulfill({
            status: statusCode,
            body: JSON.stringify(MockIncentiveResponse),
        })
    })
}

export async function MockPartialIncentive(page: Page, editWindow: EditWindow): Promise<void> {
    await page.route('**/api/incentives/v1/schemas/*/configs/*', async (route: Route) => {
        if (route.request().method() !== 'GET') {
            await route.continue();
            return;
        }

        const response = await route.fetch();
        const jsonParsed = await response.json();

        jsonParsed.data.edit_window.calc_runs_on = editWindow.calc_runs_on;
        jsonParsed.data.edit_window.config_zone = editWindow.config_zone;
        jsonParsed.data.edit_window.is_privileged_user = editWindow.is_privileged_user;
        jsonParsed.data.edit_window.locks_on = editWindow.locks_on;
        jsonParsed.data.edit_window.phase = editWindow.phase;
        // jsonParsed.data.edit_window = null

        route.fulfill({
            json: jsonParsed
        })
    })
}