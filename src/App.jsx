import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
//import Home from './components/Home';
//import RegisterPage from './components/RegisterPage';
//import LoginPage from './components/LoginPage';
//import Cart from './components/Cart';
import Pizza from './components/Pizza';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
      <Navbar />
      <Pizza />
      {/*<Home />*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/*<Cart />*/}
      <Footer />
    </>
  )
}

export default App
