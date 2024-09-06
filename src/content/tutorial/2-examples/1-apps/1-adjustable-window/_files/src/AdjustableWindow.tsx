import { useState } from 'react'

import {
  Window, Content, TitleBar, Title, Buttons, CloseButton, StageButton,
  useKittenId, usePosition, useSize
} from 'react-kitten'

import style from './AdjustableWindow.module.css'

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

export { AdjustableWindow }