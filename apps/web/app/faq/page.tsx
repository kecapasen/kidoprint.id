"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Grid from "@/components/grid";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
const faqData = [
  {
    icon: "puzzle",
    category: "💡 Tentang Produk Worksheet",
    questions: [
      {
        q: "Apa itu worksheet KidoPrint?",
        a: "Worksheet KidoPrint adalah lembar aktivitas edukatif dalam format PDF yang bisa diunduh dan dicetak. Dirancang khusus untuk anak usia 2–6 tahun agar proses belajar terasa lebih menyenangkan dan interaktif.",
      },
      {
        q: "Apakah worksheet-nya bisa dipakai ulang?",
        a: "Bisa banget! Karena produk kami digital, setelah diunduh, worksheet bisa Bunda cetak berkali-kali tanpa batas. Cocok untuk latihan berulang atau jika si kecil ingin mencoba mewarnai dengan cara berbeda.",
      },
      {
        q: "Apakah materinya sesuai untuk usia anak saya?",
        a: "Tentu. Setiap produk kami beri label rekomendasi usia yang jelas (misal: 2-3 tahun, 4-5 tahun). Materinya kami susun secara bertahap, dari pengenalan dasar hingga aktivitas yang lebih kompleks, sesuai dengan milestone tumbuh kembang anak.",
      },
    ],
  },
  {
    icon: "card",
    category: "💳 Pembelian & Membership",
    questions: [
      {
        q: "Gimana cara beli worksheet satuan?",
        a: "Sangat mudah! Bunda bisa langsung mengunjungi etalase kami di Lynk.id (link ada di bio Instagram). Cukup pilih produk, lakukan pembayaran via QRIS atau transfer, lalu worksheet siap diunduh.",
      },
      {
        q: "Apakah ada sistem langganan (membership)?",
        a: "Ada, kami punya KidoPrint Club! Dengan bergabung menjadi member, Bunda akan mendapatkan worksheet premium baru setiap minggu dengan harga yang jauh lebih hemat. Untuk pendaftaran membership, saat ini kami layani secara personal melalui WhatsApp.",
      },
    ],
  },
  {
    icon: "documents",
    category: "🧾 Download & Penggunaan Worksheet",
    questions: [
      {
        q: "Setelah bayar, gimana cara download worksheet-nya?",
        a: "Setelah pembayaran dikonfirmasi, Bunda akan segera menerima link download worksheet yang aman melalui email atau WhatsApp, tergantung di mana Bunda melakukan konfirmasi.",
      },
      {
        q: "Apakah worksheet-nya bisa dipakai di HP atau tablet?",
        a: "Bisa. File kami berformat PDF yang bisa dibuka di semua perangkat. Namun, kami sangat merekomendasikan untuk mencetaknya di kertas agar si kecil bisa merasakan pengalaman belajar sensorik (menulis, mewarnai, menggunting) secara langsung.",
      },
      {
        q: "Saya butuh kertas jenis apa untuk mencetak?",
        a: "Kertas HVS biasa (ukuran A4, 70-80 gsm) sudah sangat cukup untuk sebagian besar aktivitas. Untuk hasil mewarnai yang lebih maksimal, Bunda bisa menggunakan kertas yang sedikit lebih tebal.",
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
                <h2 className="font-baloo text-2xl md:text-4xl font-bold mb-6">
                  {category.category}
                </h2>
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
