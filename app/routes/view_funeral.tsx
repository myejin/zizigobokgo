import { Footer } from "@/footer";
import { FuneralAccount } from "@/funeral_account";
import { FuneralInfo } from "@/funeral_info";
import { Header } from "@/header";
import { Location } from "@/location";
import { MainPhoto } from "@/main_photo";
import { queryDynamoDocument } from "externals";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Util } from "utils";
import { funeralTemplate } from "~/constants/funeral_template";


const ViewFuneral = ({ demoType = "" }: { demoType?: string; }) => {
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
      if (demoType) {
        setItem(funeralTemplate);
      } else {
        fetchItem();
      }
    }
  }, [item]);

  if (!item) {
    return <div className="my-3">loading...</div>;
  }
  return (
    <>
      <MainPhoto photoUrl={'/black_ribbon.png'} />
      <Header
        title={
          `故 ${item.name} 님께서 ${Util.getFormattedDate(new Date(item.date_iso), "date_ko")}\n`
          + `별세하셨음을 삼가 알려드립니다.`
        }
      />
      <div className="w-full pb-12 text-center">
        고인의 명복을 빕니다.
      </div>
      <FuneralInfo
        title={"상주정보"}
        values={item.infos["상주정보"]}
      />
      <FuneralInfo
        title={"발인"}
        values={item.infos["발인"]}
      />
      <FuneralInfo
        title={"장지"}
        values={item.infos["장지"]}
      />
      <Location
        location={item.location}
      />
      <FuneralAccount accounts={item.accounts} />
      <Footer 
        title={"부고 소식 전달드립니다."} 
        date={new Date(item.date_iso)}
        imageUrl={item.mainPhotoUrl}
      />
    </>
  )
}

export default ViewFuneral;
