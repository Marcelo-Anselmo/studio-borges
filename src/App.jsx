import About from "./components/About";
import Andress from "./components/Andress";
import Cares from "./components/Cares";
import Header from "./components/Header";
import Redes from "./components/Redes";
import Photos from "./components/Photos";
import Promotion from "./components/Promotion";
import Schedule from "./components/Schedule";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Services />
      <Cares />
      <Photos />
      <Schedule />
      <Promotion />
      <About />
      <Andress />
      <Redes />
    </>
  );
}

export default App;
