import AppLess from './App.module.less'
import SignIn from '@/pages/SignIn'

function App() {
  // 获取环境变量
  // console.log(import.meta.env);
  
  return (
    <div className={AppLess.app}>
      App
      <SignIn />
    </div>
  )
}

export default App
