export default function Card({ children, className = "", ...props }) {
  const interactive =
    typeof props.onClick === "function" || props.role === "button";
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${interactive ? "cursor-pointer" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

