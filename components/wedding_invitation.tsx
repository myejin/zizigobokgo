import { Account } from "@/account";
import { Day } from "@/day";
import { ExtraInfo } from "@/extra_info";
import { Footer } from "@/footer";
import { Gallery } from "@/gallery";
import { Header } from "@/header";
import { Info } from "@/info";
import { Invitation } from "@/invitation";
import { Location } from "@/location";
import { MainPhoto } from "@/main_photo";
import { WeddingContact } from "@/wedding_contact";


const WeddingInvitation = ({ item, subTitle }: { item: any; subTitle: any }) => {
  if (!item) {
    return <div className="my-3">loading...</div>;
  }
  
  return (
    <>
      <Header 
        title={item.title} 
        bgmUrl={item.bgmUrl}
      />
      <MainPhoto photoUrl={item.mainPhotoUrl} />
      <Info 
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
      <Account accounts={item.accounts} />
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
