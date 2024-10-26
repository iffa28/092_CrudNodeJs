import express, { Router } from "express";

const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        tahun: 2021,
    },
    {
        merk: "Porsche",
        model: "Sport",
        tahun: 2024,
    },
    {
        merk: "Honda",
        model: "Civic",
        tahun: 2022,
    },
    {
        merk: "BMW",
        model: "X5",
        tahun: 2023,
    },
    {
        merk: "Mercedes-Benz",
        model: "GLE",
        tahun: 2020,
    },
    {
        merk: "Hyundai",
        model: "Palisade",
        tahun: 2023,
    },
    {
        merk: "Mazda",
        model: "CX-5",
        tahun: 2021,
    }
];

const bengkel = [
    {
        nama: "Bengkel Sejahtera",
        alamat: "Jl. Merdeka No. 10",
        spesialisasi: ["Toyota", "Honda"],
        telepon: "0211234567",
    },
    {
        nama: "Auto Repair Center",
        alamat: "Jl. Gatot Subroto No. 88",
        spesialisasi: ["BMW", "Mercedes-Benz"],
        telepon: "0217654321",
    },
    {
        nama: "Servis Mobil Mandiri",
        alamat: "Jl. Kebon Jeruk No. 5",
        spesialisasi: ["Mitsubishi", "Suzuki"],
        telepon: "0219876543",
    },
    {
        nama: "Bengkel Mobil Cemerlang",
        alamat: "Jl. Siliwangi No. 33",
        spesialisasi: ["Nissan", "Daihatsu"],
        telepon: "0213456789",
    },
    {
        nama: "Bengkel Utama",
        alamat: "Jl. Raya No. 42",
        spesialisasi: ["Ford", "Mazda"],
        telepon: "0211238901",
    }
];

const pemilik = [
    {
        nama: "Felix",
        alamat: "Jl. Sudirman No. 23",
        telepon: "08123456789",
        mobil: "Toyota Avanza",
    },
    {
        nama: "Seungmin",
        alamat: "Jl. Thamrin No. 45",
        telepon: "08129876543",
        mobil: "Porsche Sport",
    },
    {
        nama: "Bangchan",
        alamat: "Jl. Merdeka No. 12",
        telepon: "08234567890",
        mobil: "Honda Civic",
    },
    {
        nama: "Hyunjin",
        alamat: "Jl. Gatot Subroto No. 77",
        telepon: "08345678901",
        mobil: "BMW X5",
    },
    {
        nama: "Leeknow",
        alamat: "Jl. Diponegoro No. 54",
        telepon: "08456789012",
        mobil: "Hyundai Palisade",
    }
];


const sparePart = [
    {
        partName: "Filter Oli",
        mobil: "Toyota Avanza",
        kompatibel: ["Toyota Avanza", "Toyota Innova"],
        harga: 150000,
        ketersediaan: true
    },
    {
        partName: "Kampas Rem",
        mobil: "Porsche Sport",
        kompatibel: ["Porsche Sport", "Porsche Carrera"],
        harga: 3500000,
        ketersediaan: true
    },
    {
        partName: "Baterai",
        mobil: "Honda Civic",
        kompatibel: ["Honda Civic", "Honda Accord"],
        harga: 1200000,
        ketersediaan: true
    },
    {
        partName: "Lampu Depan",
        mobil: "BMW X5",
        kompatibel: ["BMW X5", "BMW X6"],
        harga: 2500000,
        ketersediaan: false
    },
    {
        partName: "Filter Udara",
        mobil: "Hyundai Palisade",
        kompatibel: ["Hyundai Palisade", "Hyundai Tucson"],
        harga: 300000,
        ketersediaan: true
    }
];

const asuransi = [
    {
        namaPerusahaan: "Asuransi Mobil Aman",
        jenisAsuransi: "All Risk",
        polis: "AM123456",
        premi: 1200000,
        masaBerlaku: "2024-01-01 sampai 2025-01-01",
        pemilik: "Felix",
    },
    {
        namaPerusahaan: "Asuransi Jaya",
        jenisAsuransi: "Total Loss Only",
        polis: "AJ789012",
        premi: 800000,
        masaBerlaku: "2023-06-01 sampai 2024-06-01",
        pemilik: "Seungmin",
    },
    {
        namaPerusahaan: "Asuransi Sehat",
        jenisAsuransi: "Comprehensive",
        polis: "AS123987",
        premi: 1500000,
        masaBerlaku: "2024-03-01 sampai 2025-03-01",
        pemilik: "Leeknow",
    }
];

router.get("/", (req, res) => {
    res.send(mobil);
});

router.get("/pemilik", (req, res) => {
    res.send(pemilik);
});

router.get("/bengkel", (req, res) => {
    res.send(bengkel);
});

router.get("/sparePart", (req, res) => {
    res.send(sparePart);
});

router.get("/asuransi", (req, res) => {
    res.send(asuransi);
});

export default router;