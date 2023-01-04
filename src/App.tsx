import AppLess from './App.module.less'

function App() {
  // 获取环境变量
  // console.log(import.meta.env);
  
  return (
    <div className={AppLess.app}>
      App
    </div>
  )
}

export default App
