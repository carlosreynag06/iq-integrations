import { CalendarDays, FileText, MessageSquare, Phone, Send } from "lucide-react";

const inputs = [
  { label: "CALL", icon: Phone, className: "core-node-a" },
  { label: "WEB", icon: Send, className: "core-node-b" },
  { label: "DM", icon: MessageSquare, className: "core-node-c" },
  { label: "DOC", icon: FileText, className: "core-node-d" },
  { label: "BOOK", icon: CalendarDays, className: "core-node-e" },
];

export function RevenueCommandCore() {
  return (
    <div className="command-core" aria-label="Revenue recovery command core visual">
      <div className="core-rings">
        <div className="core-orbit core-orbit-one" />
        <div className="core-orbit core-orbit-two" />
        <div className="core-orbit core-orbit-three" />
      </div>
      <div className="core-center">
        <span>IQ</span>
        <strong>CORE</strong>
      </div>
      {inputs.map((item) => {
        const Icon = item.icon;
        return (
          <div className={`core-node ${item.className}`} key={item.label}>
            <Icon aria-hidden="true" size={17} />
            <span>{item.label}</span>
          </div>
        );
      })}
      <div className="signal-line signal-line-one" />
      <div className="signal-line signal-line-two" />
      <div className="signal-line signal-line-three" />
      <div className="core-status">
        <span>CAPTURE RATE</span>
        <strong>ACTIVE</strong>
      </div>
    </div>
  );
}
