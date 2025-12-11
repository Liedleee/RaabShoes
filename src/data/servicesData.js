import { Truck, Sparkles, Award } from "lucide-react";

export const services = [
  {
    title: "Deep Clean",
    description:
      "Pembersihan menyeluruh untuk semua jenis sepatu, termasuk kotoran yang menempel di bagian terdalam dan sol sepatu.",
    icon: Sparkles,
    color: "blue", // warna biru menandakan kebersihan dan kesegaran
    features: [
      "Membersihkan hingga ke sela-sela sepatu",
      "Menghilangkan noda membandel",
      "Aman untuk semua bahan sepatu",
    ],
    price: "20.000",
  },
  {
    title: "Fast Clean",
    description:
      "Cuci cepat untuk sepatu sehari-hari agar selalu terlihat bersih dan rapi dalam waktu singkat.",
    icon: Truck, // icon delivery/cepat cocok untuk fast service
    color: "orange", // warna oranye memberi kesan cepat dan energik
    features: [
      "Proses cepat hanya 1-2 jam",
      "Hasil bersih maksimal",
      "Cocok untuk sepatu sehari-hari",
    ],
    price: "15.000",
  },
  {
    title: "Woman Shoes",
    description: "Cat ulang sepatu agar terlihat baru.",
    icon: Award,
    color: "amber",
    features: ["Warna cerah", "Tahan lama"],
    price: "15.000",
  },
];
