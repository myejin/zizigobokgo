import { Header } from "@/header";
import { Footer } from "@/footer";
import { MainPhoto } from "@/main_photo";
import { Info } from "@/info";
import { Invitation } from "@/invitation";
import { Contact } from "@/contact";
import { Day } from "@/day";
import { Location } from "@/location";
import { PhotoBook } from "@/photo_book";
import { Account } from "@/account";

const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <MainPhoto />
      <Invitation />
      <Contact />
      <PhotoBook />
      <Day />
      <Location />
      <Info />
      <Account />
      <Footer />
    </>
  )
}

export default Main;
