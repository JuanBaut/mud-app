import Link from "next/link";
import { Button } from "./button";
import { ReactNode } from "react";

type Props = {
  href: string;
  btnCN?: string;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
};

export default function LinkButton({
  href,
  btnCN,
  children,
  disabled = false,
  className,
  variant = "default",
}: Props) {
  return (
    <>
      <Link href={href} className={className} tabIndex={-1}>
        <Button
          disabled={disabled}
          className={`w-full ${btnCN}`}
          variant={variant}
        >
          {children}
        </Button>
      </Link>
    </>
  );
}
