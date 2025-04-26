import Button from '@/common/button';
import WeddingInvitation from '@/wedding_invitation';
import React, { useState } from 'react';

const CreateWeddingInvitation = () => {
    const [formData, setFormData] = useState({
        "location": {
            "name": "창경궁 아나까나홀",
            "tips": [
                {
                    "type": "주차",
                    "content": "운동장 내 주차장 이용 가능 (2시간 무료주차)\n1층 로비 내 주차권 사전등록 필요"
                }
            ],
            "address": "서울 종로구 창경궁로 185 창경궁"
        },
        "accounts": [
            {
                "name": "남상호",
                "description": "신랑",
                "number": "1234-2345666-789",
                "bank": "국민은행",
                "type": "left"
            },
            {
                "name": "남아빠",
                "description": "신랑 아버지",
                "number": "1234-2345666-789",
                "bank": "국민은행",
                "type": "left"
            },
            {
                "name": "김혜진",
                "description": "신부",
                "number": "9999-98765-4321",
                "bank": "국민은행",
                "type": "right"
            },
        ],
        "extraInfos": [
            {
                "message": "신부대기실은 4층에 위치하고 있으며\n연회장은 3층에 위치하고 있습니다.\n\n여유있게 도착하셔서\n신부와 함께 예쁜 추억을 남겨주세요 :)",
                "title": "신부대기실 및 연회장"
            }
        ],
        "message": "예쁜 예감이 들었다.\n우리는 언제나 손을 잡고 있게 될 것이다.\n-연인,이이체-\n\n두 손 꼭 잡고 하나 되는 날\n함께 축복해주시면 큰 기쁨으로 간직하겠습니다.\n\n남상호, 김혜진 드림",
        "photoUrls": [
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/0.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/1.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/2.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/3.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/4.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/5.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/0.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/1.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/2.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/3.jpeg",
            "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/4.jpeg"
        ],
        "weddingHosts": [
            {
                "type": "left",
                "name": "남상호",
                "phone": "010-1111-2222"
            },
            {
                "type": "left_left",
                "name": "남아빠",
                "phone": "010-1111-2222"
            },
            {
                "type": "right",
                "name": "김혜진",
                "phone": "010-1234-5678"
            },
            {
                "type": "right_left",
                "name": "김아빠",
                "phone": "010-1234-5678"
            },
        ],
        "mainPhotoUrl": "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/0.jpeg",
        "brideName": "김혜진",
        "date_iso": "2055-05-15T05:10:48.635Z",
        "groomName": "남상호",
        "bgmUrl": "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/bgm.m4a",
        "sub": [
            {
                "title": "To. 민정이에게",
                "type": "video",
                "video": "https://pub-e87c21ce420d4449a2b3327bf0c92512.r2.dev/642w66qofDE3NDIwMTUxNTk4NjY=/video.mp4"
            }
        ],
        "title": "Sangho & Hyejin\n저희 결혼합니다"
    });

    const [extraInfoData, setExtraInfoData] = useState([
        {
            "message": "신부대기실은 4층에 위치하고 있으며\n연회장은 3층에 위치하고 있습니다.\n\n여유있게 도착하셔서\n신부와 함께 예쁜 추억을 남겨주세요 :)",
            "title": "신부대기실 및 연회장"
        }
    ]);

    const [locationTipData, setLocationTipData] = useState([
        {
            "type": "주차",
            "content": "운동장 내 주차장 이용 가능 (2시간 무료주차)\n1층 로비 내 주차권 사전등록 필요"
        }
    ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSave = () => {
        // TODO
        alert(JSON.stringify(formData.title));
    };

    return (
        <div className="flex gap-30">
            <div className="w-1/2">
                <WeddingInvitation 
                    item={formData} 
                    subTitle={''}
                />
            </div>
            <div className="border-r border-gray-200" />
            <div className="w-1/2">
                <form>
                    <div className="flex justify-between my-15">
                        <div className="text-tiny-gray">
                            <div>작성 완료 후 카카오톡 채널로 문의주시면</div>
                            <div>웨딩 갤러리 수정 및 실제 사용 승인 도와드리겠습니다.</div>
                        </div>
                        <Button onClick={onSave} text={"저장하기"} />
                    </div>
                    <div className="my-5 flex gap-3">
                        <div className="w-1/2">
                            <div className="py-1 text-default">신랑</div>
                            <textarea
                                className="w-full h-13 p-3 border border-gray-400 rounded"
                                name="title"
                                value={formData.groomName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <div className="py-1 text-default">신부</div>
                            <textarea
                                className="w-full h-13 p-3 border border-gray-400 rounded"
                                name="title"
                                value={formData.brideName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="my-5">
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">제목</div>
                        <textarea
                            className="w-full p-3 border border-gray-400 rounded"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">대표 이미지</div>
                        ...
                        {/* mainPhotoUrl */}
                        {/* <textarea
                            className="w-full p-3 border border-gray-400 rounded"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        /> */}
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">오시는 길</div>
                        <div>
                            <div className="py-1">주소</div>
                            <textarea
                                className="w-full p-3 border border-gray-400 rounded"
                                name="location.address"
                                value={formData.location.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <div className="py-1">상세주소</div>
                            <textarea
                                className="w-2/3 p-3 border border-gray-400 rounded"
                                name="location.name"
                                value={formData.location.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">웨딩 일정</div>
                        <div className="flex gap-3">
                            <input
                                className="w-full p-3 border border-gray-400 rounded"
                                type="datetime-local"
                                name="date_iso"
                                value={formData.date_iso}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">초대 문구</div>
                        <textarea
                            className="w-full h-50 p-3 border border-gray-400 rounded"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">오시는 길 가이드</div>
                        {locationTipData.map((tip, idx) => (
                            <>
                                <textarea
                                    className="w-full h-10 py-3 border-b border-gray-400 rounded"
                                    name={`locationTips.${idx}.type`}
                                    key={`locationTips.${idx}.type`}
                                    value={tip.type}
                                    onChange={(e) => {
                                        setLocationTipData((prev) => {
                                            const newData = [...prev];
                                            newData[idx]["type"] = e.target.value;
                                            return newData;
                                        });
                                        setFormData((prev) => {
                                            const newData = { ...prev };
                                            newData.extraInfos = extraInfoData;
                                            return newData;
                                        })
                                    }}
                                />
                                <textarea
                                    className="w-full h-30 my-1 p-3 border border-gray-400 rounded"
                                    name={`locationTips.${idx}.content`}
                                    key={`locationTips.${idx}.content`}
                                    value={tip.content}
                                    onChange={(e) => {
                                        setLocationTipData((prev) => {
                                            const newData = [...prev];
                                            newData[idx]["content"] = e.target.value;
                                            return newData;
                                        });
                                        setFormData((prev) => {
                                            const newData = { ...prev };
                                            newData.extraInfos = extraInfoData;
                                            return newData;
                                        })
                                    }}
                                />
                            </>
                        ))}
                        <Button
                            className="w-full"
                            text={"추가하기"}
                            onClick={() => {
                                setExtraInfoData((prev) => {
                                    const newData = [...prev];
                                    newData.push({
                                        title: "",
                                        message: ""
                                    });
                                    return newData;
                                })
                            }}
                        />
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">사전 안내</div>
                        {extraInfoData.map((info, idx) => (
                            <>
                                <textarea
                                    className="w-full h-10 py-3 border-b border-gray-400 rounded"
                                    name={`extraInfos.${idx}.title`}
                                    key={`extraInfos.${idx}.title`}
                                    value={info.title}
                                    onChange={(e) => {
                                        setExtraInfoData((prev) => {
                                            const newData = [...prev];
                                            newData[idx]["title"] = e.target.value;
                                            return newData;
                                        });
                                        setFormData((prev) => {
                                            const newData = { ...prev };
                                            newData.extraInfos = extraInfoData;
                                            return newData;
                                        })
                                    }}
                                />
                                <textarea
                                    className="w-full h-50 my-1 p-3 border border-gray-400 rounded"
                                    name={`extraInfos.${idx}.message`}
                                    key={`extraInfos.${idx}.message`}
                                    value={info.message}
                                    onChange={(e) => {
                                        setExtraInfoData((prev) => {
                                            const newData = [...prev];
                                            newData[idx]["message"] = e.target.value;
                                            return newData;
                                        });
                                        setFormData((prev) => {
                                            const newData = { ...prev };
                                            newData.extraInfos = extraInfoData;
                                            return newData;
                                        })
                                    }}
                                />
                            </>
                        ))}
                        <Button
                            className="w-full"
                            text={"추가하기"}
                            onClick={() => {
                                setExtraInfoData((prev) => {
                                    const newData = [...prev];
                                    newData.push({
                                        title: "",
                                        message: ""
                                    });
                                    return newData;
                                })
                            }}
                        />
                    </div>
                    <div className="my-5">
                        <div className="py-1 text-default">마음 전하실 곳</div>
                        <textarea
                            className="w-full p-3 border border-gray-400 rounded"
                            name="accounts"
                            value={''}
                            onChange={handleChange}
                        />
                    </div>
                    
                    
                </form>
            </div>
            
        </div>
    );
};

export default CreateWeddingInvitation;
