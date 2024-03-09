import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children} <p>pagesLayout</p>
    </>
  );
};

export default PagesLayout;
