export const errorPartnerBusinessMappingNotFound = {
    "status": "error",
    "error_code": "PARTNER_BUSINESS_MAPPING_NOT_FOUND",
    "message": "Tidak ditemukan pemetaan bisnis aktif untuk mitra ini.",
    "details": {
        "upstream_error_code": "PARTNER_BUSINESS_MAPPING_NOT_FOUND",
        "upstream_message": "No active business mapping found for the partner.",
        "upstream_status": 404,
        "upstream_method": "get",
        "upstream_url": "https://dev-target-sales-ws2-apiprivate.japfacomfeed.co.id/api/incentives/v1/schemas",
        "upstream_network_code": "ERR_BAD_REQUEST"
    }
}

export const errorInvalidBusinessCode = {
    "status": "error",
    "error_code": "INVALID_BUSINESS_CODE",
    "message": "Kode bisnis tidak valid.",
    "details": {
        "upstream_error_code": "INVALID_BUSINESS_CODE",
        "upstream_message": "invalid business code",
        "upstream_status": 404,
        "upstream_method": "get",
        "upstream_url": "https://dev-target-sales-ws2-apiprivate.japfacomfeed.co.id/api/incentives/v1/schemas/d40eaa0a-49e8-4996-848d-1a0c2a1975cc/configs",
        "upstream_network_code": "ERR_BAD_REQUEST"
    }
}

export const errorIncentivePointNotFound = {
    "status": "error",
    "error_code": "INCENTIVE_POINT_NOT_FOUND",
    "message": "Poin insentif tidak ditemukan.",
    "details": {
        "upstream_error_code": "INCENTIVE_POINT_NOT_FOUND",
        "upstream_message": "Incentive point does not exist.",
        "upstream_status": 404,
        "upstream_method": "get",
        "upstream_url": "https://dev-target-sales-ws2-apiprivate.japfacomfeed.co.id/api/incentives/v1/incentive-points/10000000-0000-4000-8000-000000000111/slab-configs",
        "upstream_network_code": "ERR_BAD_REQUEST"
    }
}