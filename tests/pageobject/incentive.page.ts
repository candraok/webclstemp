import { Page } from "@playwright/test";

export class IncentiveElements {
    constructor (private page : Page) {}

    incentiveManagementButton(){
        return this.page.getByTestId('global-sidebar-incentiveManagementBtn');
    }

    incentiveTypeButton(){
        return this.page.getByTestId('global-sidebar-incentiveTypeLink');
    }
}