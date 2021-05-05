import '../App.css';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App container">
      <Header isHome={true}/>
      <HomeBody/>
      <Footer/>
    </div>
  );
}

export default Home;
