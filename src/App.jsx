
import './App.css'
import Appfeatures from './components/Appfeatures'
import ClientSection from './components/ClientSection'
import Copyright from './components/Copyright'
import Howdoesitwork from './components/Howdoesitwork'
import Ourcustomers from './components/Ourcustomers'
import Payments from './components/Payments'
import Showcase from './components/Showcase'
import Subscribe from './components/Subscribe'
import Transfers from './components/Transfers'
import Faq from './components/Faq'
import Mainnav from './components/Mainnav'
import ContactUsPage from './components/ContactUsPage'
import FindUs from './components/FindUs'



function App() {

  return (
   
    <>

    <Mainnav />

    <main id="main">

      <Showcase />
      <Ourcustomers />
      <Appfeatures />
      <Howdoesitwork/>
      <Transfers/>
      <Payments />
      <ClientSection />
      <Faq />
      <Subscribe />
      <Copyright />
      <ContactUsPage />
      <FindUs />
      <Copyright />
      
    </main>
    </>
  )
}

export default App
