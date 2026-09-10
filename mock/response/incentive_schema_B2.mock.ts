export const incentiveSchemaBusiness2 = {
  "status": "success",
  "data": {
    "schemas": [
      {
        "id": "d40eaa0a-49e8-4996-848d-1a0c2a1975cd",
        "schema_name": "activation_call_business_2",
        "description": "Qualified activated customers with 3-month sales lookback",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "threshold",
        "allowed_slab_types": [
          "value",
          "percentage"
        ],
        "applicable_salesperson_types": [
          "STO"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV ALL"
        ],
        "supervisor_has_target": false,
        "salesperson_has_target": false,
        "supervisor_has_own": false,
        "target_source_id": null,
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-07-28T07:27:18.562Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "f5ad2c81-203e-4363-aab2-506e5944b01a",
        "schema_name": "ageing_business_2",
        "description": "AR (0-10 days) / Total AR percentage at month-end",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "threshold",
        "allowed_slab_types": [
          "percentage"
        ],
        "applicable_salesperson_types": [
          "STO",
          "SFT",
          "SMO"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV FT",
          "SPV MO",
          "SPV ALL"
        ],
        "supervisor_has_target": false,
        "salesperson_has_target": false,
        "supervisor_has_own": true,
        "target_source_id": null,
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "cc52cfb2-dabe-41f5-bf7d-5d220c3a0203",
        "schema_name": "call_plan_business_2",
        "description": "Daily call plan completion incentive, summed monthly",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "threshold",
        "allowed_slab_types": [
          "value",
          "percentage"
        ],
        "applicable_salesperson_types": [
          "STO",
          "SFT"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV FT",
          "SPV ALL"
        ],
        "supervisor_has_target": false,
        "salesperson_has_target": true,
        "supervisor_has_own": false,
        "target_source_id": "7c425072-b4d7-4471-b516-9da15642542b",
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "80422331-9a8b-4cb8-886f-daefad051858",
        "schema_name": "jot_range_products_business_2",
        "description": "Customers per JOT product-group range, monthly",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "range",
        "allowed_slab_types": [
          "value"
        ],
        "applicable_salesperson_types": [
          "SMO"
        ],
        "applicable_supervisor_types": [
          "SPV MO"
        ],
        "supervisor_has_target": false,
        "salesperson_has_target": false,
        "supervisor_has_own": false,
        "target_source_id": null,
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "cfad6c3a-01e8-41e8-b15a-c153eeaeecee",
        "schema_name": "jot_single_product_business_2",
        "description": "Customers per distinct product count range, monthly",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "range",
        "allowed_slab_types": [
          "value"
        ],
        "applicable_salesperson_types": [
          "STO",
          "SFT"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV FT",
          "SPV ALL"
        ],
        "supervisor_has_target": false,
        "salesperson_has_target": false,
        "supervisor_has_own": false,
        "target_source_id": null,
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "77fbb28a-acb2-4997-8931-c10d48f00015",
        "schema_name": "monthly_revenue_business_2",
        "description": "Cumulative net revenue vs monthly target",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "threshold",
        "allowed_slab_types": [
          "value",
          "percentage"
        ],
        "applicable_salesperson_types": [
          "STO",
          "SFT",
          "SMO"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV FT",
          "SPV MO",
          "SPV ALL"
        ],
        "supervisor_has_target": true,
        "salesperson_has_target": true,
        "supervisor_has_own": true,
        "target_source_id": "df987f43-a613-473a-b7e2-888d627dc06b",
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "3778ddc3-e296-4b34-9645-978c74d3c916",
        "schema_name": "unique_transacting_customers_business_2",
        "description": "Monthly count of customers with net sales > 0",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "threshold",
        "allowed_slab_types": [
          "value",
          "percentage"
        ],
        "applicable_salesperson_types": [
          "STO",
          "SFT"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV FT",
          "SPV ALL"
        ],
        "supervisor_has_target": false,
        "salesperson_has_target": true,
        "supervisor_has_own": true,
        "target_source_id": "f48b4321-3f6e-4c4f-b4c1-c50620af4283",
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      },
      {
        "id": "726a76dd-238c-4879-b537-ec7165fc6a60",
        "schema_name": "weekly_revenue_business_2",
        "description": "Net revenue vs weekly target, summed monthly",
        "partner_id": "e3d8f926-a1bf-4890-9524-cc2d610152f7",
        "slab_structure": "threshold",
        "allowed_slab_types": [
          "value",
          "percentage"
        ],
        "applicable_salesperson_types": [
          "STO",
          "SFT",
          "SMO"
        ],
        "applicable_supervisor_types": [
          "SPV DRY",
          "SPV FT",
          "SPV MO",
          "SPV ALL"
        ],
        "supervisor_has_target": true,
        "salesperson_has_target": true,
        "supervisor_has_own": true,
        "target_source_id": "433eec31-1cd8-4af4-9ba4-5c6137809096",
        "created_at": "2026-06-02T12:45:35.210Z",
        "updated_at": "2026-06-02T12:45:35.210Z",
        "created_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "updated_by": "5032ce4d-a97d-4546-863d-bc5ca3bd469b",
        "business_code": "BUSINESS_2"
      }
    ],
    "edit_window": {
      "phase": "before_calc",
      "calc_runs_on": "2026-09-02",
      "locks_on": "2026-09-04",
      "is_privileged_user": true
    }
  }
}