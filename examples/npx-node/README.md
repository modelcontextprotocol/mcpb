# npm + npx Node.js Example

This example demonstrates using `npx` to run an npm-published MCP server instead of bundling dependencies.

## Benefits

- **Tiny bundles**: ~10 KB instead of 50-300 MB
- **Automatic updates**: Users always get the latest npm version
- **Zero maintenance**: No need to rebuild bundles for updates

## How It Works

The manifest uses `npx` as the command:

```json
"mcp_config": {
  "command": "npx",
  "args": ["-y", "--package=example-npx-mcp", "example-npx-mcp"]
}
```

On first launch, npx downloads the package from npm. Subsequent launches use the cached version.

## Requirements

- Package must be published to npm with a `bin` entry
- Claude for macOS and Windows (ships with npx built-in)

## Testing

```bash
mcpb validate manifest.json
mcpb pack .
```
