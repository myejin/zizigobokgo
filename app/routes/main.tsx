import { useParams } from "react-router";
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
import { useEffect, useState, type JSX } from "react";
import { Header } from "@/header";
import { queryDynamoDocument } from "externals";


const Main = () => {
  const { invitationKey = "" } = useParams();
  const [item, setItem] = useState<any>(null);
  const [flowers, setFlowers] = useState<JSX.Element[]>([]);
  
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

  useEffect(() => {
    const interval = setInterval(() => setFlowers((prev) => {
      if (prev.length > 20) {
        clearInterval(interval);
        return prev;
      } else  {
        const flower = (
          <div
            key={Math.random()}
            className="flower"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        );
        return [...prev, flower];
      }
    }), 2000);
  }, []);

  if (!item) {
    return <div className="m-3">loading...</div>;
  }
  return (
    <>
      {flowers}
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
        iframeTag={item.sub.find((sub: any) => sub.type === "iframe")?.iframeTag} // TODO: query param
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
        subTitle={item.sub.find((sub: any) => sub.title === "to. minjung")?.title} // TODO: query param
      />
    </>
  )
}

export default Main;
