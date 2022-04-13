import './App.css';
import Branding from './components/molecules/Branding';
import Content from './components/views/ContentArea';
import SiteFooter from './components/organisms/SiteFooter';

// Navigation Bar Component
function Navigation() {
  return (
    <div>
      <Branding></Branding>
    </div>
  );
}
// Body Content Component
function Body() {
  return <Content></Content>;
}

// Footer Component
function Footer() {
  return <SiteFooter></SiteFooter>;
}

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
