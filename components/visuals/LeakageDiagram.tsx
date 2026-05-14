export function LeakageDiagram() {
  return (
    <div className="leakage-diagram" aria-label="Revenue leakage visual">
      <div className="pipe pipe-left">
        <span>AD SPEND</span>
      </div>
      <div className="pipe pipe-center">
        <div className="blockage" />
        <div className="lost-fragment lost-one" />
        <div className="lost-fragment lost-two" />
        <div className="lost-fragment lost-three" />
      </div>
      <div className="pipe pipe-right">
        <span>BOOKED</span>
      </div>
      <div className="loss-readout">
        <b>LEAK DETECTED</b>
        <span>voicemail delay / slow follow-up / manual handoff</span>
      </div>
    </div>
  );
}
