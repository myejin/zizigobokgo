import { useParams, useSearchParams } from "react-router";
import { Footer } from "@/footer";
import { MainPhoto } from "@/main_photo";
import { ExtraInfo } from "@/extra_info";
import { Day } from "@/day";
import { Location } from "@/location";
import { Gallery } from "@/gallery";
import { Account } from "@/account";
import { Info } from "@/info";
import { useEffect, useState } from "react";
import { Header } from "@/header";
import { queryDynamoDocument } from "externals";
import { FuneralContact } from "@/funeral_contact";


const Funeral = () => {
  const { funeralKey = "" } = useParams();
  const [item, setItem] = useState<any>(null);
  
  useEffect(() => {
    const fetchItem = async () => {
      const document = await queryDynamoDocument(funeralKey);
      if (document) {
        setItem(document.Item);
      }
    };
    if (!item) {
      fetchItem();
    }
  }, [item]);

  if (!item) {
    console.log("hello...");
    return <div className="m-3">loading...</div>;
  }
  return (
    <>
      <Header 
        title={item.title} 
      />
      {/* 부고에 맞는 하나의 이미지 */}
      <MainPhoto photoUrl={item.mainPhotoUrl} /> 
      <Info 
        locationName={item.location.name} 
        date={new Date(item.date_iso)}
      />
      <FuneralContact contacts={item.weddingHosts} />
      <ExtraInfo infos={item.extraInfos} />
      <Account accounts={item.accounts} />
      <Footer 
        title={item.title} 
        date={new Date(item.date_iso)}
        imageUrl={item.mainPhotoUrl}
      />
    </>
  )
}

export default Funeral;
