// Data referensi Indonesia dengan nama-nama khas Yogyakarta
const namaLaki = [
  "Ahmad Rizki",
  "Budi Santoso",
  "Dedi Kurniawan",
  "Eko Prasetyo",
  "Fajar Nugroho",
  "Gunawan Setiadi",
  "Hadi Wijaya",
  "Irfan Hakim",
  "Joko Susilo",
  "Kurnia Rahman",
  "Lukman Hakim",
  "Made Suwandi",
  "Nur Hidayat",
  "Oki Permana",
  "Putra Mahardika",
  "Rudi Hartono",
  "Sigit Pramono",
  "Toni Sukirno",
  "Untung Surapati",
  "Wahyu Nugroho",
  "Yanto Wibowo",
  "Agus Setiawan",
  "Bambang Sutrisno",
  "Cahyo Purnomo",
  "Dwi Atmoko",
];

const namaPerempuan = [
  "Aisyah Rahman",
  "Bunga Lestari",
  "Citra Dewi",
  "Diah Permata",
  "Eka Sari",
  "Fitri Handayani",
  "Gita Maharani",
  "Hani Puspita",
  "Indah Lestari",
  "Jihan Putri",
  "Kartika Sari",
  "Lina Wulandari",
  "Maya Safitri",
  "Nita Anggraini",
  "Oktavia Nur",
  "Putri Rahayu",
  "Ratna Sari",
  "Siti Nurhaliza",
  "Tri Wahyuni",
  "Utin Puspitasari",
  "Vera Wati",
  "Winda Sari",
  "Yuni Astuti",
  "Zahra Aulia",
  "Dewi Sartika",
];

const tempatLahir = [
  "Yogyakarta",
  "Sleman",
  "Bantul",
  "Kulon Progo",
  "Gunung Kidul",
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Solo",
  "Klaten",
  "Purworejo",
  "Magelang",
  "Kebumen",
];

const agama = ["ISLAM", "KRISTEN", "KATOLIK", "HINDU", "BUDHA"];

// Pendidikan berdasarkan level
const pendidikanLevel = {
  RENDAH: [
    "TIDAK/BELUM SEKOLAH",
    "BELUM TAMAT SD/SEDERAJAT",
    "TAMAT SD/SEDERAJAT",
  ],
  MENENGAH: ["SLTP/SEDERAJAT", "SLTA/SEDERAJAT"],
  TINGGI: [
    "DIPLOMA I/II",
    "AKADEMI/DIPLOMA III/S.MUDA",
    "DIPLOMA IV/STRATA I",
    "STRATA II",
    "STRATA III",
  ],
};

// Pekerjaan berdasarkan pendidikan
const pekerjaanByPendidikan = {
  RENDAH: [
    "BELUM/TIDAK BEKERJA",
    "MENGURUS RUMAH TANGGA",
    "BURUH HARIAN LEPAS",
    "BURUH TANI/PERKEBUNAN",
    "PEMBANTU RUMAH TANGGA",
    "TUKANG BATU",
    "TUKANG KAYU",
    "TUKANG JAHIT",
    "MEKANIK",
    "JURU MASAK",
    "PEDAGANG",
    "SOPIR",
    "PETANI/PEKEBUN",
    "PERANGKAT DESA",
  ],
  MENENGAH: [
    "KARYAWAN SWASTA",
    "KARYAWAN HONORER",
    "INDUSTRI",
    "KONSTRUKSI",
    "TRANSPORTASI",
    "PERDAGANGAN",
    "SENIMAN",
    "WARTAWAN",
    "WIRASWASTA",
    "OJEK ONLINE",
    "DRIVER",
    "SALES",
  ],
  TINGGI: [
    "PEGAWAI NEGERI SIPIL",
    "TNI",
    "POLRI",
    "KARYAWAN BUMN",
    "KARYAWAN BUMD",
    "DOSEN",
    "GURU",
    "PENGACARA",
    "ARSITEK",
    "AKUNTAN",
    "KONSULTAN",
    "DOKTER",
    "BIDAN",
    "PERAWAT",
    "APOTEKER",
    "PENELITI",
  ],
};

