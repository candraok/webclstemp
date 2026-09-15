import { EditWindow } from "./params/edit_window.param";
import { ConfigZone } from "../../enums/schema_config_zone.enum";
import { schemaPhase } from "../../enums/schema_phase.enum";

export const incentivePartialResponse: EditWindow = {
    calc_runs_on: "2026-09-02",
    config_zone: ConfigZone.olderPast,
    is_privileged_user: true,
    locks_on: "2026-09-04",
    phase: schemaPhase.beforeCalc
}