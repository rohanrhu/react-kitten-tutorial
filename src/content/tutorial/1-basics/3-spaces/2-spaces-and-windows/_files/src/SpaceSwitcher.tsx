function SpaceSwitcher({ space, onSpaceChange }: { space: number, onSpaceChange: (space: number) => void }) {
  return <div>
      <div style={{ display: 'flex', 'gap': 10, justifyContent: 'center', padding: 10 }}>
      <button onClick={() => onSpaceChange(0)} disabled={space === 0}>Tabby Cat</button>
      <button onClick={() => onSpaceChange(1)} disabled={space === 1}>Jaguars</button>
      <button onClick={() => onSpaceChange(2)} disabled={space === 2}>Siamese Cat</button>
      </div>
      <div style={{ padding: 10 }}>
      <i>﹤ scroll to switch between spaces ﹥</i>
      </div>
  </div>
}

export { SpaceSwitcher }