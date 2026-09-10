import { expect, Page } from "playwright/test";
import { IncentiveElements } from '../pageobject/incentive.page';

export class IncentiveController {
    private incentiveElements: IncentiveElements;

    constructor(page: Page) {
        this.incentiveElements = new IncentiveElements(page);
    }

    async openManagementIncentive(): Promise<void> {
        await this.incentiveElements.incentiveManagementButton().click();
    }

    async enterIncentiveType(): Promise<void> {
        await this.incentiveElements.incentiveTypeButton().click();
    }
}