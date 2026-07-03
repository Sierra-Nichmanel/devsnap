import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PasswordInput({ value, onChange }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <Label>Password</Label>

      <div className="relative">
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter your password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 rounded-xl pr-12"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 text-slate-500 hover:text-slate-700"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
