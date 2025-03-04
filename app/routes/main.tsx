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


const Main = () => {
  const [flowers, setFlowers] = useState<JSX.Element[]>([]);

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
  
  const item = {
    title: "choigomgom & parkheehee",
    bgmUrl: "./default_bgm.wav",
    brideName: "최곰곰",
    groomName: "박희희",
    mainPhotoUrl: "./default_main_photo.jpeg",
    // src="https://media.zizigobokgo.xyz/123/main_photo.png"
    date: new Date("2025-03-27T12:30:00"),
    location: {
      name: "서울AAA컨벤션 아나까나홀",
      address: "서울시 강남구 테헤란로 1234",
      tips: [],
    },
    message: "예쁜 예감이 들었다.\n우리는 언제나 손을 잡고 있게 될 것이다.\n-연인,이이체-\n\n두 손 꼭 잡고 하나 되는 날\n함께 축복해주시면 큰 기쁨으로 간직하겠습니다",
    weddingHosts: [
      {
        type: 'left',
        name: '김OO',
        phone: '010-1234-5678',
      },
      {
        type: 'left_left',
        name: '아부지',
        phone: '010-1234-5678',
      },
      {
        type: 'left_right',
        name: '신랑맘',
        phone: '010-1234-5678',
      },
      {
        type: 'right',
        name: '이OO',
        phone: '010-1234-5678',
      },
      {
        type: 'right_left',
        name: '신부아빠',
        phone: '010-1234-5678',
      },
      {
        type: 'right_right',
        name: '김엄마',
        phone: '010-1234-5678',
      },
    ],
    photoUrls: [
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
      "./default_main_photo.jpeg",
    ],
    accounts: [
      {
        type: 'left',
        name: '김OO',
        description: '신랑',
        bank: '국민은행',
        number: '1234-2345666',
      },
      {
        type: 'left',
        name: '박OO',
        description: '신랑 아버지',
        bank: '신한은행',
        number: '12346-4345',
      },
      {
        type: 'right',
        name: '이OO',
        description: '신부',
        bank: '농협은행 ',
        number: '234567',
      },
    ],
    extraInfos: [
      {
        name: "신부대기실 및 연회장",
        message: "신부대기실은 4층에 위치하고 있으며\n연회장은 3층에 위치하고 있습니다.\n\n여유있게 도착하셔서\n신부와 함께 예쁜 추억을 남겨주세요 :)",
      },
    ]
  }

  // TODO
  // location tips 정리 필요
  // edit mode

  return (
    <>
      {flowers}
      <Header 
        title={item.title} 
        bgmUrl={item.bgmUrl}
      />
      <MainPhoto photoUrl={item.mainPhotoUrl} />
      <Info 
        title={item.title} 
        locationName={item.location.name} 
        date={item.date}
      />
      <Invitation message={item.message} />
      <Contact weddingHosts={item.weddingHosts} />
      <Day 
        brideName={item.brideName} 
        groomName={item.groomName} 
        date={item.date}
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
        date={item.date}
        imageUrl={item.mainPhotoUrl} 
      />
    </>
  )
}

export default Main;