// Data spesifik Ambarketawang dengan 5 dusun
const dusunData = {
  BODEH: {
    maxRW: 5,
    maxRT: 8,
    jalan: [
      "Jl. Bodeh Raya",
      "Jl. Bodeh Timur",
      "Jl. Bodeh Barat",
      "Jl. Bodeh Utara",
      "Jl. Bodeh Tengah",
    ],
  },
  DEPOK: {
    maxRW: 3,
    maxRT: 7,
    jalan: [
      "Jl. Depok Raya",
      "Jl. Depok Indah",
      "Jl. Depok Makmur",
      "Jl. Depok Sejahtera",
      "Jl. Depok Asri",
    ],
  },
  PATUKAN: {
    maxRW: 4,
    maxRT: 9,
    jalan: [
      "Jl. Patukan Raya",
      "Jl. Patukan Timur",
      "Jl. Patukan Barat",
      "Jl. Patukan Tengah",
      "Jl. Patukan Indah",
    ],
  },
  "GAMPING KIDUL": {
    maxRW: 5,
    maxRT: 14,
    jalan: [
      "Jl. Gamping Kidul Raya",
      "Jl. Gamping Kidul Timur",
      "Jl. Gamping Kidul Barat",
      "Jl. Gamping Kidul Tengah",
      "Jl. Gamping Kidul Indah",
    ],
  },
  "MEJING LOR": {
    maxRW: 5,
    maxRT: 15,
    jalan: [
      "Jl. Mejing Lor Raya",
      "Jl. Mejing Lor Timur",
      "Jl. Mejing Lor Barat",
      "Jl. Mejing Lor Tengah",
      "Jl. Mejing Lor Indah",
    ],
  },
};

const dusunNames = Object.keys(dusunData);

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk distribusi normal (Box-Muller transform)
function randomNormal(mean, stdDev) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();

  const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return Math.max(25, Math.min(75, Math.round(z * stdDev + mean)));
}

// Fungsi untuk menentukan berdasarkan probabilitas
function getByProbability(options) {
  const rand = Math.random();
  let cumulativeProb = 0;

  for (let option of options) {
    cumulativeProb += option.probability;
    if (rand <= cumulativeProb) {
      return option.value;
    }
  }
  return options[options.length - 1].value;
}

function generateNIK() {
  return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join(
    ""
  );
}

function generateKK() {
  return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join(
    ""
  );
}

