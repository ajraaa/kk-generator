// Data referensi Indonesia
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
];

const tempatLahir = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Makassar",
  "Palembang",
  "Tangerang",
  "Depok",
  "Bekasi",
  "Yogyakarta",
  "Solo",
  "Malang",
  "Bogor",
  "Batam",
];

const agama = ["ISLAM", "KRISTEN", "KATOLIK", "HINDU", "BUDHA", "KONGHUCU"];

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
    "BURUH NELAYAN/PERIKANAN",
    "BURUH PETERNAKAN",
    "PEMBANTU RUMAH TANGGA",
    "TUKANG CUKUR",
    "TUKANG BATU",
    "TUKANG KAYU",
    "TUKANG SOL SEPATU",
    "TUKANG LAS/PANDAI BESI",
    "TUKANG JAHIT",
    "PENATA RAMBUT",
    "MEKANIK",
    "JURU MASAK",
    "PEDAGANG",
    "SOPIR",
    "PETANI/PEKEBUN",
    "NELAYAN/PERIKANAN",
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
    "PELAUT",
    "PIALANG",
    "WIRASWASTA",
    "PENYIAR RADIO",
  ],
  TINGGI: [
    "PEGAWAI NEGERI SIPIL",
    "TNI",
    "POLRI",
    "KARYAWAN BUMN",
    "KARYAWAN BUMD",
    "DOSEN",
    "GURU",
    "PILOT",
    "PENGACARA",
    "NOTARIS",
    "ARSITEK",
    "AKUNTAN",
    "KONSULTAN",
    "DOKTER",
    "BIDAN",
    "PERAWAT",
    "APOTEKER",
    "PSIKIATER/PSIKOLOG",
    "PENYIAR TELEVISI",
    "PENELITI",
    "ANGGOTA DPRD PROVINSI",
    "ANGGOTA DPRD KABUPATEN/KOTA",
    "ANGGOTA DPR-RI",
    "ANGGOTA DPD",
    "ANGGOTA BPK",
    "ANGGOTA MAHKAMAH KONSTITUSI",
    "ANGGOTA KABINET/KEMENTERIAN",
    "DUTA BESAR",
    "GUBERNUR",
    "WAKIL GUBERNUR",
    "BUPATI",
    "WAKIL BUPATI",
    "WALIKOTA",
    "WAKIL WALIKOTA",
    "KEPALA DESA",
  ],
};

const wilayahData = {
  "DKI JAKARTA": {
    kabupaten: [
      "JAKARTA PUSAT",
      "JAKARTA UTARA",
      "JAKARTA BARAT",
      "JAKARTA SELATAN",
      "JAKARTA TIMUR",
      "KEPULAUAN SERIBU",
    ],
    kecamatan: [
      "GAMBIR",
      "SAWAH BESAR",
      "KEMAYORAN",
      "SENEN",
      "CEMPAKA PUTIH",
      "MENTENG",
      "TANAH ABANG",
      "JOHAR BARU",
    ],
    kelurahan: [
      "GAMBIR",
      "CIDENG",
      "PETOJO UTARA",
      "PETOJO SELATAN",
      "KEBON KELAPA",
      "DURI PULO",
      "KARTINI",
      "GUNUNG SAHARI UTARA",
    ],
    kodePosRange: [10110, 14490],
  },
  "JAWA BARAT": {
    kabupaten: [
      "BANDUNG",
      "BOGOR",
      "BEKASI",
      "DEPOK",
      "CIMAHI",
      "SUKABUMI",
      "TASIKMALAYA",
      "KARAWANG",
    ],
    kecamatan: [
      "BANDUNG KOTA",
      "COBLONG",
      "SUKASARI",
      "CIDADAP",
      "CICENDO",
      "SUKAJADI",
      "ANDIR",
      "ASTANA ANYAR",
    ],
    kelurahan: [
      "LEBAK GEDE",
      "CIPAGANTI",
      "SUKAGALIH",
      "SUKAWARNA",
      "SEKELOA",
      "GEGER KALONG",
      "ISOLA",
      "SARIJADI",
    ],
    kodePosRange: [16110, 17730],
  },
};

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

