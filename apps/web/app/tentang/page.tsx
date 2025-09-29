"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="bg-background text-foreground">
        <Grid>
          <section className="relative py-20">
            <Image
              src="/arrow.png"
              alt="Arrow"
              width={512}
              height={512}
              className="-z-10 hidden lg:block absolute top-32 left-64 xl:left-72 rotate-270 w-24 h-24 xl:w-32 xl:h-32"
            />
            <Image
              src="/star.png"
              className="-z-10 hidden lg:block absolute top-32 right-64 xl:right-72 rotate-270 w-24 h-24 xl:w-32 xl:h-32"
              alt="Arrow"
              width={512}
              height={512}
            />
            <div className="container mx-auto px-6 text-center flex flex-col items-center">
              <Avatar className="h-48 w-48">
                <AvatarFallback className="text-6xl font-bold">
                  RM
                </AvatarFallback>
                <AvatarImage
                  src="/profile.png"
                  alt="Avatar Kakak Kreatif"
                  className="object-cover"
                />
              </Avatar>
              <h1 className="font-baloo text-4xl lg:text-6xl font-extrabold text-foreground max-w-3xl mx-auto leading-tight mt-6">
                Yuk, Kenalan dengan Kakak Kreatif di Balik{" "}
                <span className="text-primary text-shadow-foreground">
                  {" "}
                  KidoPrint!
                </span>
              </h1>
              <blockquote className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto italic">
                "Kami percaya setiap anak bisa belajar dengan cara yang seru,
                kreatif, dan penuh warna."
              </blockquote>
            </div>
          </section>
        </Grid>
        <Separator />
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-baloo text-2xl md:text-4xl font-bold">
                  Perjalanan Kami
                </h2>
                <p className="mt-4 text-muted-foreground text-justify">
                  KidoPrint lahir dari sebuah mimpi sederhana: membuat waktu
                  belajar anak tidak lagi terasa seperti beban. Berawal dari
                  coretan iseng untuk keponakan, kami sadar ada banyak orang tua
                  di luar sana yang mencari cara baru untuk menumbuhkan rasa
                  cinta belajar pada si kecil.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                  Dari situlah, perjalanan kami dimulai. Setiap lembar worksheet
                  kami rancang dengan sepenuh hati, menggabungkan prinsip
                  edukasi dengan desain yang ceria dan modern.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <Image
                  src="/map.png"
                  width={256}
                  height={256}
                  alt="Ilustrasi perjalanan KidoPrint"
                  className="max-w-md"
                />
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <Grid>
          <section className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-baloo text-2xl md:text-4xl font-bold">
                Visi & Misi Kami
              </h2>
              <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-baloo text-2xl font-bold">
                      Visi Kami
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-justify italic">
                      "Membantu jutaan orang tua di Indonesia menyediakan media
                      belajar yang seru dan berkualitas."
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-baloo text-2xl font-bold">
                      Misi Kami
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-justify">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-1" />
                        <span className="text-muted-foreground">
                          Menyediakan worksheet inovatif yang sesuai dengan
                          tahapan tumbuh kembang anak.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-1" />
                        <span className="text-muted-foreground">
                          Mengedukasi dan memberdayakan orang tua dengan ide-ide
                          aktivitas kreatif.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-1" />
                        <span className="text-muted-foreground">
                          Membuat proses belajar menjadi momen bonding yang
                          menyenangkan bagi keluarga.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </Grid>
        <Separator />
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-baloo text-2xl md:text-4xl font-bold">
              Kenapa Orang Tua Memilih KidoPrint?
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src="/palette.png"
                    alt="KidoPrint"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="font-baloo font-bold text-2xl mt-4">
                    Desain Orisinal & Ceria
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <p className="text-muted-foreground">
                    Setiap lembar didesain eksklusif oleh kami, modern dan
                    dijamin disukai anak-anak.
                  </p>
                </CardFooter>
              </Card>
              <Card className="hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src="/brainstorm.png"
                    alt="KidoPrint"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="font-baloo font-bold text-2xl mt-4">
                    Kurikulum Terarah
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <p className="text-muted-foreground">
                    Materi disusun sesuai tahapan usia untuk mendukung tumbuh
                    kembang optimal.
                  </p>
                </CardFooter>
              </Card>
              <Card className="hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src="/printer.png"
                    alt="KidoPrint"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="font-baloo font-bold text-2xl mt-4">
                    Praktis & Hemat
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <p className="text-muted-foreground">
                    Download sekali, print berkali-kali. Solusi cerdas untuk
                    aktivitas tanpa batas.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <Separator />
        <Grid>
          <section className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-baloo text-2xl md:text-4xl font-bold max-w-2xl mx-auto">
                Ikut Jadi Bagian dari Perjalanan Ini!
              </h2>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg border border-foreground"
                >
                  Lihat Worksheet Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg border border-foreground"
                >
                  Download Sampel Gratis
                </Button>
              </div>
            </div>
          </section>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}
