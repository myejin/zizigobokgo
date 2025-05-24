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


const WeddingInvitation = ({ item, subTitle, isEn = false }: { item: any; subTitle: any; isEn?: boolean; }) => {
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
        isEn={isEn}
      />
      <Invitation
        commonVideoUrl={item.commonVideoUrl}
        altMessage={item.altMessage}
        videoUrl={item.sub.find((sub: any) => sub.type === "video" && sub.title === subTitle)?.video}
      />
      <WeddingContact weddingHosts={item.weddingHosts} isEn={isEn} />
      <Day
        brideName={item.brideName} 
        groomName={item.groomName} 
        date={new Date(item.date_iso)}
        isEn={isEn}
      />
      <Gallery photoUrls={item.photoUrls} isEn={isEn} />
      <Location
        location={item.location}
        isEn={isEn}
      />
      <ExtraInfo infos={item.extraInfos} isEn={isEn} />
      {!isEn && (
          <WeddingAccount accounts={item.accounts} />
      )}
      <FrameImage 
        profileUrl={item.mainPhotoUrl}
        imageUrl={item.frameImage.imageUrl}
        content={item.frameImage.content}
        isEn={isEn}
      />
      <Footer 
        title={item.footerTitle} 
        date={new Date(item.date_iso)}
        imageUrl={item.mainPhotoUrl}
        subTitle={item.footerSubTitle ?? subTitle ?? ""}
        isEn={isEn}
      />
    </>
  )
}

export default WeddingInvitation;
