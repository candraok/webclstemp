import { test } from '@playwright/test';
import { LoginController } from '../../controller/login.controller';
import { IncentiveController } from '../../controller/incentive.controller';
import { variable } from '../../../resources/variables';
import { mockIncentiveSchemas } from '../../../mock/routes/incentive_schema.route';
// import { slabConfig } from '../../../mock/routes/slab_config.route';
// import { slabConfigBusiness1 } from '../../../mock/response/slab_config_B1.mock';
// import { incentiveSchemaBusiness2 } from '../../../mock/response/incentive_schema_B2.mock';
// import { incentiveSchemaBusiness1 } from '../../../mock/response/incentive_schema_B1.mock';
import { 
  // errorPartnerBusinessMappingNotFound, 
  errorInvalidBusinessCode, 
  // errorIncentivePointNotFound 
} from '../../../mock/response/incentive_schema_error.mock';

let loginController: LoginController;
let incentiveController: IncentiveController;

test.describe('Incentive Management', () => {
    test.beforeEach(async ({ page }) => {
      loginController = new LoginController(page);
      incentiveController = new IncentiveController(page);

      await mockIncentiveSchemas(page, errorInvalidBusinessCode, 404);
      await page.goto(variable.closioUrl);
    });

    test('Mock incentive schemas', async ({ page }) => {
      await loginController.login(variable.validPhoneNumber, variable.validPassword);

      await incentiveController.openManagementIncentive();
      await incentiveController.enterIncentiveType();

      await page.waitForTimeout(3600000);
    });
});



