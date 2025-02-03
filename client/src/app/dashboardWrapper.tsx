import React from "react";
import Navbar from "@/app/(components)/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gra50 flex min-h-screen w-full text-gray-900">
      {/* sidebar */}
      sidebar
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
