import { ConfigZone } from "../../../enums/schema_config_zone.enum";
import { schemaPhase } from "../../../enums/schema_phase.enum";

export type EditWindow = {
  calc_runs_on: string;
  config_zone: ConfigZone;
  is_privileged_user: boolean;
  locks_on: string;
  phase: schemaPhase;
};