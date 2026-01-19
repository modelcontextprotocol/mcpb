#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "example-npx-mcp",
  version: "1.0.0"
});

server.tool(
  "hello",
  "Returns a greeting message",
  {
    name: {
      type: "string",
      description: "Name to greet"
    }
  },
  async ({ name }) => ({
    content: [{ type: "text", text: `Hello, ${name || "World"}!` }]
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
