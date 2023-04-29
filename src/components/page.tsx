import React, { ReactNode } from "react";

export default function Page({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
