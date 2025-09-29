"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import Grid from "@/components/grid";
import Image from "next/image";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const productWorksheets = [
  {
    id: 1,
    title: "Mengenal Warna Dasar",
    age: "Usia 2-4 Tahun",
    imageUrl: "https://placehold.co/400x400/06D6A0/073B4C?text=Color\nMatch",
    price: "Rp. 9.000",
  },
  {
    id: 2,
    title: "Belajar Menghitung Buah",
    age: "Usia 3-5 Tahun",
    imageUrl: "https://placehold.co/400x400/FFD166/073B4C?text=Fruit\nCounting",
    price: "Rp. 9.000",
  },
  {
    id: 3,
    title: "Tracing Huruf A-Z",
    age: "Usia 3-6 Tahun",
    imageUrl: "https://placehold.co/400x400/EF476F/FFFFFF?text=Letter\nTracing",
    price: "Rp. 9.000",
  },
  {
    id: 4,
    title: "Dunia Dinosaurus (Mewarnai)",
    age: "Usia 2-5 Tahun",
    imageUrl: "https://placehold.co/400x400/118AB2/FFFFFF?text=Dino\nWorld",
    price: "Rp. 9.000",
  },
  {
    id: 5,
    title: "Aktivitas Gunting & Tempel",
    age: "Usia 4-6 Tahun",
    imageUrl: "https://placehold.co/400x400/073B4C/FFFFFF?text=Cut+%26\nPaste",
    price: "Rp. 9.000",
  },
  {
    id: 6,
    title: "Mencari Jalan (Maze)",
    age: "Usia 4-6 Tahun",
    imageUrl: "https://placehold.co/400x400/06D6A0/073B4C?text=Maze\nFun",
    price: "Rp. 9.000",
  },
  {
    id: 7,
    title: "Bentuk Geometri Dasar",
    age: "Usia 2-4 Tahun",
    imageUrl: "https://placehold.co/400x400/FFD166/073B4C?text=Shapes",
    price: "Rp. 9.000",
  },
  {
    id: 8,
    title: "My First English Words",
    age: "Usia 4-6 Tahun",
    imageUrl: "https://placehold.co/400x400/EF476F/FFFFFF?text=English\nFun",
    price: "Rp. 9.000",
  },
  {
    id: 9,
    title: "Mengenal Hewan Ternak",
    age: "Usia 2-5 Tahun",
    imageUrl: "https://placehold.co/400x400/118AB2/FFFFFF?text=Farm\nAnimals",
    price: "Rp. 9.000",
  },
  {
    id: 10,
    title: "Aktivitas Luar Angkasa",
    age: "Usia 4-6 Tahun",
    imageUrl: "https://placehold.co/400x400/073B4C/FFFFFF?text=Outer\nSpace",
    price: "Rp. 9.000",
  },
  {
    id: 11,
    title: "Belajar Menulis Angka",
    age: "Usia 3-5 Tahun",
    imageUrl: "https://placehold.co/400x400/06D6A0/073B4C?text=123\nWrite",
    price: "Rp. 9.000",
  },
  {
    id: 12,
    title: "Mewarnai Transportasi",
    age: "Usia 2-5 Tahun",
    imageUrl: "https://placehold.co/400x400/FFD166/073B4C?text=Vehicles",
    price: "Rp. 9.000",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Grid>
          <section className="py-20">
            <Image
              src="/crayon.png"
              alt="Crayon"
              width={96}
              height={96}
              className="-z-10 hidden lg:block absolute top-32 left-64 xl:left-72 rotate-270 w-24 h-24"
            />
            <Image
              src="/documents.png"
              alt="Paper"
              width={96}
              height={96}
              className="-z-10 hidden lg:block absolute top-32 right-64 xl:right-72 -rotate-45 w-24 h-24"
            />
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-baloo text-4xl md:text-6xl font-extrabold max-w-3xl mx-auto leading-tight">
                Pilih Worksheet Seru untuk{" "}
                <span className="text-primary text-shadow-foreground">
                  {" "}
                  Anakmu!
                </span>
              </h1>
              <p className="mt-4 text-muted-foreground">
                Filter berdasarkan usia, tema, atau jenis aktivitas. Belajar
                jadi menyenangkan setiap hari ✨
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg border border-foreground"
                >
                  Lihat Sampel Gratis
                </Button>
              </div>
            </div>
          </section>
        </Grid>
        <Separator />
        <section className="bg-muted py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-baloo text-2xl md:text-4xl font-bold">
              Semua Worksheet Tersedia
            </h2>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-6 gap-4">
              {productWorksheets.map((ws) => (
                <Card
                  key={ws.id}
                  className="pt-0 overflow-hidden text-left transform hover:-translate-y-2 transition-transform duration-300 border border-foreground cursor-pointer"
                >
                  <CardHeader className="p-0 relative aspect-square border-b border-foreground">
                    <Image
                      src={ws.imageUrl}
                      alt={ws.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <Badge className="absolute left-4 top-4">{ws.age}</Badge>
                  </CardHeader>
                  <CardFooter>
                    <CardTitle className="text-sm flex flex-col">
                      <p className="line-clamp-1">{ws.title}</p>
                      <p className="font-bold text-base">{ws.price}</p>
                    </CardTitle>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                className="px-8 py-3 text-lg font-bold border border-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </section>
        <Separator />
        <Grid>
          <section className="py-20">
            <div className="container mx-auto px-6 text-center max-w-2xl">
              <h2 className="font-baloo text-2xl md:text-4xl font-bold text-center mx-auto">
                Coba Worksheet Gratis Sekarang!
              </h2>
              <p className="mt-4 text-muted-foreground">
                Download worksheet versi gratis dan rasakan keseruannya sebelum
                membeli 💫
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto mt-8 font-extrabold text-xl transform hover:scale-105 transition-transform border border-foreground"
              >
                <Link href="/sampel-gratis">Lihat Sampel Gratis</Link>
              </Button>
            </div>
          </section>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
