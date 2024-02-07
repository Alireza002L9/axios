
import './App.css'
import Comment from './components/Comment'
import Darkmode from './components/Darkmode'
import Data from './components/Data'
import Error from './components/Error'
import ReviewSection from './components/ReviewSection'
import Reviews from './components/Reviews'
import ContextState from './context/Context'

function App() {

  return (
    <>
      <Data/>
      <Darkmode />
      <ContextState>
        <ReviewSection />
      </ContextState>
    </>
  )
}

export default App
