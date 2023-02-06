import { useOutlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home";

import './styles/index.scss';

export default function App() {
  const outlet = useOutlet();
  console.log('outlet', outlet);
  return (
    <>
      <Header />
      <main>
        {outlet || <Home />}
      </main>
      <Footer />
    </>
  );
}
