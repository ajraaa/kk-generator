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
    kodePos: "55294", // Kode pos Gamping, Sleman
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
  if (rand < 0.8) return getRandomElement(pendidikanLevel.TINGGI.slice(0, 3)); // Diploma sampai S1
  return getRandomElement(pendidikanLevel.TINGGI); // Termasuk S2, S3
}

function getPekerjaanByEducationAndAge(pendidikan, umur) {
  if (umur < 5) return "BELUM/TIDAK BEKERJA";
  if (umur < 18) return "PELAJAR/MAHASISWA";
  if (umur > 65)
    return Math.random() > 0.3 ? "PENSIUNAN" : "BELUM/TIDAK BEKERJA";

  // Tentukan level pendidikan
  let levelPendidikan = "RENDAH";
  if (pendidikanLevel.MENENGAH.includes(pendidikan))
    levelPendidikan = "MENENGAH";
  if (pendidikanLevel.TINGGI.includes(pendidikan)) levelPendidikan = "TINGGI";

  return getRandomElement(pekerjaanByPendidikan[levelPendidikan]);
}

function generateFamilyMember(
  familyAgama,
  isKepala = false,
  jenisKelamin = null,
  isIstri = false
) {
  const jk = jenisKelamin || (Math.random() > 0.5 ? "L" : "P");
  const nama =
    jk === "L" ? getRandomElement(namaLaki) : getRandomElement(namaPerempuan);
  const umur = isKepala
    ? getRandomNumber(25, 65)
    : isIstri
    ? getRandomNumber(20, 60)
    : getRandomNumber(0, 80);
  const currentYear = new Date().getFullYear();
  const tahunLahir = currentYear - umur;

  // Agama: 90% sama dengan keluarga, 10% beda
  let agamaMember = familyAgama;
  if (!isKepala && Math.random() < 0.1) {
    agamaMember = getRandomElement(agama.filter((a) => a !== familyAgama));
  }

  // Pendidikan berdasarkan umur
  const pendidikanLevel = getPendidikanByAge(umur);

  // Pekerjaan berdasarkan pendidikan dan umur
  const pekerjaanLevel = getPekerjaanByEducationAndAge(pendidikanLevel, umur);

  return {
    nik: generateNIK(),
    nama: nama,
    jenisKelamin: jk,
    tempatLahir: getRandomElement(tempatLahir),
    tanggalLahir: generateRandomDate(tahunLahir, tahunLahir),
    agama: agamaMember,
    pendidikan: pendidikanLevel,
    jenisPekerjaan: pekerjaanLevel,
    umur: umur,
    kewarganegaraan: Math.random() > 0.98 ? "WNA" : "WNI", // Lebih sedikit WNA di wilayah rural
  };
}

function generateFamily(specificDusun = null, maxMembers = 6) {
  const kk = generateKK();
  const alamat = generateAlamat(specificDusun);
  const memberCount = getRandomNumber(2, maxMembers);
  const anggota = [];

  // Tentukan agama keluarga (mayoritas Islam di Yogyakarta)
  const familyAgama = Math.random() < 0.85 ? "ISLAM" : getRandomElement(agama);

  // Generate kepala keluarga (selalu laki-laki)
  const kepalaKeluarga = generateFamilyMember(familyAgama, true, "L");

  // Tentukan status pernikahan kepala keluarga
  const statusKepala =
    kepalaKeluarga.umur > 25 && Math.random() > 0.3
      ? "KAWIN"
      : kepalaKeluarga.umur > 40 && Math.random() > 0.8
      ? "CERAI HIDUP"
      : "BELUM KAWIN";

  kepalaKeluarga.statusPernikahan = statusKepala;
  kepalaKeluarga.statusHubunganKeluarga = "KEPALA KELUARGA";
  anggota.push(kepalaKeluarga);

  // Generate istri jika kepala keluarga kawin
  if (statusKepala === "KAWIN" && memberCount > 1) {
    const istri = generateFamilyMember(familyAgama, false, "P", true);
    istri.statusPernikahan = "KAWIN";
    istri.statusHubunganKeluarga = "ISTRI";
    anggota.push(istri);
  }

  // Generate anggota keluarga lainnya
  const remainingMembers = memberCount - anggota.length;
  for (let i = 0; i < remainingMembers; i++) {
    const member = generateFamilyMember(familyAgama, false);

    // Tentukan hubungan keluarga
    if (member.umur < 25) {
      member.statusHubunganKeluarga = "ANAK";
      member.statusPernikahan =
        member.umur < 17
          ? "BELUM KAWIN"
          : Math.random() > 0.7
          ? "KAWIN"
          : "BELUM KAWIN";
    } else {
      member.statusHubunganKeluarga = "FAMILI LAIN";
      member.statusPernikahan =
        member.umur < 25
          ? "BELUM KAWIN"
          : Math.random() > 0.5
          ? "KAWIN"
          : Math.random() > 0.7
          ? "CERAI HIDUP"
          : "BELUM KAWIN";
    }

    anggota.push(member);
  }

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
      };
    }
    stats[dusun].keluarga.add(row["No KK"]);
    stats[dusun].anggota++;
    stats[dusun].rw.add(row["RW"]);
    stats[dusun].rt.add(row["RT"]);
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
  const avgMemberCount = parseInt(
    document.getElementById("avgMemberCount").value
  );
  const specificDusun = document.getElementById("dusun").value || null;
  const fileName =
    document.getElementById("fileName").value || "data_keluarga_ambarketawang";

  // Generate families
  const families = [];
  for (let i = 0; i < familyCount; i++) {
    families.push(generateFamily(specificDusun, avgMemberCount));
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

  // Create detailed summary
  let summaryText = `✅ Data berhasil digenerate!\n\n📊 RINGKASAN LENGKAP:\n`;
  summaryText += `📍 Lokasi: Kelurahan Ambarketawang, Kecamatan Gamping, Kabupaten Sleman, DIY\n\n`;
  summaryText += `📈 STATISTIK UMUM:\n`;
  summaryText += `• Total Keluarga: ${familyCount}\n`;
  summaryText += `• Total Anggota: ${totalMembers}\n`;
  summaryText += `• Rata-rata Anggota per Keluarga: ${
    Math.round((totalMembers / familyCount) * 10) / 10
  }\n\n`;

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
