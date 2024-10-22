import { Copyright } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">

        <p className="flex items-center justify-center gap-x-1">
          <Copyright className="h-4 w-4" /> {new Date().getFullYear()} Evently.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};
