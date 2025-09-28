"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
const testimonials = [
  {
    id: 1,
    quote:
      "Anak saya yang tadinya susah fokus, sekarang jadi anteng banget ngerjain worksheet dari KidoPrint. Desainnya lucu dan beneran edukatif!",
    author: "Bunda Rina",
    role: "Orang Tua",
    plan: "basic",
    avatarUrl: "https://placehold.co/100x100/EF476F/FFFFFF?text=BR",
  },
  {
    id: 2,
    quote:
      "Sebagai guru PAUD, worksheet ini ngebantu banget buat materi ajar. Praktis, tinggal print, dan yang paling penting, murid-murid suka!",
    author: "Ibu Guru Wati",
    role: "Guru PAUD",
    plan: "club",
    avatarUrl: "https://placehold.co/100x100/06D6A0/FFFFFF?text=IW",
  },
  {
    id: 3,
    quote:
      "Awalnya ragu, tapi ternyata ini investasi terbaik buat perkembangan anakku. Lebih hemat & praktis daripada beli mainan terus-menerus.",
    author: "Ayah Yudi",
    role: "Orang Tua",
    plan: "club",
    avatarUrl: "https://placehold.co/100x100/118AB2/FFFFFF?text=AY",
  },
  {
    id: 4,
    quote:
      "Kualitas gambarnya tajam, nggak pecah pas di-print. Beda banget sama worksheet gratisan. Recommended!",
    author: "Bunda Lita",
    role: "Ibu Rumah Tangga",
    plan: "basic",
    avatarUrl: "https://placehold.co/100x100/FFD166/073B4C?text=BL",
  },
  {
    id: 5,
    quote:
      "Suka banget sama variasi temanya. Anakku jadi nggak gampang bosen karena setiap minggu ada hal baru yang bisa dieksplorasi.",
    author: "Kak Alya",
    role: "Tutor Privat",
    plan: "club",
    avatarUrl: "https://placehold.co/100x100/073B4C/FFFFFF?text=KA",
  },
  {
    id: 6,
    quote:
      "Proses download dan bayarnya gampang banget. Habis bayar, file langsung bisa diakses. Praktis!",
    author: "Bunda Siska",
    role: "Ibu Pekerja",
    plan: "basic",
    avatarUrl: "https://placehold.co/100x100/EF476F/FFFFFF?text=BS",
  },
];

export default function TestimoniPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Grid>
          <section className="relative overflow-hidden py-20 text-center">
            <Image
              src="/comment.png"
              alt="Crayon"
              width={96}
              height={96}
              className="-z-10 hidden lg:block absolute top-32 left-64 xl:left-72 -rotate-12 w-24 h-24"
            />
            <Image
              src="/feedback.png"
              alt="Paper"
              width={96}
              height={96}
              className="-z-10 hidden lg:block absolute top-32 right-64 xl:right-72 rotate-12 w-24 h-24"
            />
            <div className="container relative z-10 mx-auto px-6">
              <h1 className="font-baloo text-4xl md:text-6xl font-extrabold text-foreground max-w-3xl mx-auto leading-tight">
                Apa Kata Para Bunda & Pendidik Hebat?
              </h1>
              <p className="mt-4 lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami senang bisa menjadi bagian dari perjalanan belajar si
                kecil. Lihat cerita inspiratif dari keluarga KidoPrint lainnya!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg border border-foreground"
                >
                  Bagikan Ceritamu!
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-foreground border border-foreground text-lg"
                >
                  Gabung Komunitas WA
                </Button>
              </div>
            </div>
          </section>
        </Grid>
        <Separator />
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="text-left hover:-translate-y-2 transition-transform duration-300 p-0 justify-between gap-0"
                >
                  <CardHeader className="pt-6">
                    <p className="italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </CardHeader>
                  <CardFooter className="pb-6">
                    <div className="flex items-center mt-6">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>
                          {testimonial.author.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <p className="ml-4 font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          {testimonial.plan === "club" && (
                            <Image
                              src="/crown.png"
                              alt="KidoPrint"
                              width={16}
                              height={16}
                              className="inline-block"
                            />
                          )}
                        </div>
                        <p className="ml-4 text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Separator />
        <Grid>
          <section className="py-20">
            <div className="container mx-auto px-6 text-center max-w-2xl">
              <h2 className="font-baloo text-2xl lg:text-4xl font-bold">
                Siap Menciptakan Momen Belajar Seru Versimu Sendiri?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Gabung dengan ribuan keluarga lainnya dan dapatkan akses ke
                ratusan worksheet premium.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto mt-8 font-extrabold text-xl transform hover:scale-105 transition-transform border border-foreground"
              >
                <Link
                  href="https://bit.ly/JoinKidoPrintClub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gabung KidoPrint Club Sekarang!
                </Link>
              </Button>
            </div>
          </section>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
