import { useState } from 'react'

import {
  Window, Content, TitleBar, Title, Buttons, CloseButton, StageButton,
  useKittenId, usePosition, useSize
} from 'react-kitten'

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

export { MyWindow }