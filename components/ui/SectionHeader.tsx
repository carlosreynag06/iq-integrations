type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "wide" | "split";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "wide",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-lede">{body}</p> : null}
    </div>
  );
}
