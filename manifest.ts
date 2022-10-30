import { Manifest } from "deno-slack-sdk/mod.ts";
import { CreateTimeOffRequestWorkflow } from "./workflows/CreateTimeOffRequestWorkflow.ts";
import { SendTimeOffRequestToManagerFunction } from "./functions/send_time_off_request_to_manager/definition.ts";

export default Manifest({
  name: "CF Approve",
  description: "Approval request for CF Team",
  icon: "assets/icon.png",
  workflows: [CreateTimeOffRequestWorkflow],
  functions: [SendTimeOffRequestToManagerFunction],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
  ],
});
