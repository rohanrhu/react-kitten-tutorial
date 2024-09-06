---
type: lesson
title: Adjustable Window
focus: /src/AdjustableWindow.tsx
slug: adjustable-window
---

# Let's make an adjustable window! 🎛️

In this lesson, we'll create a window that has settings to adjust its properties.

## Create a new React﹤Kitten﹥ project

First, create a new React﹤Kitten﹥ project by running the following command:

```bash
npm create vite my-cat-list-app -- --template react-ts
```

## Install React﹤Kitten﹥

Next, install React﹤Kitten﹥ by running the following command:

```bash
npm install react-kitten
```

## Let's start with creating the most basic window

We'll use Kitten's `usePosition` hook for the window's position, `useSize` for the window's size, and React's `useState` for the rest.

Here is our window:

```tsx
function AdjustableWindow() {
  const [id] = useKittenId()
  const [position, setPosition] = usePosition([100, 50])
  const [size, setSize] = useSize([400, 300])
  const [opened, setOpened] = useState(true)
  const [staged, setStaged] = useState(false)

  return <Window
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
      Hello Kitty! 🐈
    </Content>
  </Window>
}
```

Now, we want to add settings to adjust the window's properties.

## Add settings to adjust the window

We'll add a `Settings` component to the `Window` component.

We'll write some JSX code to create a form with input fields to adjust the window's properties in the `<Content>` component.

### Setting `position`, `size`, and `staged`

We'll add input fields to adjust the window's `position`, `size`, and `staged` properties.

```tsx
<div className={style.settings}>
  <div className={style.setting}>
    <h2>Position</h2>
    <div className={style.prop}>
      <label>X:</label>
      <input
        type="number"
        step={1}
        min={0} max={window.innerWidth}
        value={position[0]}
        onChange={e => setPosition([parseInt(e.target.value), position[1]])}
      />
    </div>
    <div className={style.prop}>
      <label>Y:</label>
      <input
        type="range"
        min={0} max={window.innerHeight}
        value={position[1]}
        onChange={e => setPosition([position[0], parseInt(e.target.value)])}
      />
    </div>
  </div>
  <div className={style.setting}>
    <h2>Size</h2>
    <div className={style.prop}>
      <label>Width:</label>
      <input
        type="number"
        min={0} max={window.innerWidth}
        value={size[0]}
        onChange={e => setSize([parseInt(e.target.value), size[1]])}
      />
    </div>
    <div className={style.prop}>
      <label>Height:</label>
      <input
        type="range"
        min={0} max={window.innerHeight}
        value={size[1]}
        onChange={e => setSize([size[0], parseInt(e.target.value)])}
      />
    </div>
  </div>
  <div className={style.setting}>
    <h2>Staged</h2>
    <input
      type="checkbox"
      checked={staged}
      onChange={e => setStaged(e.target.checked)}
    />
  </div>
</div>
```

Here is the full code:

```tsx
function AdjustableWindow() {
  const [id] = useKittenId()
  const [position, setPosition] = usePosition([100, 50])
  const [size, setSize] = useSize([430, 300])
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
      <div className={style.settings}>
        <div className={style.setting}>
          <h2>Position</h2>
          <div className={style.prop}>
            X:
            <input
              type="number"
              step={1}
              min={0} max={window.innerWidth}
              value={position[0]}
              onChange={e => setPosition([parseInt(e.target.value), position[1]])}
            />
          </div>
          <div className={style.prop}>
            Y:
            <input
              type="range"
              min={0} max={window.innerHeight}
              value={position[1]}
              onChange={e => setPosition([position[0], parseInt(e.target.value)])}
            />
          </div>
        </div>
        <div className={style.setting}>
          <h2>Size</h2>
          <div className={style.prop}>
            Width:
            <input
              type="number"
              min={0} max={window.innerWidth}
              value={size[0]}
              onChange={e => setSize([parseInt(e.target.value), size[1]])}
            />
          </div>
          <div className={style.prop}>
            Height:
            <input
              type="range"
              min={0} max={window.innerHeight}
              value={size[1]}
              onChange={e => setSize([size[0], parseInt(e.target.value)])}
            />
          </div>
        </div>
        <div className={style.setting}>
          <h2>Staged</h2>
          <input
            type="checkbox"
            checked={staged}
            onChange={e => setStaged(e.target.checked)}
          />
        </div>
      </div>
    </Content>
  </Window>: null
}
```

---

Congratulations! 🥳 You've created an adjustable window with settings to adjust its properties.
