import Button from '@/common/button';
import WeddingInvitation from '@/wedding_invitation';
import React, { useState } from 'react';
import { weddingInvitationTemplate } from '~/constants/wedding_invitation_template';

const CreateWeddingInvitation = () => {
    const [formData, setFormData] = useState(weddingInvitationTemplate);
    const [extraInfoData, setExtraInfoData] = useState(weddingInvitationTemplate.extraInfos);
    const [locationTipData, setLocationTipData] = useState(weddingInvitationTemplate.location.tips);

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
        <div className="mx-30 flex gap-30">
            <div className="w-[500px]">
                <WeddingInvitation 
                    item={formData} 
                    subTitle={''}
                />
            </div>
            <div className="border-r border-gray-200" />
            <div className="w-[500px]">
                <form>
                    <div className="flex justify-between my-15">
                        <div className="text-tiny-gray">
                            <div>작성 완료 후 아이디를 기록하고</div>
                            <div>갤러리 및 배경음악 등록 등 완성할 수 있습니다.</div>
                        </div>
                        <Button onClick={onSave} text={"저장하기"} />
                    </div>
                    <div className="my-5 flex gap-3">
                        <div className="w-1/2">
                            <div className="py-1 text-default">신랑</div>
                            <textarea
                                className="w-full h-13 p-3 border border-gray-400 rounded"
                                name="groomName"
                                value={formData.groomName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <div className="py-1 text-default">신부</div>
                            <textarea
                                className="w-full h-13 p-3 border border-gray-400 rounded"
                                name="brideName"
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
                        <div className="py-1 text-default">오시는 길</div>
                        <div className="flex gap-3">
                            <div className="w-1/2">
                                <div className="py-1">위도(lat)</div>
                                <textarea
                                    className="w-full h-13 p-3 border border-gray-400 rounded"
                                    name="title"
                                    value={formData.location.latitude}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <div className="py-1">경도(lng)</div>
                                <textarea
                                    className="w-full h-13 p-3 border border-gray-400 rounded"
                                    name="title"
                                    value={formData.location.longitude}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
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
