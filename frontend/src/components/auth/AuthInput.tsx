import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <Label className="font-medium text-slate-700">{label}</Label>

      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-xl border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500"
      />
    </div>
  );
}
