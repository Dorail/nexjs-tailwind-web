import Image from "next/image";


//Component
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Banner from "./component/Banner";
import Main from "./component/Main";
import Main2 from "./component/Main2";
import Main3 from "./component/Main3";
import Banner2 from "./component/Banner2";
import Endfooter from "./component/Endfooter";

export default function Home() {
  return (
    <main>
      <Nav />

      <Hero />

      <div className="mb-96"></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <Banner />

      <div className="mb-96"></div>
      <br /><br /><br /><br /><br />

      <Main />

      <div className="mb-52"></div>

      <Main2 />

      <div className="mb-52"></div>

      <Main3 />

      <div className="mb-96"></div>

      <Banner2 />
      <br /><br /><br />
      <hr />
      <Endfooter />

    </main>
  );
}
