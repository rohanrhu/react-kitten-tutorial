---
type: lesson
title: Dynamic Size
focus: /src/App.tsx
slug: dynamic-size
---

# Dynamic Size

In the previous chapter, we learned how to set up the environment for a Kitten app. We created a basic app with one space that was full-screen to the window/document size. However, if we don't make the `size` state dynamic, it will not resize when the window is resized.

To make the `size` state dynamic, we can use the `useEffect` hook to update the `size` state when the window is resized.

> **Important**: In this stage, you can try to resize the preview section or your window. You'll see that your app is being resized with it. 🥳

We just need to add the following code to the `App` component:

```tsx
useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
```

This is how we can create a simple app with one space that resizes when the window is resized. 🥳

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

## More Scenarios / Use Cases? 🤔

If you are using Kitten in a container rather than the full window/document but that resizes, you can use the same approach to make the `size` state dynamic.

You can use `ResizeObserver` or other methods to get the size of the container and update the `size` state accordingly.

---

In the next chapter, we will learn how to create multiple spaces. 🚀
