import { useState } from 'react'
import App1Less from './App1.module.less'

function App() {
console.log('App1Less', App1Less);
fetch('/api').then(data=>{ 
  console.log('data', data);
  
 })
  return (
    <div className={App1Less.app}>
123
    </div>
  )
}

export default App
