import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Photo } from "@components/photo";
import { Info } from "@components/info";
import { Invitation } from "@components/invitation";
import { Contact } from "@components/contact";

const Main = () => {
  return (
    <>
      <Header />
      <Photo />
      <Info />
      <Invitation />
      <Contact />
      <Footer />
    </>
  )
}

export default Main;
