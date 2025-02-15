import { Header } from "@/header";
import { Footer } from "@/footer";
import { Photo } from "@/photo";
import { Info } from "@/info";
import { Invitation } from "@/invitation";
import { Contact } from "@/contact";

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
