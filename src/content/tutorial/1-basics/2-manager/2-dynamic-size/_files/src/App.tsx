import { useState, useEffect } from 'react'
import { Manager, Spaces, Space } from 'react-kitten'

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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
          <div style={{
            width: '100%',
            margin: '2rem',
            padding: '2rem',
            border: '1px solid black',
            borderRadius: '10px',
          }}>
            Hello World!
          </div>
        </div>
      </Space>
    </Spaces>
  </Manager>
}

export default App