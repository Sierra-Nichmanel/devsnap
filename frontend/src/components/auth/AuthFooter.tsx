import { Link } from "react-router-dom";

interface Props {
  text: string;
  linkText: string;
  link: string;
}

export default function AuthFooter({ text, linkText, link }: Props) {
  return (
    <p className="mt-8 text-center text-sm text-slate-600">
      {text}

      <Link
        to={link}
        className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
      >
        {linkText}
      </Link>
    </p>
  );
}
