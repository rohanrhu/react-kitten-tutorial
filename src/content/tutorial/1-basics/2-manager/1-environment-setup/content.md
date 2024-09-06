---
type: lesson
title: Environment Setup
focus: /src/App.tsx
slug: environment-setup
---

# Environment Setup

Kitten is a Desktop Manager, which means it can manage multiple desktops (or "spaces") and windows inside them. This is a feature that is common in many operating systems, and it allows you to organize your windows into different groups. This can be useful for organizing your work, or for separating different tasks.

Kitten's root component is the `Manager` component. This component is supposed to work full-screen (or full-sized in its container), so you should handle the window size with a `useState` hook and pass it to the `size` prop of the `Manager` component.

> **Important**: In this stage, you can try to resize the preview section or your window to see that your app is not resizing with it. We will learn how to fix this in the next chapter.

Here is an example of how you can set up a basic Kitten app:

```tsx
function App() {
  const [size] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ])
  const [space, setSpace] = useState(0)

  return <Manager size={size}>
    <Spaces space={space} onSpaceChange={setSpace}>
      <Space>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
            Hello World!
          </div>
      </Space>
    </Spaces>
  </Manager>
}
```

This is how we can create a simple app with one space. It is full-screen to the window/document size; **if we don't make the `size` state dynamic, it will not resize when the window is resized.**

## Making Manager `size` State Dynamic

To make the `size` state dynamic, we can use the `useEffect` hook to update the `size` state when the window is resized.

we just need to add the following code to the `App` component:

```tsx
useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
```

---

We'll see it in action in the next chapter. 🥳

---

## API Reference

Manager has a few options that you can use to customize its behavior.

### `Manager` Props

| Name | Type | Default |
| ---- | ---- | ------- |
| `children?` | `React.ReactNode` | `null` |
| `size` | `[number, number]` | |
| `scale?` | `[number, number]` | `[1, 1]` |
