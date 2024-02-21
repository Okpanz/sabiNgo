import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="lg:max-w-[1300px] md:max-w-[764px] w-5/6 mx-auto">
      {" "}
      {children}
    </div>
  );
}
