# Future AGI — VS Code MCP Extension

Connect VS Code to the [Future AGI](https://futureagi.com) platform via the Model Context Protocol (MCP).

## What it does

This extension registers the Future AGI MCP server with VS Code, enabling natural language interaction with:

- **Evaluations** — Run, compare, and analyze LLM evaluations
- **Datasets** — Create, manage, and query datasets
- **Observability** — Search traces, spans, and error analysis
- **Prompt Optimization** — Optimize prompts using various algorithms
- **Agents & Simulation** — Manage agents, scenarios, and test runs
- **Annotations** — Human annotation tasks and review workflows

## Setup

1. Install the extension from the VS Code Marketplace
2. Open GitHub Copilot Chat and the Future AGI MCP tools will be available
3. OAuth login opens in your browser automatically — no API keys needed

## Manual configuration

Alternatively, add to `.vscode/settings.json`:

```json
{
  "mcp.servers": {
    "futureagi": {
      "type": "http",
      "url": "https://api.futureagi.com/mcp"
    }
  }
}
```

## Links

- [Documentation](https://docs.futureagi.com/docs/quickstart/setup-mcp-server)
- [Website](https://futureagi.com)
