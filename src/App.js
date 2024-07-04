import './App.css';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Post from './Post/Post';
import Signup from './Signup/Signup';
import Verify from './Verify/Verify';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Signup />
      <Post />
      <Verify />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
