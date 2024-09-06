import { useState, useEffect } from 'react';
import { Manager, Spaces, Space } from 'react-kitten';

import { ListWindow } from './CatList';

import './App.css';

function App() {
  const [size, setSize] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [space, setSpace] = useState(0);

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Manager size={size}>
      <Spaces space={space} onSpaceChange={setSpace}>
        <Space>
          <ListWindow title="Cats and Kittens" />
        </Space>
      </Spaces>
    </Manager>
  );
}

export default App;
