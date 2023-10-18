import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex-center mx-auto paddings w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="h-[274px] w-full rounded-lg bg-slate-500" />
      </section>

      <section className="mt-6 sm:mt-20 w-full flex flex-col">
        <Skeleton className="h-10 w-56 rounded-lg bg-slate-500" />
        <div className="mt-12 flex w-full justify-center gap-16 sm:justify-start flex-wrap">
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-slate-500" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-slate-500" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-slate-500" />
        </div>
      </section>
    </main>
  );
};

export default loading;
