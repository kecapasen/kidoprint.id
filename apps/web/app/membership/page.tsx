import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import Grid from "@/components/grid"; // asumsi ada komponen Grid mirip homepage
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CheckIcon, X } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function MembershipPage() {
  const benefits = [
    {
      icon: "documents",
      title: "Worksheet Mingguan",
      desc: "Worksheet pack baru & eksklusif setiap minggu.",
    },
    {
      icon: "star",
      title: "Akses Premium",
      desc: "Akses penuh ke seluruh koleksi premium KidoPrint.",
    },
    {
      icon: "piggy-bank",
      title: "Diskon Eksklusif",
      desc: "Diskon 20% untuk semua produk spesial.",
    },
    {
      icon: "puzzle",
      title: "Tips & Ide",
      desc: "Ide aktivitas & tips parenting rutin langsung ke email.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <Grid>
        <section className="py-20">
          <Image
            src="/crown.png"
            className="-z-10 hidden lg:block absolute top-32 left-64 xl:left-72 -rotate-45 w-24 h-24"
            alt="KidoPrint"
            width={96}
            height={96}
          />
          <Image
            src="/star.png"
            className="-z-10 hidden lg:block absolute top-32 right-64 xl:right-72 rotate-270 w-24 h-24"
            alt="KidoPrint"
            width={96}
            height={96}
          />
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-baloo text-4xl md:text-6xl font-extrabold max-w-3xl mx-auto leading-tight">
              Gabung KidoPrint Club!
            </h1>
            <p className="mt-6 lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Dapatkan worksheet baru setiap minggu dan akses ke ratusan koleksi
              premium eksklusif untuk si kecil — semua dirancang agar belajar
              jadi menyenangkan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg border border-foreground"
              >
                <Link
                  href="https://lynk.id/kidoprint/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gabung Sekarang
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-foreground border border-foreground text-lg"
              >
                Download Sampel Gratis
              </Button>
            </div>
          </div>
        </section>
      </Grid>
      <Separator />
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-baloo text-2xl md:text-4xl font-bold">
            Keuntungan Eksklusif Untuk Member
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <Card
                key={i}
                className="hover:-translate-y-2 transition-transform duration-300"
              >
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={`/${b.icon}.png`}
                    alt="KidoPrint"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="font-baloo font-bold text-2xl mt-4">
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <p className="text-muted-foreground mx-auto">{b.desc}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Separator />
      <Grid>
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-baloo text-2xl md:text-4xl font-bold text-center">
              Pilih Paket Terbaik Untukmu
            </h2>
            <Card className="mt-12 overflow-hidden border border-foreground">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg font-semibold w-[40%]">
                      Fitur
                    </TableHead>
                    <TableHead className="text-lg font-bold">
                      Beli Satuan
                    </TableHead>
                    <TableHead className="text-lg font-bold flex items-center gap-2">
                      KidoPrint Club
                      <Image
                        src="/crown.png"
                        alt="KidoPrint"
                        width={24}
                        height={24}
                      />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Akses Produk
                    </TableCell>
                    <TableCell>
                      <X className="inline-block mr-2 h-5 w-5 text-foreground" />
                      Hanya 1 produk / pembelian
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      <CheckIcon className="inline-block mr-2 h-5 w-5" />
                      Akses semua worksheet tanpa batas
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Produk Baru Mingguan
                    </TableCell>
                    <TableCell>
                      <X className="inline-block mr-2 h-5 w-5 text-foreground" />
                      Tidak mendapatkan update baru
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      <CheckIcon className="inline-block mr-2 h-5 w-5" />
                      Dapat worksheet baru setiap minggu
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Harga</TableCell>
                    <TableCell>
                      <X className="inline-block mr-2 h-5 w-5 text-foreground" />
                      Mulai Rp 9.000 / produk
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      <CheckIcon className="inline-block mr-2 h-5 w-5" />
                      Rp 39.000 / bulan (akses semua)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Fleksibilitas
                    </TableCell>
                    <TableCell>
                      <X className="inline-block mr-2 h-5 w-5 text-foreground" />
                      Harus beli satu-satu
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      <CheckIcon className="inline-block mr-2 h-5 w-5" />
                      Bebas download worksheet kapan saja
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>
      </Grid>
      <Separator />
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-baloo text-2xl md:text-4xl font-bold">
            Apa Kata Member Kami?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Card className="text-left border border-foreground p-0 justify-between gap-0">
              <CardHeader className="pt-6">
                <p className="italic text-muted-foreground">
                  "Sejak gabung membership, aku nggak pernah kehabisan ide main
                  sama anak. Setiap minggu ada kejutan baru. Worth it banget!"
                </p>
              </CardHeader>
              <CardFooter className="pb-6">
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AvatarImage
                      src="https://placehold.co/100x100/EF476F/FFFFFF?text=BD"
                      alt="Bunda Dita"
                    />
                    <AvatarFallback>BD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="ml-4 font-semibold text-foreground">
                        Bunda Dita
                      </p>
                      <Image
                        src="/crown.png"
                        alt="KidoPrint"
                        width={16}
                        height={16}
                      />
                    </div>
                    <p className="ml-4 text-muted-foreground text-sm">
                      Member Sejak 2024
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="text-left border border-foreground p-0 justify-between gap-0">
              <CardHeader className="pt-6">
                <p className="italic text-muted-foreground">
                  "Awalnya ragu, tapi ternyata ini investasi terbaik buat
                  perkembangan anakku. Lebih hemat & praktis daripada beli
                  mainan terus-menerus."
                </p>
              </CardHeader>
              <CardFooter className="pb-6">
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AvatarImage
                      src="https://placehold.co/100x100/118AB2/FFFFFF?text=AY"
                      alt="Ayah Yudi"
                    />
                    <AvatarFallback>AY</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="ml-4 font-semibold text-foreground">
                        Ayah Yudi
                      </p>
                      <Image
                        src="/crown.png"
                        alt="KidoPrint"
                        width={16}
                        height={16}
                      />
                    </div>
                    <p className="ml-4 text-muted-foreground text-sm">
                      Member Sejak 2025
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <Separator />
      <Grid>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-baloo text-2xl md:text-4xl font-bold max-w-2xl text-center mx-auto">
              Siap Buka Petualangan Belajar Tanpa Batas?
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
                Gabung KidoPrint Club Sekarang!
              </Link>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Sudah jadi member?{" "}
              <Link href="#" className="underline hover:text-primary">
                Cek koleksi premium kamu di sini
              </Link>
              .
            </p>
          </div>
        </section>
      </Grid>
      <Footer />
    </div>
  );
}
