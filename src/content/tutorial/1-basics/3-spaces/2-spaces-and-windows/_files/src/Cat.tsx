import { useState } from "react"

import { BasicWindow } from "react-kitten"

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

export { Cat }