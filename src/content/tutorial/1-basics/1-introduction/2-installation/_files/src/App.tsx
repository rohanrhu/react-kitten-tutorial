import { useState, useEffect } from 'react'
import { Manager, Spaces, Space, BasicWindow } from 'react-kitten'

import reactLogo from './assets/react.svg?url'
import kittenLogo from './assets/kitten.png?url'

import './App.css'

function App() {
  const [size, setSize] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ])
  const [space, setSpace] = useState(0)
  const [opened, setOpened] = useState(true)

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <Manager size={size}>
    <Spaces space={space} onSpaceChange={setSpace}>
      <Space>
        {!opened ? <button onClick={() => setOpened(true)}>Open Window</button>: null}
        <BasicWindow opened={opened} onClose={() => setOpened(false)}>
          <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 20}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={reactLogo} alt="React Logo" className="logo react" style={{height: 100}} /> &nbsp;+&nbsp;
              <img src={kittenLogo} alt="Kitten Logo" style={{height: 100}} />
            </div>
            <div style={{marginTop: 50}}>
              <h1>Welcome to React﹤Kitten﹥!</h1>
              <p>This is a simple example to get you started.</p>
            </div>
          </div>
        </BasicWindow>
      </Space>
    </Spaces>
  </Manager>
}

export default App;
