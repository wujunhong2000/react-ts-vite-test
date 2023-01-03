import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppLess from './App.module.less'
import { forEach } from 'lodash'

function App() {
  const [count, setCount] = useState(0)
  // 获取环境变量
  // console.log(import.meta.env);
  console.log('AppLess', AppLess);
  let arr: any[]  = []
  forEach(arr, (params)=> {
    console.log('params', params);
  })
  
  return (
    <div className={AppLess.app}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
