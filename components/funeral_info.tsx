import { Util } from "utils";

interface FuneralInfoProps {
  title?: string;
  values: { label?: string; type?: string, value: string; }[];
}

export const FuneralInfo = ({ title, values }: FuneralInfoProps) => {
  if (values.length === 0) {
    return;
  }
  return (
    <div className="px-15 py-7 bg-neutral">
      {title && <div className="mb-5 text-default">{title}</div>}
      <div className="flex flex-col">
        {values.map(({ label, type, value }, idx) => (
          <div key={idx} className="flex pb-1 text-mini gap-x-5">
            {label && <div className="text-green-800">{`${label}`}</div>}
            <div>{type === "date" ? Util.getFormattedDate(new Date(value)) : value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
