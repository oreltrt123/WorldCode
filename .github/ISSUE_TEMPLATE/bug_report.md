---
name: Bug report
about: Create a report to help us improve
title: "[BUG]"
labels: bug, duplicate, invalid
assignees: Gerome-Elassaad

---

name: Bug Report
about: Create a report to help us improve CodinIT
title: '[BUG] '
labels: bug
assignees: ''

body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report! Please provide as much detail as possible to help us resolve the issue quickly.

  - type: textarea
    id: bug-description
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is.
      placeholder: Tell us what happened!
    validations:
      required: true

  - type: dropdown
    id: component
    attributes:
      label: Component
      description: Which part of CodinIT.dev is affected?
      options:
        - File Upload
        - Code Generation
        - Sandbox Execution
        - Chat Interface
        - Authentication
        - Templates
        - Settings
        - Preview/Output
        - Other
    validations:
      required: true

  - type: dropdown
    id: ai-provider
    attributes:
      label: AI Provider
      description: Which AI provider were you using when the bug occurred?
      options:
        - Claude (Anthropic)
        - OpenAI (GPT-4)
        - Google AI (Gemini)
        - Mistral
        - Fireworks
        - Ollama (Local)
        - Other
        - Not applicable

  - type: dropdown
    id: template
    attributes:
      label: Template Used
      description: Which template were you working with?
      options:
        - Auto-detect
        - Next.js Developer
        - Vue Developer
        - Streamlit Developer
        - Gradio Developer
        - Code Interpreter
        - CodinIT.dev Engineer
        - Custom Template
        - Not applicable

  - type: textarea
    id: reproduction-steps
    attributes:
      label: Steps to Reproduce
      description: Please provide detailed steps to reproduce the behavior
      placeholder: |
        1. Go to '...'
        2. Upload files '...'
        3. Enter prompt '...'
        4. Click on '...'
        5. See error
    validations:
      required: true

  - type: textarea
    id: expected-behavior
    attributes:
      label: Expected Behavior
      description: A clear and concise description of what you expected to happen.
      placeholder: What should have happened instead?
    validations:
      required: true

  - type: textarea
    id: actual-behavior
    attributes:
      label: Actual Behavior
      description: What actually happened? Include any error messages.
      placeholder: What actually happened? Include any error messages you saw.

  - type: textarea
    id: file-context
    attributes:
      label: File Upload Context
      description: If the bug involves file uploads, please provide details
      placeholder: |
        - File types uploaded: (e.g., .js, .tsx, .py)
        - Number of files: 
        - Total file size: 
        - File structure complexity:

  - type: textarea
    id: console-logs
    attributes:
      label: Console Logs/Error Messages
      description: Please paste any relevant console logs or error messages
      placeholder: Paste console output here (open browser dev tools > Console tab)
      render: shell

  - type: textarea
    id: network-errors
    attributes:
      label: Network/API Errors
      description: Any network errors from browser dev tools (Network tab)
      placeholder: Check browser dev tools > Network tab for failed requests
      render: shell

  - type: checkboxes
    id: authentication
    attributes:
      label: Authentication Status
      description: Were you logged in when this occurred?
      options:
        - label: I was logged in
        - label: I was using the app without authentication
        - label: The bug occurred during login/logout

  - type: textarea
    id: browser-info
    attributes:
      label: Browser Environment
      description: Please complete the following information
      placeholder: |
        - OS: [e.g. macOS 14.0, Windows 11, Ubuntu 22.04]
        - Browser: [e.g. Chrome, Firefox, Safari, Edge]
        - Browser Version: [e.g. 120.0.6099.234]
        - Screen Resolution: [e.g. 1920x1080]
        - Viewport Size: [e.g. Desktop, Mobile, Tablet]
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots/Videos
      description: If applicable, add screenshots or screen recordings to help explain your problem
      placeholder: Drag and drop images here, or paste image URLs

  - type: textarea
    id: user-prompt
    attributes:
      label: User Prompt (if applicable)
      description: If the bug occurred during code generation, what was your prompt?
      placeholder: Share the prompt you used that triggered the issue (remove any sensitive information)

  - type: textarea
    id: generated-code
    attributes:
      label: Generated Code Sample (if applicable)
      description: If relevant, share a sample of the problematic generated code
      placeholder: Share relevant code snippets (remove any sensitive information)
      render: javascript

  - type: dropdown
    id: severity
    attributes:
      label: Bug Severity
      description: How severe is this bug?
      options:
        - Critical (App unusable)
        - High (Major feature broken)
        - Medium (Feature partially broken)
        - Low (Minor issue/cosmetic)
    validations:
      required: true

  - type: checkboxes
    id: reproducibility
    attributes:
      label: Reproducibility
      description: How often does this bug occur?
      options:
        - label: Always (100%)
        - label: Often (75%+)
        - label: Sometimes (25-75%)
        - label: Rarely (<25%)
        - label: Only happened once

  - type: textarea
    id: additional-context
    attributes:
      label: Additional Context
      description: Add any other context about the problem here
      placeholder: |
        - Any workarounds you found?
        - Related issues or patterns you noticed?
        - Specific use case or workflow?
        - Any other relevant information?

  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our Code of Conduct
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
