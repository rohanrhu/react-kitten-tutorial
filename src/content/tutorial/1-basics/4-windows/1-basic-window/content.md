---
type: lesson
title: Basic Window
focus: /src/App.tsx
slug: basic-window
---

# Windows

Kitten is a Window Manager, has many Operating System's window-manager-like features like **resizing**, **moving**, **minimizing**, **opening/closing** windows and other window management fundamentals like dealing with **z-index** and **focusing** windows.

## Basic Window

`BasicWindow` is the most basic window component in Kitten. It provides a title, a close button, and a content area. It can be used to create simple windows.

`BasicWindow` takes props like `title`, `initialPosition`, `initialSize`, `opened`, and children node, so you don't need to deal with state management for simple use cases.

Let's start with a basic window. We'll create a window with a title, a close button, and a content area.

We'll work on the `Cat.tsx` file for this.

We'll add a `BasicWindow` component to the `Cat` component in our `Space` component.

```tsx
<BasicWindow
  title="What is a cat?"
  initialPosition={[100, 100]}
  initialSize={[400, 300]}
  onClose={() => alert('Window closed')}
>
  <div style={{ padding: 25 }}>
    <p>A cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</p>
  </div>
</BasicWindow>
```

Here is the full code:

```tsx
function App() {
  const [size, setSize] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ])
  const [space, setSpace] = useState(0)

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <Manager size={size}>
    <Spaces space={space} onSpaceChange={setSpace}>
      <Space>
        <BasicWindow
          title="What is a cat?"
          initialPosition={[100, 50]}
          initialSize={[400, 300]}
          onClose={() => alert('Cat window closed')}
        >
          <div style={{ padding: 25 }}>
            <p>A cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</p>
          </div>
        </BasicWindow>
      </Space>
    </Spaces>
  </Manager>
}
```

Every space can have multiple windows. You can add as many windows as you want to a space.

> **Note** `Window` and `BasicWindow` components can be placed in anywhere in the component tree. They don't need to be direct children of the `Space` component. You can also have nested `Window` components.

---

## API Reference

`BasicWindow` has some options that you can use to customize the window.

### `BasicWindow` Props

| Name | Type | Default |
| ---- | ---- | ------- |
| `children?` | `React.ReactNode` | `null` |
| `title?` | `string` | `''` |
| `initialSize?` | `[number, number]` | `[500, 400]` |
| `initialPosition?` | `[number, number] \| 'random' \| 'auto'` | `'auto'` |
| `opened?` | `boolean` | `true` |
| `onClose?` | `() => void \| undefined` | `undefined` |

---

Congratulations! 🥳 You've learned how to create windows with Kitten's `BasicWindow` component.
