import React, { useState, useEffect } from 'react'

import {
  Window, BasicWindow, TitleBar, Title, Buttons, CloseButton,
  StageButton, Content, usePosition, useSize, useKittenId
} from 'react-kitten'

function ListWindow({ title }: React.PropsWithChildren & { title?: string }) {
  const [kittenId] = useKittenId()
  const [position, setPosition] = usePosition([20, 20])
  const [opened, setOpened] = useState(true)
  const [size, setSize] = useSize([500, 400])
  const [staged, setStaged] = useState(false)
  
  const [openedCats, setOpenedCats] = useState<string[]>([])
  const [cats, setCats] = useState<string[]>([])
  
  useEffect(() => {
    fetch(`https://blanch.dev/catphotos/cats.php?count=10`)
      .then(res => res.json())
      .then(data => setCats(data["urls"]))
  }, [])

  return <>
    {opened ? <Window
      kittenId={kittenId}
      position={position} onPositionChange={setPosition}
      size={size} onSizeChange={setSize}
      staged={staged} onStagedChange={setStaged}
    >
      <TitleBar onMove={setPosition}>
        <Buttons>
          <CloseButton onClick={() => setOpened(false)} />
          <StageButton onClick={() => setStaged(!staged)} />
        </Buttons>
        <Title>{title}</Title>
      </TitleBar>
      <Content>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 10,
          padding: 10,
          height: '100%'
        }}>
          {cats.map((cat, i) =>
            <img
              key={i} src={cat} alt="Cat"
              crossOrigin="anonymous"
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: 10,
              }}
              onClick={() => setOpenedCats([...openedCats, cat])}
            />
          )}
        </div>
      </Content>
    </Window>: <div style={{margin: 10}}>
      <button onClick={() => setOpened(true)}>
        Open Cat List
      </button>
    </div>}
    {openedCats.map((cat, i) => <BasicWindow key={i} title="Cat" initialSize={[400, 300]}>
      <img src={`https://proxy.cors.sh/${cat}`} alt="cat" style={{ width: '100%', height: 'auto' }} crossOrigin="anonymous" />
    </BasicWindow>)}
  </>
}

export { ListWindow }