function generateAlamat(provinsi) {
  const wilayah = wilayahData[provinsi] || wilayahData["DKI JAKARTA"];
  const jalan = [
    "Jl. Merdeka",
    "Jl. Sudirman",
    "Jl. Thamrin",
    "Jl. Gatot Subroto",
    "Jl. Ahmad Yani",
    "Jl. Diponegoro",
    "Jl. Imam Bonjol",
    "Jl. Veteran",
    "Jl. Pemuda",
    "Jl. Pahlawan",
  ];

  return {
    alamat: `${getRandomElement(jalan)} No. ${getRandomNumber(1, 200)}`,
    rt: String(getRandomNumber(1, 30)).padStart(3, "0"),
    rw: String(getRandomNumber(1, 15)).padStart(3, "0"),
    kelurahan: getRandomElement(wilayah.kelurahan),
    kecamatan: getRandomElement(wilayah.kecamatan),
    kabupaten: getRandomElement(wilayah.kabupaten),
    provinsi: provinsi,
    kodePos: String(
      getRandomNumber(wilayah.kodePosRange[0], wilayah.kodePosRange[1])
    ),
  };
}

function getPendidikanByAge(umur) {
  if (umur < 5) return "TIDAK/BELUM SEKOLAH";
  if (umur < 7) return "BELUM TAMAT SD/SEDERAJAT";
  if (umur < 13) return "TAMAT SD/SEDERAJAT";
  if (umur < 16) return "SLTP/SEDERAJAT";
  if (umur < 19) return "SLTA/SEDERAJAT";

  // Untuk dewasa, distribusi berdasarkan probabilitas
  const rand = Math.random();
  if (rand < 0.4) return getRandomElement(pendidikanLevel.MENENGAH);
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
    kewarganegaraan: Math.random() > 0.95 ? "WNA" : "WNI",
  };
}

function generateFamily(provinsi, maxMembers) {
  const kk = generateKK();
  const alamat = generateAlamat(provinsi);
  const memberCount = getRandomNumber(2, maxMembers);
  const anggota = [];

  // Tentukan agama keluarga
  const familyAgama = getRandomElement(agama);

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
  let hasIstri = false;
  if (statusKepala === "KAWIN" && memberCount > 1) {
    const istri = generateFamilyMember(familyAgama, false, "P", true);
    istri.statusPernikahan = "KAWIN";
    istri.statusHubunganKeluarga = "ISTRI";
    anggota.push(istri);
    hasIstri = true;
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
  XLSX.utils.book_append_sheet(wb, ws, "Data Keluarga");

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

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const familyCount = parseInt(document.getElementById("familyCount").value);
  const avgMemberCount = parseInt(
    document.getElementById("avgMemberCount").value
  );
  const provinsi = document.getElementById("provinsi").value;
  const fileName = document.getElementById("fileName").value || "data_keluarga";

  // Generate families
  const families = [];
  for (let i = 0; i < familyCount; i++) {
    families.push(generateFamily(provinsi, avgMemberCount));
  }

  // Convert to flat structure for Excel
  const flatData = convertToFlatStructure(families);

  // Show preview
  document.getElementById("previewTable").innerHTML =
    createPreviewTable(flatData);
  document.getElementById("preview").style.display = "block";

  // Export to Excel
  exportToExcel(flatData, fileName);

  // Show summary
  const totalMembers = flatData.length;
  alert(
    `✅ Data berhasil digenerate!\n\n📊 Summary:\n- ${familyCount} Keluarga\n- ${totalMembers} Total Anggota\n- Rata-rata ${Math.round(
      totalMembers / familyCount
    )} anggota per keluarga\n\nFile Excel telah didownload!`
  );

  // Scroll to preview
  document.getElementById("preview").scrollIntoView({ behavior: "smooth" });
});
