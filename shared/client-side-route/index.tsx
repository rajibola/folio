"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  route: string;
}
export const ClientSideRoute = ({ children, route }: Props) => {
  return <Link href={route}>{children}</Link>;
};
