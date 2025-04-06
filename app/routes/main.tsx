import { useParams, useSearchParams } from "react-router";
import { Footer } from "@/footer";
import { MainPhoto } from "@/main_photo";
import { ExtraInfo } from "@/extra_info";
import { Invitation } from "@/invitation";
import { Contact } from "@/contact";
import { Day } from "@/day";
import { Location } from "@/location";
import { Gallery } from "@/gallery";
import { Account } from "@/account";
import { Info } from "@/info";
import { useEffect, useState } from "react";
import { Header } from "@/header";
import { queryDynamoDocument } from "externals";


const Main = () => {
  const { invitationKey = "" } = useParams();
  const [searchParams, _] = useSearchParams();
  const subTitle = searchParams.get('subTitle');
  const [item, setItem] = useState<any>(null);
  
  useEffect(() => {
    const fetchItem = async () => {
      const document = await queryDynamoDocument(invitationKey);
      if (document) {
        setItem(document.Item);
      }
    };
    if (!item) {
      fetchItem();
    }
  }, [item]);

  if (!item) {
    return <div className="m-3">loading...</div>;
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
      <Contact weddingHosts={item.weddingHosts} />
      <Day 
        brideName={item.brideName} 
        groomName={item.groomName} 
        date={new Date(item.date_iso)}
      />
      <Location 
        name={item.location.name} 
        address={item.location.address} 
        tips={item.location.tips}
      />
      <Gallery photoUrls={item.photoUrls} />
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

export default Main;
