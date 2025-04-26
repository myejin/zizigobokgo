import WeddingInvitation from "@/wedding_invitation";
import { queryDynamoDocument } from "externals";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";


const ViewWeddingInvitation = () => {
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

  return (
    <WeddingInvitation 
      item={item} 
      subTitle={subTitle}
    /> 
  )
}

export default ViewWeddingInvitation;
