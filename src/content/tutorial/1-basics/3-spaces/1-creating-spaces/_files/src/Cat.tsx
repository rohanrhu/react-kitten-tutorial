function Cat({ title, description }: { title: string, description: string }) {
  return <div style={{ 
    margin: '1rem',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '5px',
    lineHeight: '1.5',
  }}>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

export { Cat }