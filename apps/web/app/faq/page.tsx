"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Grid from "@/components/grid";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
const faqData = [
  {
    icon: "puzzle",
    category: "Seputar Produk KidoPrint",
    questions: [
      {
        q: "Worksheet KidoPrint itu apaan sih?",
        a: "Anggap aja ini 'paket main' digital buat si kecil! Isinya lembaran aktivitas super seru dalam format PDF yang bisa Bunda download dan print sendiri di rumah. Didesain khusus biar belajar nulis, ngitung, dan mewarnai jadi petualangan yang asyik! ✨",
      },
      {
        q: "Bisa dipakai berkali-kali nggak?",
        a: "Tentu aja! Ini enaknya punya produk digital. Setelah di-download, filenya jadi milik Bunda selamanya. Mau di-print 100 kali juga boleh! Jadi, kalau si kecil mau ngulang latihan atau mewarnai dengan warna baru, tinggal print lagi aja. Hemat kan? 😉",
      },
      {
        q: "Materinya cocok nggak buat umur anakku?",
        a: "Aman, Bun! Setiap paket KidoPrint selalu punya label rekomendasi usia yang jelas (misal: 2-3 tahun). Materinya udah kita susun kayak tangga, mulai dari yang paling gampang buat adek-adek sampai yang lebih menantang buat kakak-kakak, jadi pas banget sama tahap perkembangannya.",
      },
    ],
  },
  {
    icon: "card",
    category: "Pembelian & Membership",
    questions: [
      {
        q: "Gimana cara belinya, Kak?",
        a: "Gampang banget, Bun! Tinggal klik link di bio Instagram kami buat mampir ke 'toko' KidoPrint di Lynk.id. Pilih worksheet yang disuka, bayar pakai QRIS atau transfer, dan wusshh... filenya langsung siap di-download! Sat set sat set, langsung bisa main! 🚀",
      },
      {
        q: "Ada langganan bulanan gitu nggak?",
        a: "Ada doong, namanya KidoPrint Club! 👑 Ini buat para Bunda yang mau stok aktivitas tanpa batas. Dengan gabung jadi member, Bunda bakal dapat worksheet baru yang eksklusif tiap minggu dengan harga super hemat. Buat daftar jadi anggota VVIP ini, bisa langsung ngobrol sama Kakak Kreatif via WhatsApp ya!",
      },
    ],
  },
  {
    icon: "documents",
    category: "Download & Cetak Worksheet",
    questions: [
      {
        q: "Habis bayar, filenya dikirim gimana?",
        a: "Begitu pembayaran Bunda kami terima, tim Kakak Kreatif akan langsung kirim link download-nya secepat kilat! Link-nya aman dan bisa dikirim via email atau WhatsApp, sesuai kenyamanan Bunda.",
      },
      {
        q: "Bisa dipake di tablet aja nggak, tanpa di-print?",
        a: "Bisa kok dibuka di tablet atau HP, filenya kan PDF. Tapi... jujur ya, Bun, pengalaman paling serunya itu kalau di-print! Si kecil bisa beneran ngerasain sensasi megang pensil, menggunting kertas, dan mewarnai. Pengalaman 'nyata' ini bagus banget buat perkembangan sensoriknya. 🤗",
      },
      {
        q: "Harus pake kertas khusus buat nge-print?",
        a: "Nggak perlu ribet, Bun! Kertas HVS A4 biasa yang buat nge-print di rumah itu udah oke banget. Tapi kalau mau hasil warnanya lebih 'jreng' dan nggak tembus, boleh coba pakai kertas yang sedikit lebih tebal, kayak kertas gambar. 😉",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Grid>
          <section className="py-20">
            <div className="containetr mx-auto px-6 text-center">
              <h1 className="font-baloo text-4xl md:text-6xl font-extrabold max-w-3xl mx-auto leading-tight">
                Punya Pertanyaan? Yuk,
                <span className="text-primary text-shadow-foreground">
                  {" "}
                  Cari Jawabannya di Sini!
                </span>
              </h1>
              <p className="mt-6 lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Kumpulan jawaban dari pertanyaan yang paling sering ditanyakan
                oleh para bunda dan ayah hebat pengguna KidoPrint.
              </p>
            </div>
          </section>
        </Grid>
        <Separator />
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            {faqData.map((category) => (
              <div key={category.category} className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Image
                    src={`/${category.icon}.png`}
                    alt="KidoPrint"
                    width={32}
                    height={32}
                    className="inline-block"
                  />
                  <h2 className="font-baloo text-2xl md:text-4xl font-bold">
                    {category.category}
                  </h2>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4 y-1"
                >
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-foreground rounded-xl bg-background transition-colors hover:bg-muted"
                    >
                      <AccordionTrigger className="text-left font-semibold px-6 text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <p className="text-muted-foreground">{item.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
        <Separator />
        <Grid>
          <section className="py-20">
            <div className="container mx-auto px-6 text-center max-w-2xl">
              <h2 className="font-baloo text-2xl md:text-4xl font-bold text-center mx-auto">
                Masih Bingung atau Punya Pertanyaan Lain?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tim Kakak Kreatif siap membantu! Jangan ragu untuk menyapa kami
                langsung di WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto mt-8 font-extrabold text-xl transform hover:scale-105 transition-transform border border-foreground"
              >
                <Link
                  href="https://wa.me/6281283874976"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Kami Via WhatsApp
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
