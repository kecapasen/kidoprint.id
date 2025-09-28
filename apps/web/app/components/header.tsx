import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navItems = [
    { href: "/produk", label: "Produk" },
    { href: "/membership", label: "Membership" },
    { href: "/testimoni", label: "Testimoni" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container mx-auto p-4 lg:p-6 flex justify-between items-center">
        <Button asChild variant="link">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="KidoPrint"
              width={500}
              height={500}
              className="h-12 w-12 lg:h-16 lg:w-16"
            />
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="inline-flex lg:hidden"
            >
              <Menu className="text-foreground h-6 w-6" />
              <span className="sr-only">Buka Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <SheetHeader className="text-left">
              <SheetTitle className="font-baloo font-bold text-2xl">
                Menu Navigasi
              </SheetTitle>
              <SheetDescription>
                Pilih halaman yang ingin kamu kunjungi.
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex-1">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <SheetClose key={item.href}>
                    <Button
                      asChild
                      variant="link"
                      className="text-lg text-foreground justify-start py-6 hover:text-primary transition-colors w-full underline"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </div>
            <Separator />
            <SheetFooter>
              <SheetClose>
                <Button
                  asChild
                  size="lg"
                  className="w-full border border-foreground text-base"
                >
                  <Link href="https://lynk.id/kidoprint.id" className="w-full">
                    Kunjungi Toko
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full text-foreground border border-foreground text-base"
                >
                  <Link
                    href="https://bit.ly/JoinKidoPrintClub"
                    className="w-full"
                  >
                    Daftar KidoPrint Club
                  </Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex gap-6 items-center">
          <Button
            asChild
            variant="link"
            className="text-base text-foreground hover:text-primary transition-colors"
          >
            <Link href="/produk">Produk</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-base text-foreground hover:text-primary transition-colors"
          >
            <Link href="/membership">Membership</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-base text-foreground hover:text-primary transition-colors"
          >
            <Link href="/testimoni">Testimoni</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-base text-foreground hover:text-primary transition-colors"
          >
            <Link href="/tentang">Tentang Kami</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-base text-foreground hover:text-primary transition-colors"
          >
            <Link href="/faq">FAQ</Link>
          </Button>
        </nav>
        <Button className="hidden lg:inline-flex border border-foreground">
          Kunjungi Toko
        </Button>
      </div>
      <Separator className="bg-foreground" />
    </header>
  );
};

export default Header;
