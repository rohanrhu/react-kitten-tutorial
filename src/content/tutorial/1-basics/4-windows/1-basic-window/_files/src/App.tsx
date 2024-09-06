import { useState, useEffect } from 'react'
import { Manager, Spaces, Space, BasicWindow } from 'react-kitten'

import './App.css'

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
        <BasicWindow
          title="What is a dog?"
          initialPosition={[300, 100]}
          initialSize={[300, 220]}
          onClose={() => alert('Dog window closed')}
        >
          <div style={{ padding: 25 }}>
            <p>The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative.</p>
          </div>
        </BasicWindow>
      </Space>
    </Spaces>
  </Manager>
}

export default App