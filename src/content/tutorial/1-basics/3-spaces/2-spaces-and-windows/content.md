---
type: lesson
title: Spaces and Windows
focus: /src/App.tsx
slug: spaces-and-windows
---

# Spaces and Windows

Kitten is a Window Manager, which means it can manage multiple windows, or "windows". This is a feature that is common in many operating systems, and it allows you to organize your applications into different spaces. This can be useful for organizing your work, or for separating different tasks.

Let's add some windows to our spaces on our previous example.

We'll use `BasicWindow` component to create a window. It takes `title`, `initialPosition`, `initialSize`, `opened` props and children node.

We'll work on the `Cat.tsx` file for this.

First, we need an `opened` state that will be used to control the visibility of the window and a button to toggle it.

Here is the `opened` state:

```tsx
const [opened, setOpened] = useState(true);
```

And here is the button:

```tsx
<button onClick={() => setOpened(!opened)}>
  {opened ? 'Close Window' : 'Open Window'}
</button>
```

Now, we need to add a `BasicWindow` component to the `Cat` component. It will be dependent on the `opened` state.

> **Note** `Window` and `BasicWindow` components can be placed in anywhere in the component tree. They don't need to be direct children of the `Space` component. You can also have nested `Window` components.

```tsx
{opened && <BasicWindow
  title={title}
  opened={opened}
  onClose={() => setOpened(false)}
>
  <div style={{ 
    margin: '1rem',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '5px',
    lineHeight: '1.5',
  }}>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
</BasicWindow>}
```

This shows the window only when the `opened` state is `true`. Let's see the full code with React's fragment syntax (`<>`):

```tsx
function Cat({ title, description }: { title: string, description: string }) {
  const [opened, setOpened] = useState(false)
  
  return <>
    <div style={{ 
      margin: '1rem',
      padding: '1rem',
      border: '1px solid black',
      borderRadius: '5px',
      lineHeight: '1.5',
    }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => setOpened(!opened)}>
        {opened ? 'Close Window' : 'Open Window'}
      </button>
    </div>
    {opened && <BasicWindow
      title={title}
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <div style={{ 
        margin: '1rem',
        padding: '1rem',
        border: '1px solid black',
        borderRadius: '5px',
        lineHeight: '1.5',
      }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </BasicWindow>}
  </>
}
```

Now, you can open and close the window by clicking the button.

## Contents on Spaces

Spaces can also have contents other than windows. You can add any component to a space like the following:

```tsx
<Space>
  <div style={{ padding: 25 }}>
    <h1>Welcome to the Space!</h1>
    <p>This is a space. You can add windows to this space.</p>
  </div>
</Space>
```

---

Congratulations! 🥳 You've just learned how to deal with a complicated scenario!

Now you can move forward for more advanced topics or practice what you've learned by building your own projects.
