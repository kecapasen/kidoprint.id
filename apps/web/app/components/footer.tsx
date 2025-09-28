import React from "react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 border-t border-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KidoPrint. Dibuat dengan ❤️ untuk
          anak Indonesia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
