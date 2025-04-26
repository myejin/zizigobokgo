import { Account } from "@/account";
import { ExtraInfo } from "@/extra_info";
import { Footer } from "@/footer";
import { FuneralContact } from "@/funeral_contact";
import { Header } from "@/header";
import { Info } from "@/info";
import { MainPhoto } from "@/main_photo";
import { queryDynamoDocument } from "externals";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


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
    return <div className="my-3">loading...</div>;
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
