
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  return (
    <div>
      <button> Home </button>
      <button> My network ({networkNotificationCount}) </button>
      <button> Messaging </button>
      <button> Notifications </button>
      <button> Me </button>
    </div>
  )
}
export default App
