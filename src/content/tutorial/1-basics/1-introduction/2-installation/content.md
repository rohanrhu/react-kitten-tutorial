---
type: lesson
title: Installation
focus: /src/App.tsx
slug: installation
---

# Install React﹤Kitten﹥

React﹤Kitten﹥ is easy to install and use. In this lesson, we will show you how to install React﹤Kitten﹥ and create your first app.

```bash
npm install react-kitten
```

and you are ready to go!

## Importing Kitten Components and Hooks

To use React﹤Kitten﹥ components and hooks, you need to import them from the `react-kitten` package. Here is an example:

```tsx
import {
  /* Desktop Management */
  Manager, Spaces, Space,
  /* Window Management */
  Window, BasicWindow, TitleBar, Title,
  Buttons, StageButton, CloseButton, Content,
  /* Hooks */
  usePosition, useSize, useKittenId
} from 'react-kitten'
```
