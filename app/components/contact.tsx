import Button from "@components/common/button";

export enum WeddingHostType {
  RIGHT = 'right',
  RIGHT_RIGHT = 'right_right',
  RIGHT_LEFT = 'right_left',
  LEFT = 'left',
  LEFT_RIGHT = 'left_right',
  LEFT_LEFT = 'left_left',
}

export interface WeddingHost {
  type: WeddingHostType | string;
  name: string;
  phone: string;
}

export const Contact = () => {
  const weddingHosts: WeddingHost[] = [
    {
      type: 'right',
      name: '김OO',
      phone: '010-1234-5678',
    },
    {
      type: 'right_right',
      name: '아부지',
      phone: '010-1234-5678',
    },
    {
      type: 'right_left',
      name: '신랑맘',
      phone: '010-1234-5678',
    },
    {
      type: 'left',
      name: '이OO',
      phone: '010-1234-5678',
    },
    {
      type: 'left_right',
      name: '신부아빠',
      phone: '010-1234-5678',
    },
    {
      type: 'left_left',
      name: '김엄마',
      phone: '010-1234-5678',
    },
  ]

  const findNamesByType = (hosts: WeddingHost[], type: string) => {
    return hosts.find((host) => host.type === type)?.name ?? ''
  }

  const findParentNamesByType = (hosts: WeddingHost[], type: WeddingHostType.LEFT | WeddingHostType.RIGHT) => {
    const right = findNamesByType(hosts, `${type}_right`)
    const left = findNamesByType(hosts, `${type}_left`)

    return right && left ? `${right} • ${left}` : right || left
  }

  return (
    <div className="my-17 flex flex-col">
      <div className="flex justify-center">
        <div className="px-3 w-45 text-right">
          {findParentNamesByType(weddingHosts, WeddingHostType.RIGHT)}
        </div>
        <div className="flex w-30">
          <div className="px-3">신랑</div>
          <div>
            {findNamesByType(weddingHosts, WeddingHostType.RIGHT)}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="px-3 w-45 text-right">
          {findParentNamesByType(weddingHosts, WeddingHostType.LEFT)}
        </div>
        <div className="flex w-30">
          <div className="px-3">신부</div>
          <div>
            {findNamesByType(weddingHosts, WeddingHostType.LEFT)}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button 
          text={"연락처 확인하기"} 
          onClick={() => console.log('hello')} // TODO
        />
      </div>
    </div>
  );
}
