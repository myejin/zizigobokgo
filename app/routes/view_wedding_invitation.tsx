import WeddingInvitation from "@/wedding_invitation";
import { queryDynamoDocument } from "externals";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { weddingInvitationTemplate } from "~/constants/wedding_invitation_template";


const ViewWeddingInvitation = ({ demoType}: { demoType?: string }) => {
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
      if (demoType) {
        setItem(weddingInvitationTemplate);
      } else {
        fetchItem();
      }
    }
  }, [item]);

  return (
    <WeddingInvitation 
      item={item} 
      subTitle={demoType === "0" ? weddingInvitationTemplate.sub[0].title : subTitle}
    /> 
  )
}

export default ViewWeddingInvitation;