function generateRandomDate(startYear, endYear) {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

function generateAlamat(specificDusun = null) {
  const selectedDusun = specificDusun || getRandomElement(dusunNames);
  const dusunInfo = dusunData[selectedDusun];

  const selectedJalan = getRandomElement(dusunInfo.jalan);
  const rt = String(getRandomNumber(1, dusunInfo.maxRT)).padStart(3, "0");
  const rw = String(getRandomNumber(1, dusunInfo.maxRW)).padStart(3, "0");

  return {
    alamat: `${selectedJalan} No. ${getRandomNumber(1, 150)}`,
    rt: rt,
    rw: rw,
    dusun: selectedDusun,
    kelurahan: "AMBARKETAWANG",
    kecamatan: "GAMPING",
    kabupaten: "SLEMAN",
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    kodePos: "55294",
  };
}

function getPendidikanByAge(umur) {
  if (umur < 5) return "TIDAK/BELUM SEKOLAH";
  if (umur < 7) return "BELUM TAMAT SD/SEDERAJAT";
  if (umur < 13) return "TAMAT SD/SEDERAJAT";
  if (umur < 16) return "SLTP/SEDERAJAT";
  if (umur < 19) return "SLTA/SEDERAJAT";

  // Untuk dewasa, distribusi berdasarkan probabilitas (wilayah urban Yogyakarta)
  const rand = Math.random();
  if (rand < 0.3) return getRandomElement(pendidikanLevel.MENENGAH);
  if (rand < 0.8) return getRandomElement(pendidikanLevel.TINGGI.slice(0, 3));
  return getRandomElement(pendidikanLevel.TINGGI);
}

function getPekerjaanByEducationAndAge(pendidikan, umur, jenisKelamin) {
  if (umur < 5) return "BELUM/TIDAK BEKERJA";
  if (umur < 18) return "PELAJAR/MAHASISWA";
  if (umur > 65)
    return Math.random() > 0.3 ? "PENSIUNAN" : "BELUM/TIDAK BEKERJA";

  // Untuk perempuan, ada kemungkinan mengurus rumah tangga
  if (
    jenisKelamin === "P" &&
    umur >= 20 &&
    umur <= 55 &&
    Math.random() < 0.25
  ) {
    return "MENGURUS RUMAH TANGGA";
  }

  // Tentukan level pendidikan
  let levelPendidikan = "RENDAH";
  if (pendidikanLevel.MENENGAH.includes(pendidikan))
    levelPendidikan = "MENENGAH";
  if (pendidikanLevel.TINGGI.includes(pendidikan)) levelPendidikan = "TINGGI";

  return getRandomElement(pekerjaanByPendidikan[levelPendidikan]);
}

function generateBasicMember(familyAgama, jenisKelamin, umur) {
  const nama =
    jenisKelamin === "L"
      ? getRandomElement(namaLaki)
      : getRandomElement(namaPerempuan);
  const currentYear = new Date().getFullYear();
  const tahunLahir = currentYear - umur;

  // Agama: 90% sama dengan keluarga, 10% beda
  let agamaMember = familyAgama;
  if (Math.random() < 0.1) {
    agamaMember = getRandomElement(agama.filter((a) => a !== familyAgama));
  }

  const pendidikanLevel = getPendidikanByAge(umur);
  const pekerjaanLevel = getPekerjaanByEducationAndAge(
    pendidikanLevel,
    umur,
    jenisKelamin
  );

  return {
    nik: generateNIK(),
    nama: nama,
    jenisKelamin: jenisKelamin,
    tempatLahir: getRandomElement(tempatLahir),
    tanggalLahir: generateRandomDate(tahunLahir, tahunLahir),
    agama: agamaMember,
    pendidikan: pendidikanLevel,
    jenisPekerjaan: pekerjaanLevel,
    umur: umur,
    kewarganegaraan: Math.random() > 0.98 ? "WNA" : "WNI",
  };
}

function generateKepalaKeluarga(familyAgama) {
  // 82% Laki-laki, 18% Perempuan
  const jenisKelamin = Math.random() < 0.82 ? "L" : "P";

  // Usia dengan distribusi normal, puncak di 45 tahun
  const umur = randomNormal(45, 10);

  const kepala = generateBasicMember(familyAgama, jenisKelamin, umur);
  kepala.statusHubunganKeluarga = "KEPALA KELUARGA";

  // Status pernikahan berdasarkan jenis kelamin
  if (jenisKelamin === "L") {
    // Laki-laki: 95% Kawin, 3% Cerai Mati, 2% Cerai Hidup
    kepala.statusPernikahan = getByProbability([
      { value: "KAWIN", probability: 0.95 },
      { value: "CERAI MATI", probability: 0.03 },
      { value: "CERAI HIDUP", probability: 0.02 },
    ]);
  } else {
    // Perempuan: 65% Cerai Mati, 25% Cerai Hidup, 7% Kawin, 3% Belum Kawin
    kepala.statusPernikahan = getByProbability([
      { value: "CERAI MATI", probability: 0.65 },
      { value: "CERAI HIDUP", probability: 0.25 },
      { value: "KAWIN", probability: 0.07 },
      { value: "BELUM KAWIN", probability: 0.03 },
    ]);
  }

  return kepala;
}

function generatePasangan(kepala, familyAgama) {
  if (kepala.statusPernikahan !== "KAWIN") return null;

  // Jenis kelamin kebalikan dari KRT
  const jenisKelamin = kepala.jenisKelamin === "L" ? "P" : "L";

  // Usia +/- 0-5 tahun dari KRT
  const selisihUmur = getRandomNumber(-5, 5);
  const umur = Math.max(18, Math.min(80, kepala.umur + selisihUmur));

  const pasangan = generateBasicMember(familyAgama, jenisKelamin, umur);
  pasangan.statusPernikahan = "KAWIN";
  pasangan.statusHubunganKeluarga = jenisKelamin === "P" ? "ISTRI" : "SUAMI";

  return pasangan;
}

function generateAnak(kepala, familyAgama) {
  const statusKawin = kepala.statusPernikahan;
  if (!["KAWIN", "CERAI HIDUP", "CERAI MATI"].includes(statusKawin)) return [];

  // Tentukan jumlah anak: 0 (20%), 1 (35%), 2 (35%), 3 (8%), 4+ (2%)
  const jumlahAnak = getByProbability([
    { value: 0, probability: 0.2 },
    { value: 1, probability: 0.35 },
    { value: 2, probability: 0.35 },
    { value: 3, probability: 0.08 },
    { value: 4, probability: 0.02 },
  ]);

  const anakList = [];

  for (let i = 0; i < jumlahAnak; i++) {
    // Usia anak harus (usia KRT) - (minimal 18 tahun)
    const maxUmurAnak = kepala.umur - 18;
    if (maxUmurAnak <= 0) continue; // Skip jika KRT terlalu muda

    const umurAnak = getRandomNumber(0, maxUmurAnak);
    const jenisKelamin = Math.random() < 0.5 ? "L" : "P";

    const anak = generateBasicMember(familyAgama, jenisKelamin, umurAnak);
    anak.statusHubunganKeluarga = "ANAK";

    // Status pernikahan anak hampir selalu "Belum Kawin"
    if (umurAnak < 17) {
      anak.statusPernikahan = "BELUM KAWIN";
    } else {
      // Untuk anak dewasa, 5% kemungkinan sudah kawin
      anak.statusPernikahan = Math.random() < 0.05 ? "KAWIN" : "BELUM KAWIN";
    }

    anakList.push(anak);
  }

  return anakList;
}

function generateAnggotaLain(familyAgama) {
  const anggotaLain = [];

  // 10% probabilitas memiliki anggota keluarga lain
  if (Math.random() < 0.1) {
    const jumlahAnggota = Math.random() < 0.7 ? 1 : 2;

    for (let i = 0; i < jumlahAnggota; i++) {
      const jenisKelamin = Math.random() < 0.5 ? "L" : "P";

      // 97% Orang Tua/Mertua, 3% Famili Lain
      const hubungan =
        Math.random() < 0.97
          ? Math.random() < 0.5
            ? "ORANG TUA"
            : "MERTUA"
          : "FAMILI LAIN";

      let umur;
      if (hubungan === "ORANG TUA" || hubungan === "MERTUA") {
        // Usia di atas 60 tahun
        umur = getRandomNumber(60, 85);
      } else {
        // Famili lain bisa berbagai usia
        umur = getRandomNumber(20, 70);
      }

      const anggota = generateBasicMember(familyAgama, jenisKelamin, umur);
      anggota.statusHubunganKeluarga = hubungan;

      // Status pernikahan untuk anggota lain
      if (hubungan === "ORANG TUA" || hubungan === "MERTUA") {
        anggota.statusPernikahan = Math.random() < 0.7 ? "CERAI MATI" : "KAWIN";
      } else {
        anggota.statusPernikahan = getByProbability([
          { value: "KAWIN", probability: 0.5 },
          { value: "BELUM KAWIN", probability: 0.3 },
          { value: "CERAI HIDUP", probability: 0.15 },
          { value: "CERAI MATI", probability: 0.05 },
        ]);
      }

      anggotaLain.push(anggota);
    }
  }

  return anggotaLain;
}

function generateFamily(specificDusun = null) {
  const kk = generateKK();
  const alamat = generateAlamat(specificDusun);
  const anggota = [];

  // Tentukan agama keluarga (mayoritas Islam di Yogyakarta)
  const familyAgama = Math.random() < 0.85 ? "ISLAM" : getRandomElement(agama);

  // 1. Generate Kepala Keluarga
  const kepalaKeluarga = generateKepalaKeluarga(familyAgama);
  anggota.push(kepalaKeluarga);

  // 2. Generate Pasangan (jika KRT kawin)
  const pasangan = generatePasangan(kepalaKeluarga, familyAgama);
  if (pasangan) {
    anggota.push(pasangan);
  }

  // 3. Generate Anak
  const anakList = generateAnak(kepalaKeluarga, familyAgama);
  anggota.push(...anakList);

  // 4. Generate Anggota Keluarga Lain (opsional)
  const anggotaLain = generateAnggotaLain(familyAgama);
  anggota.push(...anggotaLain);

  // Hapus properti umur sebelum return
  anggota.forEach((member) => delete member.umur);

  return {
    kk: kk,
    alamatLengkap: alamat,
    anggota: anggota,
    diunggahOleh: "",
    waktuUpload: "",
    versi: "",
  };
}

function convertToFlatStructure(families) {
  const flatData = [];

  families.forEach((family) => {
    family.anggota.forEach((member) => {
      flatData.push({
        "No KK": family.kk,
        Dusun: family.alamatLengkap.dusun,
        Alamat: family.alamatLengkap.alamat,
        RT: family.alamatLengkap.rt,
        RW: family.alamatLengkap.rw,
        Kelurahan: family.alamatLengkap.kelurahan,
        Kecamatan: family.alamatLengkap.kecamatan,
        Kabupaten: family.alamatLengkap.kabupaten,
        Provinsi: family.alamatLengkap.provinsi,
        "Kode Pos": family.alamatLengkap.kodePos,
        NIK: member.nik,
        Nama: member.nama,
        "Jenis Kelamin": member.jenisKelamin,
        "Tempat Lahir": member.tempatLahir,
        "Tanggal Lahir": member.tanggalLahir,
        Agama: member.agama,
        Pendidikan: member.pendidikan,
        Pekerjaan: member.jenisPekerjaan,
        "Status Pernikahan": member.statusPernikahan,
        "Hubungan Keluarga": member.statusHubunganKeluarga,
        Kewarganegaraan: member.kewarganegaraan,
        "Wallet Address": "",
        "Diunggah Oleh": family.diunggahOleh,
        "Waktu Upload": family.waktuUpload,
        Versi: family.versi,
      });
    });
  });

  return flatData;
}

function createPreviewTable(data) {
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const previewData = data.slice(0, 10);

  let html = "<table><thead><tr>";
  headers.forEach((header) => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead><tbody>";

  previewData.forEach((row) => {
    html += "<tr>";
    headers.forEach((header) => {
      html += `<td title="${row[header]}">${row[header]}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}

function exportToExcel(data, filename) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data Keluarga Ambarketawang");

  // Auto-fit columns
  const colWidths = [];
  const headers = Object.keys(data[0]);
  headers.forEach((header, i) => {
    let maxWidth = header.length;
    data.forEach((row) => {
      const cellValue = String(row[header] || "");
      maxWidth = Math.max(maxWidth, cellValue.length);
    });
    colWidths.push({ wch: Math.min(maxWidth + 2, 30) });
  });
  ws["!cols"] = colWidths;

  XLSX.writeFile(wb, `${filename}.xlsx`);
}

function getDusunStats(data) {
  const stats = {};
  data.forEach((row) => {
    const dusun = row["Dusun"];
    if (!stats[dusun]) {
      stats[dusun] = {
        keluarga: new Set(),
        anggota: 0,
        rw: new Set(),
        rt: new Set(),
        krt: { laki: 0, perempuan: 0 },
        statusPernikahan: {},
        hubunganKeluarga: {},
      };
    }
    stats[dusun].keluarga.add(row["No KK"]);
    stats[dusun].anggota++;
    stats[dusun].rw.add(row["RW"]);
    stats[dusun].rt.add(row["RT"]);

    // Statistik KRT
    if (row["Hubungan Keluarga"] === "KEPALA KELUARGA") {
      if (row["Jenis Kelamin"] === "L") {
        stats[dusun].krt.laki++;
      } else {
        stats[dusun].krt.perempuan++;
      }
    }

    // Statistik status pernikahan dan hubungan keluarga
    const statusNikah = row["Status Pernikahan"];
    const hubungan = row["Hubungan Keluarga"];

    stats[dusun].statusPernikahan[statusNikah] =
      (stats[dusun].statusPernikahan[statusNikah] || 0) + 1;
    stats[dusun].hubunganKeluarga[hubungan] =
      (stats[dusun].hubunganKeluarga[hubungan] || 0) + 1;
  });

  // Convert Sets to counts
  Object.keys(stats).forEach((dusun) => {
    stats[dusun].keluarga = stats[dusun].keluarga.size;
    stats[dusun].rw = stats[dusun].rw.size;
    stats[dusun].rt = stats[dusun].rt.size;
  });

  return stats;
}

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const familyCount = parseInt(document.getElementById("familyCount").value);
  const specificDusun = document.getElementById("dusun").value || null;
  const fileName =
    document.getElementById("fileName").value || "data_keluarga_ambarketawang";

  // Generate families dengan logika bisnis realistis
  const families = [];
  for (let i = 0; i < familyCount; i++) {
    families.push(generateFamily(specificDusun));
  }

  // Convert to flat structure for Excel
  const flatData = convertToFlatStructure(families);

  // Show preview
  document.getElementById("previewTable").innerHTML =
    createPreviewTable(flatData);
  document.getElementById("preview").style.display = "block";

  // Export to Excel
  exportToExcel(flatData, fileName);

  // Get statistics
  const stats = getDusunStats(flatData);
  const totalMembers = flatData.length;
  const totalKRT = Object.values(stats).reduce(
    (sum, stat) => sum + stat.krt.laki + stat.krt.perempuan,
    0
  );
  const pctKRTLaki = Math.round(
    (Object.values(stats).reduce((sum, stat) => sum + stat.krt.laki, 0) /
      totalKRT) *
      100
  );

  // Create detailed summary
  let summaryText = `✅ Data realistis berhasil digenerate!\n\n📊 RINGKASAN LENGKAP:\n`;
  summaryText += `📍 Lokasi: Kelurahan Ambarketawang, Kecamatan Gamping, Kabupaten Sleman, DIY\n\n`;
  summaryText += `📈 STATISTIK UMUM:\n`;
  summaryText += `• Total Keluarga: ${familyCount}\n`;
  summaryText += `• Total Anggota: ${totalMembers}\n`;
  summaryText += `• Rata-rata Anggota per Keluarga: ${
    Math.round((totalMembers / familyCount) * 10) / 10
  }\n`;
  summaryText += `• KRT Laki-laki: ${pctKRTLaki}%\n`;
  summaryText += `• KRT Perempuan: ${100 - pctKRTLaki}%\n\n`;

  summaryText += `🏘️ DISTRIBUSI PER DUSUN:\n`;
  Object.keys(stats).forEach((dusun) => {
    const stat = stats[dusun];
    summaryText += `• ${dusun}:\n`;
    summaryText += `  - ${stat.keluarga} Keluarga\n`;
    summaryText += `  - ${stat.anggota} Anggota\n`;
    summaryText += `  - ${stat.rw} RW aktif\n`;
    summaryText += `  - ${stat.rt} RT aktif\n\n`;
  });

  summaryText += `💾 File Excel "${fileName}.xlsx" telah didownload!`;

  alert(summaryText);

  // Scroll to preview
  document.getElementById("preview").scrollIntoView({ behavior: "smooth" });
});
