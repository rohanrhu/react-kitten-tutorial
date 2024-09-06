import { useState, useEffect } from 'react'
import { Manager, Spaces, Space } from 'react-kitten'

import { Cat } from './Cat'
import { SpaceSwitcher } from './SpaceSwitcher'

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
          <Cat
            title="Tabby Cat"
            description="The tabby cat is the most common pattern of coat, featuring stripes, swirls, and spots. Tabby cats are not a breed, but the most common coat pattern in domestic cats. The tabby pattern is found in many breeds, including the Abyssinian, American Shorthair, and Maine"
          />
          <SpaceSwitcher space={space} onSpaceChange={setSpace} />
      </Space>
      <Space>
          <Cat
            title="Jaguars"
            description="he jaguar is the largest cat in the Americas. They are found in the rainforests of Central and South America. Jaguars are strong swimmers and climbers and are known for their powerful bite, which allows them to pierce the shells of armored reptiles."
          />
          <SpaceSwitcher space={space} onSpaceChange={setSpace} />
      </Space>
      <Space>
          <Cat
            title="Siamese Cat"
            description="The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand, the Siamese became one of the most popular breeds in Europe and North America in the 19th century."
          />
          <SpaceSwitcher space={space} onSpaceChange={setSpace} />
      </Space>
    </Spaces>
  </Manager>
}

export default App