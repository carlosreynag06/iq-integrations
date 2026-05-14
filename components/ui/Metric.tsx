type MetricProps = {
  value: string;
  label: string;
  tone?: "default" | "danger" | "success";
};

export function Metric({ value, label, tone = "default" }: MetricProps) {
  return (
    <div className={`metric metric-${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
