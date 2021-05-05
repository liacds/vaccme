import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutVaccinePage from './pages/AboutVaccinePage'
import FAQPage from './pages/FAQPage'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage'
import MedPage from './pages/MedPage'
const Main = () => (
      <main className="col-12">
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/about-vaccine'>
                <AboutVaccinePage/>
            </Route>
            <Route path='/about-us'>
                <AboutUsPage/>
            </Route>
            <Route path='/contact-us'>
                <ContactUsPage/>
            </Route>
            <Route path='/faq'>
                <FAQPage/>
            </Route>
            <Route path='/medorg/:pk' component = {MedPage}/>
        </Switch>
      </main>
)

export default Main
