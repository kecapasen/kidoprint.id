"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./components/ui/badge";
import Grid from "./components/grid";
import Link from "next/link";

const popularWorksheets = [
  {
    id: 1,
    title: "Buku Aktivitas Alfabet A-Z",
    age: "Usia 3-5 Tahun",
    imageUrl: "https://placehold.co/400x400/06D6A0/073B4C?text=Alphabet\nFun",
  },
  {
    id: 2,
    title: "Worksheet Mengenal Angka 1-20",
    age: "Usia 3-4 Tahun",
    imageUrl: "https://placehold.co/400x400/FFD166/073B4C?text=Counting\nTime",
  },
  {
    id: 3,
    title: "Paket Latihan Garis & Bentuk",
    age: "Usia 2-3 Tahun",
    imageUrl:
      "https://placehold.co/400x400/EF476F/FFFFFF?text=Tracing\nPractice",
  },
  {
    id: 4,
    title: "Buku Mewarnai Dunia Hewan",
    age: "Usia 2-5 Tahun",
    imageUrl:
      "https://placehold.co/400x400/118AB2/FFFFFF?text=Animal\nColoring",
  },
  {
    id: 5,
    title: "Buku Aktivitas Alfabet A-Z",
    age: "Usia 3-5 Tahun",
    imageUrl: "https://placehold.co/400x400/06D6A0/073B4C?text=Alphabet\nFun",
  },
  {
    id: 6,
    title: "Worksheet Mengenal Angka 1-20",
    age: "Usia 3-4 Tahun",
    imageUrl: "https://placehold.co/400x400/FFD166/073B4C?text=Counting\nTime",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Anakku yang tadinya susah fokus, sekarang jadi anteng ngerjain worksheet dari KidoPrint. Desainnya lucu banget dan beneran edukatif!",
    author: "Bunda Rina",
    avatarUrl: "https://placehold.co/100x100/073B4C/FFFFFF?text=BR",
    role: "Orang Tua",
    plan: "basic",
  },
  {
    id: 2,
    quote:
      "Sebagai guru PAUD, worksheet ini ngebantu banget buat materi ajar. Praktis, tinggal print, dan yang paling penting, murid-murid suka!",
    author: "Ibu Guru Wati",
    avatarUrl: "https://placehold.co/100x100/06D6A0/FFFFFF?text=IW",
    role: "Guru PAUD",
    plan: "club",
  },
];

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <Grid>
        <section className="relative overflow-hidden py-20 text-center">
          <main className="pb-20">
            <Image
              src="/pencil.png"
              className="-z-10 hidden lg:block absolute top-32 left-64 xl:left-72 rotate-270 w-24 h-24"
              alt="KidoPrint"
              width={96}
              height={96}
            />
            <Image
              src="/magic.png"
              className="-z-10 hidden lg:block absolute top-32 right-64 xl:right-72 rotate-[212deg] w-24 h-24"
              alt="KidoPrint"
              width={96}
              height={96}
            />
            <div className="container relative z-10 mx-auto px-6">
              <h1 className="font-baloo text-4xl md:text-6xl font-extrabold text-foreground max-w-3xl mx-auto leading-tight">
                Ubah Waktu Belajar Jadi Petualangan
                <span className="text-primary underline underline-offset-16 text-shadow-foreground">
                  {" "}
                  Paling Seru!
                </span>
              </h1>
              <p className="mt-6 lg:text-lg text-muted-foreground max-w-xl mx-auto">
                Download & print ratusan worksheet edukatif premium untuk anak
                usia 2-6 tahun. Didesain dengan cinta agar si kecil makin
                kreatif dan cerdas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg border border-foreground"
                >
                  Lihat Koleksi Worksheet
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-foreground border border-foreground text-lg"
                >
                  Lihat Sampel Gratis
                </Button>
              </div>
            </div>
          </main>
          <div className="mt-12 px-4">
            <img
              src="https://placehold.co/1000x500/118AB2/FFFFFF?text=Mockup+Worksheet+KidoPrint"
              alt="Mockup worksheet KidoPrint"
              className="mx-auto rounded-2xl border border-foreground w-full max-w-4xl"
            />
          </div>
        </section>
      </Grid>
      <Separator />
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-baloo text-2xl md:text-4xl font-bold">
            Bukan Sekadar Worksheet Biasa
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Image
                src="/palette.png"
                alt="KidoPrint"
                width={64}
                height={64}
              />
              <h3 className="font-baloo text-xl font-bold mt-4">
                Desain Orisinal & Ceria
              </h3>
              <p className="text-muted-foreground mt-2">
                Setiap lembar didesain eksklusif oleh kami, modern dan dijamin
                disukai anak-anak.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/brainstorm.png"
                alt="KidoPrint"
                width={64}
                height={64}
              />
              <h3 className="font-baloo text-xl font-bold mt-4">
                Kurikulum Terarah
              </h3>
              <p className="text-muted-foreground mt-2">
                Materi disusun sesuai tahapan usia untuk mendukung tumbuh
                kembang optimal.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/printer.png"
                alt="KidoPrint"
                width={64}
                height={64}
              />
              <h3 className="font-baloo text-xl font-bold mt-4">
                Praktis & Hemat
              </h3>
              <p className="text-muted-foreground mt-2">
                Download sekali, print berkali-kali. Solusi cerdas untuk
                aktivitas tanpa batas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Separator />
      <Grid>
        <section id="produk" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-baloo text-2xl md:text-4xl font-bold">
              Worksheet Paling Populer Saat Ini
            </h2>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-6 gap-4">
              {popularWorksheets.map((ws) => (
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
                      <p className="font-bold text-base">Rp. 9.000</p>
                    </CardTitle>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Grid>
      <Separator />
      <section id="testimoni" className="bg-muted py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-baloo text-2xl md:text-4xl font-bold">
            Kata Para Bunda Hebat
          </h2>
          <div className="mt-12 grid lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="text-left hover:-translate-y-2 transition-transform duration-300 p-0 justify-between gap-0"
              >
                <CardHeader className="pt-6">
                  <p className="text-muted-foreground italic">
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
                        {testimonial.author.substring(0, 2)}
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
              Siap Bikin Si Kecil Makin Cerdas & Kreatif?
            </h2>
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
                Belanja Semua Produk di Sini!
              </Link>
            </Button>
          </div>
        </section>
      </Grid>
      <Footer />
    </div>
  );
}
