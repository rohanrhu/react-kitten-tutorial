---
type: lesson
title: Window
focus: /src/MyWindow.tsx
slug: window
---

# Window

`Window` is the feature-rich window component in Kitten.

Kitten components including `Window` are React-ish and follow React's declarative programming model; so you can easily create and manage windows in your application.

Everything is a state in Kitten, so `Window` is a stateful component that you can control with props.

Let's make a custom window component with `Window`.

We'll work on the `MyWindow.tsx` file for this.

> **Note** `Window` and `BasicWindow` components can be placed in anywhere in the component tree. They don't need to be direct children of the `Space` component. You can also have nested `Window` components.

## Custom Window Component

```tsx
function MyWindow() {
  const [id] = useKittenId()
  const [position, setPosition] = usePosition([100, 50])
  const [size, setSize] = useSize([400, 300])
  const [opened, setOpened] = useState(true)
  const [staged, setStaged] = useState(false)

  return opened ? <Window
    kittenId={id}
    position={position}
    size={size}
    staged={staged}
    onStagedChange={setStaged}
    onPositionChange={setPosition}
    onSizeChange={setSize}
  >
    <TitleBar onMove={setPosition}>
        <Buttons>
          <CloseButton onClick={() => setOpened(false)} />
          <StageButton onClick={() => setStaged(!staged)} />
        </Buttons>
        <Title>Hello Kitty 🐈</Title>
    </TitleBar>
    <Content>
      <div style={{ padding: 25 }}>
        <p>A cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</p>
      </div>
    </Content>
  </Window>: null
}
```

`MyWindow` is a custom window component that uses `Window` and its sub-components like `TitleBar`, `Buttons`, `CloseButton`, `StageButton`, `Title`, and `Content`.

`Window` takes props like `kittenId`, `position`, `size`, `staged`, and children node, so you don't need to deal with state management for simple use cases.

**Important:** `kittenId` prop is a unique identifier for the window. It is required for the window to work properly.

## `kittenId` Prop

`kittenId` is a unique identifier for the window. It is required for the window to work properly.

You can use the `useKittenId` hook to set the `kittenId`.

Define the `id` state with the `useKittenId` hook:

```tsx
const [id] = useKittenId()
```

Then, pass the `id` state to the `kittenId` prop:

```tsx
<Window kittenId={id} ... />
```

---

Congratulations! 🥳 You've created a custom window component with `Window`.

---

## API Reference

### `Window` Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `children` | `React.ReactNode` | | Accepts any component as children and also accepts `TitleBar` and `Content` components inside |
| `kittenId` | `useKittenId(): [number]` | | Unique identifier for the window. |
| `size` | `useSize([number, number]): [number, number]` | | Size of the window |
| `position` | `usePosition([number, number] \| 'auto' \| 'random'): [number, number]` | | Position of the window |
| `minSize?` | `number \| null` | `null` | Minimum size of the window |
| `maxSize?` | `number \| null` | `null` | Maximum size of the window |
| `staged?` | `bool` | `false`` | If the window is staged |
| `resizable?` | `bool` | `true`` | If the window is resizable |
| `resizerThreshold?` | `number` | `25` | Threshold for showing the resizers |
| `stagingDistance?` | `number` | `150` | Distance for staging the window |
| `stagedSize?` | `[number, number] \| [number, null] \| [null, number]` | `[100, 120]` | Size of the staged window (Has different behaviors for all types) |
| `allowOutside?` | `bool` | `true` | If the window can go outside of the manager |
| `compensatePositionOnViewportResize?` | `bool` | `true` | When the viewport is resized, the window will be repositioned to fit inside the manager |
| `onStagedChange` | `(staged: boolean) => void` | `() => {}` | Callback for staged change |
| `onSizeChange` | `(size: [number, number])` | `() => {}` | Callback for size change |
| `onPositionChange` | `(position: [number, number])` | `() => {}` | Callback for position change |
| `onMoveStart` | `() => {}` | `() => {}` | Callback for move start |
| `onMoveEnd` | `() => {}` | `() => {}` | Callback for move end |

## Hooks for `Window`

Kitten provides hooks for setting the window's properties.

### `useKittenId()`

`useKittenId` is a hook for setting the unique identifier for the window.

```tsx
const [id] = useKittenId()
```

### `usePosition(initial_position: [number, number] | 'random' | 'auto')`

`usePosition` is a hook for setting the initial position of the window.

```tsx
const [position, setPosition] = usePosition([100, 50])
```

If you set the position to `'random'`, the window will be placed randomly on the screen.

```tsx
const [position, setPosition] = usePosition('random')
```

If you set the position to `'auto'`, the window will be placed automatically on the screen.

```tsx
const [position, setPosition] = usePosition('auto')
```

Automatically placed windows are positioned in a cascading manner.

### `useSize(initial_size: [number, number])`

`useSize` is a hook for setting the initial size of the window.

```tsx
const [size, setSize] = useSize([400, 300])
```
