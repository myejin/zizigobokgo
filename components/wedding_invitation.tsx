import { Day } from "@/day";
import { ExtraInfo } from "@/extra_info";
import { Footer } from "@/footer";
import { Gallery } from "@/gallery";
import { Header } from "@/header";
import { Invitation } from "@/invitation";
import { Location } from "@/location";
import { MainPhoto } from "@/main_photo";
import { WeddingContact } from "@/wedding_contact";
import { WeddingInfo } from "@/wedding_info";
import { Bgm } from "./bgm";
import FrameImage from "./frame_image";
import { WeddingAccount } from "./wedding_account";


const WeddingInvitation = ({ item, subTitle }: { item: any; subTitle: any }) => {
  if (!item) {
    return <div className="my-3">loading...</div>;
  }
  
  return (
    <>
      <Bgm 
        bgmUrl={item.bgmUrl}
      />
      <Header
        title={item.title}
      />
      <MainPhoto photoUrl={item.mainPhotoUrl} />
      <WeddingInfo 
        locationName={item.location.name} 
        date={new Date(item.date_iso)}
      />
      <Invitation 
        message={item.message}
        videoUrl={item.sub.find((sub: any) => sub.type === "video" && sub.title === subTitle)?.video}
      />
      <WeddingContact weddingHosts={item.weddingHosts} />
      <Day 
        brideName={item.brideName} 
        groomName={item.groomName} 
        date={new Date(item.date_iso)}
      />
      <Gallery photoUrls={item.photoUrls} />
      <Location
        location={item.location}
      />
      <ExtraInfo infos={item.extraInfos} />
      <WeddingAccount accounts={item.accounts} />
      <FrameImage 
        profileUrl={item.mainPhotoUrl}
        imageUrl={item.frameImage.imageUrl}
        content={item.frameImage.content} 
      />
      <Footer 
        title={item.title} 
        date={new Date(item.date_iso)}
        imageUrl={item.mainPhotoUrl}
        subTitle={subTitle ?? ""}
      />
    </>
  )
}

export default WeddingInvitation;
