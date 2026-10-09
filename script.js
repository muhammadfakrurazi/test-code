// Dataset 1: Mahasiswa (Exactly 20 records)[cite: 1]
const INITIAL_STUDENTS = [
  { id: "25210098", nama: "Muhammad Fakrurazi", attr1: 88, attr2: 95, flag: "Ya" },
  { id: "25210109", nama: "Mohammad Aqmal", attr1: 85, attr2: 90, flag: "Ya" },
  { id: "25210137", nama: "Padillah", attr1: 88, attr2: 90, flag: "Ya" },
  { id: "25210397", nama: "Sakinah", attr1: 85, attr2: 88, flag: "Ya" },
  { id: "25210386", nama: "Niswatul Khaira", attr1: 84, attr2: 85, flag: "Ya" },
  { id: "25210105", nama: "Fajar Ramadhan", attr1: 81, attr2: 85, flag: "Ya" },
  { id: "25210142", nama: "Andi Saputra", attr1: 92, attr2: 82, flag: "Tidak" },
  { id: "25210155", nama: "Budi Santoso", attr1: 75, attr2: 91, flag: "Ya" },
  { id: "25210168", nama: "Citra Dewi", attr1: 83, attr2: 72, flag: "Ya" },
  { id: "25210173", nama: "Doni Kurniawan", attr1: 68, attr2: 65, flag: "Tidak" },
  { id: "25210189", nama: "Eka Putri", attr1: 90, attr2: 60, flag: "Tidak" },
  { id: "25210194", nama: "Farhan Maulana", attr1: 62, attr2: 78, flag: "Ya" },
  { id: "25210201", nama: "Gita Gutawa", attr1: 70, attr2: 88, flag: "Tidak" },
  { id: "25210212", nama: "Hendra Wijaya", attr1: 86, attr2: 84, flag: "Ya" },
  { id: "25210225", nama: "Indah Permata", attr1: 78, attr2: 70, flag: "Tidak" },
  { id: "25210238", nama: "Joko Susilo", attr1: 89, attr2: 92, flag: "Tidak" },
  { id: "25210247", nama: "Kartika Sari", attr1: 74, attr2: 86, flag: "Ya" },
  { id: "25210259", nama: "Lutfi Pratama", attr1: 82, attr2: 68, flag: "Ya" },
  { id: "25210263", nama: "Monalisa", attr1: 65, attr2: 75, flag: "Tidak" },
  { id: "25210271", nama: "Naufal Risky", attr1: 87, attr2: 94, flag: "Ya" }
];

// Dataset 2: Produk (20 record)[cite: 1]
const INITIAL_PRODUCTS = [
  { id: "PRD-01", nama: "Laptop Pro X1", attr1: 8500000, attr2: 55, flag: "Diskon" },
  { id: "PRD-02", nama: "Smartphone Ultra", attr1: 6200000, attr2: 60, flag: "Diskon" },
  { id: "PRD-03", nama: "Wireless Earbuds", attr1: 750000, attr2: 80, flag: "Diskon" },
  { id: "PRD-04", nama: "Mechanical Keyboard", attr1: 950000, attr2: 65, flag: "Diskon" },
  { id: "PRD-05", nama: "Gaming Monitor 144Hz", attr1: 2800000, attr2: 50, flag: "Diskon" },
  { id: "PRD-06", nama: "External SSD 1TB", attr1: 1450000, attr2: 90, flag: "Diskon" },
  { id: "PRD-07", nama: "HD Webcam 1080p", attr1: 450000, attr2: 20, flag: "Regular" },
  { id: "PRD-08", nama: "Ergonomic Chair", attr1: 1900000, attr2: 15, flag: "Diskon" },
  { id: "PRD-09", nama: "USB-C Hub 7-in-1", attr1: 350000, attr2: 85, flag: "Diskon" },
  { id: "PRD-10", nama: "Powerbank 20000mAh", attr1: 550000, attr2: 70, flag: "Diskon" },
  { id: "PRD-11", nama: "Bluetooth Speaker", attr1: 850000, attr2: 40, flag: "Regular" },
  { id: "PRD-12", nama: "Tablet Drawing Pad", attr1: 1200000, attr2: 55, flag: "Diskon" },
  { id: "PRD-13", nama: "Smartwatch Sport", attr1: 950000, attr2: 25, flag: "Regular" },
  { id: "PRD-14", nama: "Wi-Fi Router Dual", attr1: 650000, attr2: 60, flag: "Diskon" },
  { id: "PRD-15", nama: "LED Desk Lamp", attr1: 250000, attr2: 95, flag: "Diskon" },
  { id: "PRD-16", nama: "Smart TV 4K 55-inch", attr1: 5200000, attr2: 85, flag: "Diskon" },
  { id: "PRD-17", nama: "Mirrorless Camera", attr1: 11000000, attr2: 45, flag: "Regular" },
  { id: "PRD-18", nama: "Graphic Card RTX", attr1: 7800000, attr2: 90, flag: "Diskon" },
  { id: "PRD-19", nama: "Mini Projector LED", attr1: 1850000, attr2: 75, flag: "Regular" },
  { id: "PRD-20", nama: "Soundbar Bluetooth", attr1: 1350000, attr2: 88, flag: "Diskon" }
];

let currentDatasetType = 1; // 1 = Mahasiswa, 2 = Produk[cite: 1]
let currentFilter = 'all';[cite: 1]
let datasetRecords = [];[cite: 1]
let currentVennMode = 'all3';[cite: 1]
let currentSelectedSector = 'abc';[cite: 1]
let currentPieMode = 2;[cite: 1]
let lastPIEResult = [];[cite: 1]
let lastOperationResult = [];[cite: 1]

// Toggle Sidebar Function (Supports Desktop Collapse & Mobile Overlay)[cite: 1]
function toggleSidebar() {
  const body = document.body;
  if (window.innerWidth < 768) {
    body.classList.toggle('mobile-sidebar-open');
  } else {
    const isCollapsed = body.classList.toggle('sidebar-collapsed');
    localStorage.setItem('setveen_sidebar_state', isCollapsed ? 'collapsed' : 'expanded');
  }
}

function initSidebarState() {
  try {
    const state = localStorage.getItem('setveen_sidebar_state');
    if (state === 'collapsed' && window.innerWidth >= 768) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
  } catch (e) {
    document.body.classList.remove('sidebar-collapsed');
  }
}

function initData() {
  initSidebarState();
  datasetRecords = JSON.parse(JSON.stringify(INITIAL_STUDENTS));
  updateUI();
  renderPIEInterface();
}

function switchDatasetType(type) {
  currentDatasetType = type;
  const p1 = document.getElementById('pill-ds-1');
  const p2 = document.getElementById('pill-ds-2');

  if (type === 1) {
    p1.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all bg-[#3B82F6] text-white shadow-xs truncate";
    p2.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all text-slate-600 hover:text-slate-900 truncate";
    datasetRecords = JSON.parse(JSON.stringify(INITIAL_STUDENTS));
  } else {
    p2.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all bg-[#3B82F6] text-white shadow-xs truncate";
    p1.className = "px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all text-slate-600 hover:text-slate-900 truncate";
    datasetRecords = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  }
  currentFilter = 'all';
  updateUI();
  renderPIEInterface();
}

// Set Rules for Dataset 1 vs Dataset 2[cite: 1]
function inSetA(s) { 
  return currentDatasetType === 1 ? s.attr1 >= 80 : s.attr1 >= 1000000; 
}
function inSetB(s) { 
  return currentDatasetType === 1 ? s.flag === 'Ya' : s.flag === 'Diskon'; 
}
function inSetC(s) { 
  return currentDatasetType === 1 ? s.attr2 >= 80 : s.attr2 >= 50; 
}

function getRecordSets(s) {
  const sets = [];
  if (inSetA(s)) sets.push('A');
  if (inSetB(s)) sets.push('B');
  if (inSetC(s)) sets.push('C');
  return sets;
}

function updateUI() {
  const countU = datasetRecords.length;
  const countA = datasetRecords.filter(inSetA).length;
  const countB = datasetRecords.filter(inSetB).length;
  const countC = datasetRecords.filter(inSetC).length;
  const countNone = datasetRecords.filter(s => !inSetA(s) && !inSetB(s) && !inSetC(s)).length;

  const abcList = datasetRecords.filter(s => inSetA(s) && inSetB(s) && inSetC(s));
  const onlyA = datasetRecords.filter(s => inSetA(s) && !inSetB(s) && !inSetC(s)).length;
  const onlyB = datasetRecords.filter(s => !inSetA(s) && inSetB(s) && !inSetC(s)).length;
  const onlyC = datasetRecords.filter(s => !inSetA(s) && !inSetB(s) && inSetC(s)).length;

  document.getElementById('stat-total-u').innerText = countU;
  document.getElementById('stat-total-a').innerText = countA;
  document.getElementById('stat-total-b').innerText = countB;
  document.getElementById('stat-total-c').innerText = countC;

  const entityName = currentDatasetType === 1 ? 'Data Mahasiswa' : 'Data Produk';
  document.getElementById('header-data-badge').innerText = `${countU} ${entityName}`;
  document.getElementById('dashboard-semesta-badge').innerText = `Total Semesta U : ${countU}`;
  document.getElementById('dashboard-venn-subtitle').innerText = `3 Himpunan: A (${countA}), B (${countB}), C (${countC}) · Irisan A ∩ B ∩ C = ${abcList.length} Elemen`;

  // Labels update based on dataset[cite: 1]
  if (currentDatasetType === 1) {
    document.getElementById('card-label-a').innerText = 'HIMPUNAN A';
    document.getElementById('card-label-b').innerText = 'HIMPUNAN B';
    document.getElementById('card-label-c').innerText = 'HIMPUNAN C';

    document.getElementById('summary-label-u').innerText = 'Semesta Seluruh Mahasiswa';
    document.getElementById('summary-label-a').innerText = 'Nilai Tinggi (≥ 80)';
    document.getElementById('summary-label-b').innerText = 'Aktif Organisasi (Ya)';
    document.getElementById('summary-label-c').innerText = 'Kehadiran Tinggi (≥ 80%)';
    document.getElementById('insight-label-target').innerHTML = 'Record masuk <span class="font-mono px-2 py-0.5 rounded-md text-xs font-black shadow-xs bg-white text-[#1e3a8a] border border-blue-200">A ∩ B ∩ C</span>';
    document.getElementById('insight-desc-text').innerHTML = 'Irisan sempurna 3 himpunan: mahasiswa yang sekaligus memiliki <strong>Nilai Tinggi</strong>, <strong>Aktif Organisasi</strong>, dan <strong>Kehadiran Rajin</strong>.';
    
    document.getElementById('dataset-section-title').innerText = 'Dataset Mahasiswa';
    document.getElementById('dataset-section-subtitle').innerText = 'Kelola data mahasiswa yang menjadi semesta himpunan (U).';
    document.getElementById('dataset-record-badge').innerText = `${countU} Record Terdaftar`;
    document.getElementById('modal-title-text').innerText = 'Tambah Data Mahasiswa';
    document.getElementById('label-f1').innerText = 'NIM *';
    document.getElementById('input-f1').placeholder = 'Contoh: 25210150';
    document.getElementById('label-f2').innerText = 'Nama *';
    document.getElementById('input-f2').placeholder = 'Nama lengkap mahasiswa';
    document.getElementById('label-f3').innerText = 'Nilai (0–100) *';
    document.getElementById('input-f3').placeholder = '85';
    document.getElementById('label-f4').innerText = 'Kehadiran % (0–100) *';
    document.getElementById('input-f4').placeholder = '90';
    document.getElementById('label-f5').innerText = 'Status Organisasi *';
    document.getElementById('radio-val-1').innerText = 'Ya';
    document.getElementById('radio-val-2').innerText = 'Tidak';

    document.getElementById('title-box-u').innerText = 'Semesta U';
    document.getElementById('subtitle-box-u').innerText = 'Seluruh mahasiswa dalam dataset';
    document.getElementById('title-box-a').innerText = 'Himpunan A — Nilai Tinggi';
    document.getElementById('desc-box-a').innerText = 'Kriteria: Nilai ≥ 80';
    document.getElementById('label-sub-a').innerText = 'Nilai Terdaftar';
    document.getElementById('title-box-b').innerText = 'Himpunan B — Aktif Organisasi';
    document.getElementById('desc-box-b').innerText = 'Kriteria: Status Organisasi = Ya';
    document.getElementById('label-sub-b').innerText = 'Status Keaktifan';
    document.getElementById('title-box-c').innerText = 'Himpunan C — Kehadiran Tinggi';
    document.getElementById('desc-box-c').innerText = 'Kriteria: Kehadiran ≥ 80%';
    document.getElementById('label-sub-c').innerText = 'Presensi Kehadiran';

    document.getElementById('svg-legend-label-a').innerText = 'Nilai ≥ 80';
    document.getElementById('svg-legend-label-b').innerText = 'Organisasi';
    document.getElementById('svg-legend-label-c').innerText = 'Kehadiran ≥ 80%';
    document.getElementById('svg-full-label-a').innerText = 'Nilai ≥ 80';
    document.getElementById('svg-full-label-b').innerText = 'Organisasi';
    document.getElementById('svg-full-label-c').innerText = 'Kehadiran ≥ 80%';

    document.getElementById('stat-card-label-a').innerText = 'Himpunan A';
    document.getElementById('stat-card-label-b').innerText = 'Himpunan B';
    document.getElementById('stat-card-label-c').innerText = 'Himpunan C';
    document.getElementById('label-sector-a').innerText = 'Hanya A Saja';
    document.getElementById('label-sector-b').innerText = 'Hanya B Saja';
    document.getElementById('label-sector-c').innerText = 'Hanya C Saja';

    document.getElementById('op-opt-a1').innerText = 'Himpunan A (Nilai Tinggi)';
    document.getElementById('op-opt-b1').innerText = 'Himpunan B (Aktif Organisasi)';
    document.getElementById('op-opt-c1').innerText = 'Himpunan C (Kehadiran Tinggi)';
    document.getElementById('op-opt-u1').innerText = 'Semesta U';
    document.getElementById('op-opt-a2').innerText = 'Himpunan A (Nilai Tinggi)';
    document.getElementById('op-opt-b2').innerText = 'Himpunan B (Aktif Organisasi)';
    document.getElementById('op-opt-c2').innerText = 'Himpunan C (Kehadiran Tinggi)';
    document.getElementById('op-opt-u2').innerText = 'Semesta U';

  } else {
    document.getElementById('card-label-a').innerText = 'HIMPUNAN A (PREMIUM)';
    document.getElementById('card-label-b').innerText = 'HIMPUNAN B (DISKON)';
    document.getElementById('card-label-c').innerText = 'HIMPUNAN C (STOK)';

    document.getElementById('summary-label-u').innerText = 'Semesta Seluruh Produk';
    document.getElementById('summary-label-a').innerText = 'Harga Premium (≥ Rp 1 Juta)';
    document.getElementById('summary-label-b').innerText = 'Status Diskon (Ya)';
    document.getElementById('summary-label-c').innerText = 'Stok Tinggi (≥ 50 Unit)';
    document.getElementById('insight-label-target').innerHTML = 'Record masuk <span class="font-mono px-2 py-0.5 rounded-md text-xs font-black shadow-xs bg-white text-[#1e3a8a] border border-blue-200">A ∩ B ∩ C</span>';
    document.getElementById('insight-desc-text').innerHTML = 'Irisan sempurna 3 himpunan: produk yang memiliki <strong>Harga Premium</strong>, <strong>Sedang Diskon</strong>, dan <strong>Stok Melimpah</strong>.';
    
    document.getElementById('dataset-section-title').innerText = 'Dataset Produk Toko';
    document.getElementById('dataset-section-subtitle').innerText = 'Kelola data produk inventaris yang menjadi semesta himpunan (U).';
    document.getElementById('dataset-record-badge').innerText = `${countU} Record Terdaftar`;
    document.getElementById('modal-title-text').innerText = 'Tambah Data Produk';
    document.getElementById('label-f1').innerText = 'Kode Produk *';
    document.getElementById('input-f1').placeholder = 'Contoh: PRD-20';
    document.getElementById('label-f2').innerText = 'Nama Produk *';
    document.getElementById('input-f2').placeholder = 'Nama barang / produk';
    document.getElementById('label-f3').innerText = 'Harga (Rp) *';
    document.getElementById('input-f3').placeholder = '1500000';
    document.getElementById('label-f4').innerText = 'Stok Unit *';
    document.getElementById('input-f4').placeholder = '45';
    document.getElementById('label-f5').innerText = 'Status Promo *';
    document.getElementById('radio-val-1').innerText = 'Diskon';
    document.getElementById('radio-val-2').innerText = 'Regular';

    document.getElementById('title-box-u').innerText = 'Semesta U';
    document.getElementById('subtitle-box-u').innerText = 'Seluruh produk dalam katalog';
    document.getElementById('title-box-a').innerText = 'Himpunan A — Harga Premium';
    document.getElementById('desc-box-a').innerText = 'Kriteria: Harga ≥ Rp 1.000.000';
    document.getElementById('label-sub-a').innerText = 'Harga Terdaftar';
    document.getElementById('title-box-b').innerText = 'Himpunan B — Status Diskon';
    document.getElementById('desc-box-b').innerText = 'Kriteria: Status = Diskon';
    document.getElementById('label-sub-b').innerText = 'Kategori Promo';
    document.getElementById('title-box-c').innerText = 'Himpunan C — Stok Melimpah';
    document.getElementById('desc-box-c').innerText = 'Kriteria: Stok ≥ 50 Unit';
    document.getElementById('label-sub-c').innerText = 'Jumlah Stok';

    document.getElementById('svg-legend-label-a').innerText = 'Harga ≥ 1 Juta';
    document.getElementById('svg-legend-label-b').innerText = 'Diskon Promo';
    document.getElementById('svg-legend-label-c').innerText = 'Stok ≥ 50';
    document.getElementById('svg-full-label-a').innerText = 'Harga ≥ 1 Juta';
    document.getElementById('svg-full-label-b').innerText = 'Diskon Promo';
    document.getElementById('svg-full-label-c').innerText = 'Stok ≥ 50';

    document.getElementById('stat-card-label-a').innerText = 'Himpunan A';
    document.getElementById('stat-card-label-b').innerText = 'Himpunan B';
    document.getElementById('stat-card-label-c').innerText = 'Himpunan C';
    document.getElementById('label-sector-a').innerText = 'Hanya Harga Saja';
    document.getElementById('label-sector-b').innerText = 'Hanya Diskon Saja';
    document.getElementById('label-sector-c').innerText = 'Hanya Stok Saja';

    document.getElementById('op-opt-a1').innerText = 'Himpunan A (Harga Premium)';
    document.getElementById('op-opt-b1').innerText = 'Himpunan B (Status Diskon)';
    document.getElementById('op-opt-c1').innerText = 'Himpunan C (Stok Tinggi)';
    document.getElementById('op-opt-u1').innerText = 'Semesta U';
    document.getElementById('op-opt-a2').innerText = 'Himpunan A (Harga Premium)';
    document.getElementById('op-opt-b2').innerText = 'Himpunan B (Status Diskon)';
    document.getElementById('op-opt-c2').innerText = 'Himpunan C (Stok Tinggi)';
    document.getElementById('op-opt-u2').innerText = 'Semesta U';
  }

  // Dashboard Venn SVG[cite: 1]
  document.getElementById('svg-text-u').textContent = `U (Semesta = ${countU})`;
  document.getElementById('venn-semesta-text').innerText = `U = ${countU}`;
  document.getElementById('venn-num-only-a').textContent = onlyA;
  document.getElementById('venn-num-only-b').textContent = onlyB;
  document.getElementById('venn-num-only-c').textContent = onlyC;
  document.getElementById('venn-num-abc').textContent = abcList.length;
  document.getElementById('venn-num-outside').textContent = `Luar: ${countNone}`;

  // Dedicated Venn Page Elements[cite: 1]
  document.getElementById('venn-full-semesta-badge').innerText = `Semesta U = ${countU}`;
  document.getElementById('svg-full-text-u').textContent = `U (Semesta = ${countU})`;
  document.getElementById('venn-full-num-only-a').textContent = onlyA;
  document.getElementById('venn-full-num-only-b').textContent = onlyB;
  document.getElementById('venn-full-num-only-c').textContent = onlyC;
  document.getElementById('venn-full-num-abc').textContent = abcList.length;
  document.getElementById('venn-full-num-outside').textContent = `Luar: ${countNone}`;

  document.getElementById('stat-card-a').innerText = countA;
  document.getElementById('stat-card-b').innerText = countB;
  document.getElementById('stat-card-c').innerText = countC;

  // Update interactive buttons count on Venn Page[cite: 1]
  document.getElementById('btn-count-only-a').innerText = onlyA;
  document.getElementById('btn-count-only-b').innerText = onlyB;
  document.getElementById('btn-count-only-c').innerText = onlyC;
  document.getElementById('btn-count-abc').innerText = abcList.length;
  document.getElementById('btn-count-outside').innerText = countNone;

  document.getElementById('legend-a-count').innerText = `A: Kriteria 1 (${countA})`;
  document.getElementById('legend-b-count').innerText = `B: Kriteria 2 (${countB})`;
  document.getElementById('legend-c-count').innerText = `C: Kriteria 3 (${countC})`;

  document.getElementById('insight-count-abc').innerText = abcList.length;
  const percentABC = countU > 0 ? Math.round((abcList.length / countU) * 100) : 0;
  document.getElementById('insight-cardinality-text').innerText = `Kardinalitas: |A ∩ B ∩ C| = ${abcList.length}/${countU} (${percentABC}%)`;

  document.getElementById('venn-intersection-title').innerText = `Irisan A ∩ B ∩ C (${abcList.length} Record)`;
  document.getElementById('venn-intersection-percent').innerText = `${percentABC}% Semesta`;

  const listContainer = document.getElementById('venn-intersection-list');
  if (abcList.length === 0) {
    listContainer.innerHTML = `<p class="text-xs text-slate-400 italic text-center py-4">Tidak ada elemen pada irisan A ∩ B ∩ C.</p>`;
  } else {
    listContainer.innerHTML = abcList.map((s, idx) => `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
          <div>
            <p class="font-bold text-xs text-slate-800">${s.nama}</p>
            <p class="text-[10px] text-slate-400 font-medium">ID: ${s.id} · Atribut: ${s.attr1}</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200/60">${s.attr2}</span>
      </div>
    `).join('');
  }

  document.getElementById('filter-all').innerText = `Semua (${countU})`;
  document.getElementById('filter-A').innerText = `Himpunan A (${countA})`;
  document.getElementById('filter-B').innerText = `Himpunan B (${countB})`;
  document.getElementById('filter-C').innerText = `Himpunan C (${countC})`;
  document.getElementById('filter-none').innerText = `Tidak di A, B, C (${countNone})`;

  document.getElementById('himpunan-count-u').innerText = countU;
  document.getElementById('himpunan-count-a').innerText = countA;
  document.getElementById('himpunan-count-b').innerText = countB;
  document.getElementById('himpunan-count-c').innerText = countC;
  document.getElementById('himpunan-sub-u').innerText = `${countU} Elemen`;

  // Update table headers for dataset[cite: 1]
  const thead = document.getElementById('table-head-row');
  if (currentDatasetType === 1) {
    thead.innerHTML = `
      <tr>
        <th class="py-3.5 px-4 text-center w-12">#</th>
        <th class="py-3.5 px-4">NIM</th>
        <th class="py-3.5 px-4">Nama</th>
        <th class="py-3.5 px-4">Nilai</th>
        <th class="py-3.5 px-4">Organisasi</th>
        <th class="py-3.5 px-4">Kehadiran</th>
        <th class="py-3.5 px-4">Himpunan</th>
        <th class="py-3.5 px-4 text-right">Aksi</th>
      </tr>
    `;
  } else {
    thead.innerHTML = `
      <tr>
        <th class="py-3.5 px-4 text-center w-12">#</th>
        <th class="py-3.5 px-4">Kode Produk</th>
        <th class="py-3.5 px-4">Nama Produk</th>
        <th class="py-3.5 px-4">Harga (Rp)</th>
        <th class="py-3.5 px-4">Status Promo</th>
        <th class="py-3.5 px-4">Stok Unit</th>
        <th class="py-3.5 px-4">Himpunan</th>
        <th class="py-3.5 px-4 text-right">Aksi</th>
      </tr>
    `;
  }

  renderHimpunanTab();
  renderTable();
  renderVennSelectedSectorDetails();
  calculatePIE();
}

// Interactive Venn Sector and Pairwise Mode Selector Logic[cite: 1]
function setVennMode(mode) {
  currentVennMode = mode;
  const containerBtns = document.getElementById('venn-mode-buttons');
  if (!containerBtns) return;
  const buttons = containerBtns.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all";
  });

  if (mode === 'all3') {
    buttons[0].className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
    selectVennSector('abc');
  } else if (mode === 'pair_ab') {
    buttons[1].className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
    selectVennSector('pairAB');
  } else if (mode === 'pair_bc') {
    buttons[2].className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
    selectVennSector('pairBC');
  } else if (mode === 'pair_ac') {
    buttons[3].className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
    selectVennSector('pairAC');
  }
}

function selectVennSector(sectorKey) {
  currentSelectedSector = sectorKey;
  renderVennSelectedSectorDetails();
}

function renderVennSelectedSectorDetails() {
  const titleElem = document.getElementById('venn-selected-sector-title');
  const descElem = document.getElementById('venn-selected-sector-desc');
  const countBadge = document.getElementById('venn-selected-count-badge');
  const listContainer = document.getElementById('venn-selected-members-list');
  const totalLabel = document.getElementById('venn-selected-total-label');
  const boxTitle = document.getElementById('venn-diagram-box-title');

  if (!titleElem) return;

  let matchedRecords = [];
  let titleText = '';
  let descText = '';

  const circleA = document.getElementById('svg-circle-a');
  const circleB = document.getElementById('svg-circle-b');
  const circleC = document.getElementById('svg-circle-c');
  if (circleA) circleA.setAttribute('fill-opacity', '0.14');
  if (circleB) circleB.setAttribute('fill-opacity', '0.14');
  if (circleC) circleC.setAttribute('fill-opacity', '0.14');

  if (currentSelectedSector === 'abc') {
    matchedRecords = datasetRecords.filter(s => inSetA(s) && inSetB(s) && inSetC(s));
    titleText = 'Irisan Sempurna (A ∩ B ∩ C)';
    descText = 'Elemen yang memenuhi ketiga kriteria sekaligus.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Irisan A ∩ B ∩ C)';
  } else if (currentSelectedSector === 'onlyA') {
    matchedRecords = datasetRecords.filter(s => inSetA(s) && !inSetB(s) && !inSetC(s));
    titleText = 'Hanya Himpunan A Saja';
    descText = 'Elemen yang memenuhi kriteria A saja tanpa B dan C.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Hanya A Saja)';
    if (circleA) circleA.setAttribute('fill-opacity', '0.35');
  } else if (currentSelectedSector === 'onlyB') {
    matchedRecords = datasetRecords.filter(s => !inSetA(s) && inSetB(s) && !inSetC(s));
    titleText = 'Hanya Himpunan B Saja';
    descText = 'Elemen yang memenuhi kriteria B saja tanpa A dan C.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Hanya B Saja)';
    if (circleB) circleB.setAttribute('fill-opacity', '0.35');
  } else if (currentSelectedSector === 'onlyC') {
    matchedRecords = datasetRecords.filter(s => !inSetA(s) && !inSetB(s) && inSetC(s));
    titleText = 'Hanya Himpunan C Saja';
    descText = 'Elemen yang memenuhi kriteria C saja tanpa A dan B.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Hanya C Saja)';
    if (circleC) circleC.setAttribute('fill-opacity', '0.35');
  } else if (currentSelectedSector === 'groupA') {
    matchedRecords = datasetRecords.filter(inSetA);
    titleText = 'Seluruh Anggota Himpunan A';
    descText = 'Semua elemen yang masuk dalam Himpunan A.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Himpunan A)';
    if (circleA) circleA.setAttribute('fill-opacity', '0.30');
  } else if (currentSelectedSector === 'groupB') {
    matchedRecords = datasetRecords.filter(inSetB);
    titleText = 'Seluruh Anggota Himpunan B';
    descText = 'Semua elemen yang masuk dalam Himpunan B.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Himpunan B)';
    if (circleB) circleB.setAttribute('fill-opacity', '0.30');
  } else if (currentSelectedSector === 'groupC') {
    matchedRecords = datasetRecords.filter(inSetC);
    titleText = 'Seluruh Anggota Himpunan C';
    descText = 'Semua elemen yang masuk dalam Himpunan C.';
    boxTitle.innerText = 'Diagram Venn (Fokus: Himpunan C)';
    if (circleC) circleC.setAttribute('fill-opacity', '0.30');
  } else if (currentSelectedSector === 'pairAB') {
    matchedRecords = datasetRecords.filter(s => inSetA(s) && inSetB(s));
    titleText = 'Pasangan Irisan A ∩ B';
    descText = 'Elemen yang masuk dalam himpunan A dan B.';
    boxTitle.innerText = 'Diagram Venn (Pasangan A & B)';
    if (circleA) circleA.setAttribute('fill-opacity', '0.25');
    if (circleB) circleB.setAttribute('fill-opacity', '0.25');
  } else if (currentSelectedSector === 'pairBC') {
    matchedRecords = datasetRecords.filter(s => inSetB(s) && inSetC(s));
    titleText = 'Pasangan Irisan B ∩ C';
    descText = 'Elemen yang masuk dalam himpunan B dan C.';
    boxTitle.innerText = 'Diagram Venn (Pasangan B & C)';
    if (circleB) circleB.setAttribute('fill-opacity', '0.25');
    if (circleC) circleC.setAttribute('fill-opacity', '0.25');
  } else if (currentSelectedSector === 'pairAC') {
    matchedRecords = datasetRecords.filter(s => inSetA(s) && inSetC(s));
    titleText = 'Pasangan Irisan A ∩ C';
    descText = 'Elemen yang masuk dalam himpunan A dan C.';
    boxTitle.innerText = 'Diagram Venn (Pasangan A & C)';
    if (circleA) circleA.setAttribute('fill-opacity', '0.25');
    if (circleC) circleC.setAttribute('fill-opacity', '0.25');
  } else if (currentSelectedSector === 'outside') {
    matchedRecords = datasetRecords.filter(s => !inSetA(s) && !inSetB(s) && !inSetC(s));
    titleText = 'Di Luar Himpunan (Komplemen U)';
    descText = 'Elemen yang tidak masuk ke dalam himpunan A, B, maupun C.';
    boxTitle.innerText = 'Diagram Venn (Di Luar Himpunan)';
  }

  titleElem.innerText = titleText;
  descElem.innerText = descText;
  countBadge.innerText = `${matchedRecords.length} Elemen`;
  totalLabel.innerText = `Total Semesta U: ${datasetRecords.length} Record`;

  if (matchedRecords.length === 0) {
    listContainer.innerHTML = `<p class="text-xs text-slate-400 italic text-center py-6">Tidak ada elemen pada sektor/pasangan ini.</p>`;
  } else {
    listContainer.innerHTML = matchedRecords.map((s, idx) => `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
          <div>
            <p class="font-bold text-xs text-slate-800">${s.nama}</p>
            <p class="text-[10px] text-slate-400 font-medium">ID: ${s.id} · Atribut: ${s.attr1}</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200/60">${s.attr2}</span>
      </div>
    `).join('');
  }
}

// Prinsip Inklusi-Eksklusi (PIE) Logic & Render[cite: 1]
function setPieMode(mode) {
  currentPieMode = mode;
  const btn2 = document.getElementById('pie-mode-2');
  const btn3 = document.getElementById('pie-mode-3');
  if (!btn2 || !btn3) return;
  if (mode === 2) {
    btn2.className = "px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
    btn3.className = "px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all";
  } else {
    btn3.className = "px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs transition-all";
    btn2.className = "px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all";
  }
  renderPIEInterface();
}

function renderPIEInterface() {
  const container = document.getElementById('pie-selectors-container');
  if (!container) return;

  if (currentPieMode === 2) {
    container.innerHTML = `
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Himpunan Pertama</label>
        <select class="w-full text-sm border-slate-200 rounded-xl focus:border-blue-600 focus:ring focus:ring-blue-600/20 text-slate-800" id="pie-set-1" onchange="calculatePIE()">
          <option value="A" selected>Himpunan A</option>
          <option value="B">Himpunan B</option>
          <option value="C">Himpunan C</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Himpunan Kedua</label>
        <select class="w-full text-sm border-slate-200 rounded-xl focus:border-blue-600 focus:ring focus:ring-blue-600/20 text-slate-800" id="pie-set-2" onchange="calculatePIE()">
          <option value="A">Himpunan A</option>
          <option value="B" selected>Himpunan B</option>
          <option value="C">Himpunan C</option>
        </select>
      </div>
      <div class="flex items-end">
        <button class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm" onclick="calculatePIE()">Hitung PIE 2 Himpunan</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Himpunan Pertama</label>
        <select class="w-full text-sm border-slate-200 rounded-xl text-slate-800 bg-slate-50 font-bold" id="pie-set-1" disabled>
          <option value="A" selected>Himpunan A</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Himpunan Kedua</label>
        <select class="w-full text-sm border-slate-200 rounded-xl text-slate-800 bg-slate-50 font-bold" id="pie-set-2" disabled>
          <option value="B" selected>Himpunan B</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Himpunan Ketiga</label>
        <select class="w-full text-sm border-slate-200 rounded-xl text-slate-800 bg-slate-50 font-bold" id="pie-set-3" disabled>
          <option value="C" selected>Himpunan C</option>
        </select>
      </div>
    `;
  }
  calculatePIE();
}

function calculatePIE() {
  const heading = document.getElementById('pie-result-heading');
  const finalCard = document.getElementById('pie-final-cardinality');
  const formulaDisplay = document.getElementById('pie-formula-display');
  const stepsContainer = document.getElementById('pie-breakdown-steps');
  const membersTitle = document.getElementById('pie-members-title');
  const membersCount = document.getElementById('pie-members-count');
  const membersList = document.getElementById('pie-members-list');

  if (!heading || !finalCard || !formulaDisplay || !stepsContainer || !membersList) return;

  if (currentPieMode === 2) {
    const set1Elem = document.getElementById('pie-set-1');
    const set2Elem = document.getElementById('pie-set-2');
    if (!set1Elem || !set2Elem) return;

    const set1Key = set1Elem.value;
    const set2Key = set2Elem.value;

    const set1Arr = getSetArray(set1Key);
    const set2Arr = getSetArray(set2Key);

    const set2Set = new Set(set2Arr.map(s => s.id));
    const intersectionArr = set1Arr.filter(s => set2Set.has(s.id));

    const unionMap = new Map();
    set1Arr.forEach(s => unionMap.set(s.id, s));
    set2Arr.forEach(s => unionMap.set(s.id, s));
    const unionArr = Array.from(unionMap.values());
    lastPIEResult = unionArr;

    heading.innerText = `PIE 2 Himpunan (|${set1Key} ∪ ${set2Key}|)`;
    finalCard.innerText = `|${set1Key} ∪ ${set2Key}| = ${unionArr.length}`;
    formulaDisplay.innerText = `|${set1Key} ∪ ${set2Key}| = |${set1Key}| + |${set2Key}| − |${set1Key} ∩ ${set2Key}|`;

    stepsContainer.innerHTML = `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <span class="font-medium text-slate-700">1. Kardinalitas Himpunan ${set1Key} (|${set1Key}|)</span>
        <span class="font-extrabold text-blue-700">${set1Arr.length} Elemen</span>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <span class="font-medium text-slate-700">2. Kardinalitas Himpunan ${set2Key} (|${set2Key}|)</span>
        <span class="font-extrabold text-cyan-700">${set2Arr.length} Elemen</span>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <span class="font-medium text-slate-700">3. Kardinalitas Irisan (|${set1Key} ∩ ${set2Key}|) [Dikurangi]</span>
        <span class="font-extrabold text-red-600">− ${intersectionArr.length} Elemen</span>
      </div>
      <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-between font-bold text-blue-900">
        <span>Hasil Akhir: ${set1Arr.length} + ${set2Arr.length} − ${intersectionArr.length}</span>
        <span class="text-sm font-extrabold">${unionArr.length} Elemen</span>
      </div>
    `;

    membersTitle.innerText = `Anggota Gabungan |${set1Key} ∪ ${set2Key}|`;
    membersCount.innerText = `${unionArr.length} Elemen`;
    membersList.innerHTML = unionArr.map((s, idx) => `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
          <div>
            <p class="font-bold text-xs text-slate-800">${s.nama}</p>
            <p class="text-[10px] text-slate-400 font-medium">ID: ${s.id} · Atribut: ${s.attr1}</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200/60">${s.attr2}</span>
      </div>
    `).join('');

  } else {
    const arrA = datasetRecords.filter(inSetA);
    const arrB = datasetRecords.filter(inSetB);
    const arrC = datasetRecords.filter(inSetC);

    const setB = new Set(arrB.map(s => s.id));
    const setC = new Set(arrC.map(s => s.id));
    const setA = new Set(arrA.map(s => s.id));

    const interAB = arrA.filter(s => setB.has(s.id));
    const interBC = arrB.filter(s => setC.has(s.id));
    const interAC = arrA.filter(s => setC.has(s.id));
    const interABC = arrA.filter(s => setB.has(s.id) && setC.has(s.id));

    const unionMap = new Map();
    arrA.forEach(s => unionMap.set(s.id, s));
    arrB.forEach(s => unionMap.set(s.id, s));
    arrC.forEach(s => unionMap.set(s.id, s));
    const unionArr = Array.from(unionMap.values());
    lastPIEResult = unionArr;

    heading.innerText = `PIE 3 Himpunan (|A ∪ B ∪ C|)`;
    finalCard.innerText = `|A ∪ B ∪ C| = ${unionArr.length}`;
    formulaDisplay.innerText = `|A ∪ B ∪ C| = |A| + |B| + |C| − (|A∩B| + |A∩C| + |B∩C|) + |A∩B∩C|`;

    stepsContainer.innerHTML = `
      <div class="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <span class="text-slate-700">1. Kardinalitas Tunggal (|A| + |B| + |C|)</span>
        <span class="font-bold text-blue-800">${arrA.length} + ${arrB.length} + ${arrC.length} = ${arrA.length + arrB.length + arrC.length}</span>
      </div>
      <div class="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <span class="text-slate-700">2. Irisan Ganda (− [|A∩B| + |A∩C| + |B∩C|])</span>
        <span class="font-bold text-red-600">− (${interAB.length} + ${interAC.length} + ${interBC.length}) = − ${interAB.length + interAC.length + interBC.length}</span>
      </div>
      <div class="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <span class="text-slate-700">3. Irisan Tiga (+ |A ∩ B ∩ C|)</span>
        <span class="font-bold text-emerald-600">+ ${interABC.length}</span>
      </div>
      <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-between font-bold text-blue-900">
        <span>Hasil Akhir PIE 3 Himpunan</span>
        <span class="text-sm font-extrabold">${unionArr.length} Elemen</span>
      </div>
    `;

    membersTitle.innerText = `Anggota Gabungan |A ∪ B ∪ C|`;
    membersCount.innerText = `${unionArr.length} Elemen`;
    membersList.innerHTML = unionArr.map((s, idx) => `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
          <div>
            <p class="font-bold text-xs text-slate-800">${s.nama}</p>
            <p class="text-[10px] text-slate-400 font-medium">ID: ${s.id} · Atribut: ${s.attr1}</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200/60">${s.attr2}</span>
      </div>
    `).join('');
  }
}

function exportPIECSV() {
  if (!lastPIEResult || lastPIEResult.length === 0) {
    alert('Tidak ada data hasil PIE untuk diunduh.');
    return;
  }
  let csvContent = "data:text/csv;charset=utf-8,ID,Nama,Attr1,Attr2,Flag\n" 
    + lastPIEResult.map(e => `"${e.id}","${e.nama}",${e.attr1},${e.attr2},"${e.flag}"`).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "hasil_inklusi_eksklusi.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderHimpunanTab() {
  const listU = document.getElementById('himpunan-list-u');
  if (listU) {
    listU.innerHTML = datasetRecords.map(s => `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50/70 border border-slate-100">
        <span class="font-medium text-slate-800 truncate">${s.nama}</span>
        <span class="text-[10px] text-slate-400 font-medium ml-1.5 shrink-0">${s.id}</span>
      </div>
    `).join('');
  }

  const listA = document.getElementById('himpunan-list-a');
  if (listA) {
    const arrA = datasetRecords.filter(inSetA);
    listA.innerHTML = arrA.length ? arrA.map(s => `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50/80 border border-slate-100">
        <span class="font-medium text-slate-800">${s.nama} (${s.id})</span>
        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] border border-blue-100">${s.attr1}</span>
      </div>
    `).join('') : `<p class="text-xs text-slate-400 italic">Kosong</p>`;
  }

  const listB = document.getElementById('himpunan-list-b');
  if (listB) {
    const arrB = datasetRecords.filter(inSetB);
    listB.innerHTML = arrB.length ? arrB.map(s => `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50/80 border border-slate-100">
        <span class="font-medium text-slate-800">${s.nama} (${s.id})</span>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/50">${s.flag}</span>
      </div>
    `).join('') : `<p class="text-xs text-slate-400 italic">Kosong</p>`;
  }

  const listC = document.getElementById('himpunan-list-c');
  if (listC) {
    const arrC = datasetRecords.filter(inSetC);
    listC.innerHTML = arrC.length ? arrC.map(s => `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50/80 border border-slate-100">
        <span class="font-medium text-slate-800">${s.nama} (${s.id})</span>
        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] border border-blue-100">${s.attr2}</span>
      </div>
    `).join('') : `<p class="text-xs text-slate-400 italic">Kosong</p>`;
  }
}

function switchTab(tabId) {
  const tabs = ['dashboard', 'dataset', 'himpunan', 'venn', 'pie', 'operasi', 'panduan', 'tentang'];
  tabs.forEach(t => {
    const sec = document.getElementById(`section-${t}`);
    const nav = document.getElementById(`nav-${t}`);
    if (sec) sec.classList.add('hidden');
    if (nav) {
      nav.className = 'nav-item-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 text-slate-600 hover:bg-[#F1F5F9] hover:text-slate-900 border-l-4 border-transparent group';
    }
  });

  const activeSec = document.getElementById(`section-${tabId}`);
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activeSec) activeSec.classList.remove('hidden');
  if (activeNav) {
    activeNav.className = 'nav-item-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150 bg-[#DBEAFE] text-[#2563EB] font-semibold border-l-4 border-[#2563EB] shadow-xs group';
  }

  // Close mobile sidebar overlay on tab select[cite: 1]
  if (window.innerWidth < 768) {
    document.body.classList.remove('mobile-sidebar-open');
  }

  if (tabId === 'operasi') {
    executeOperation();
  } else if (tabId === 'pie') {
    calculatePIE();
  }
}

function setDatasetFilter(filter) {
  currentFilter = filter;
  const filters = ['all', 'A', 'B', 'C', 'none'];
  filters.forEach(f => {
    const btn = document.getElementById(`filter-${f}`);
    if (!btn) return;
    if (f === filter) {
      btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-xs transition-colors";
    } else {
      btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors";
    }
  });
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById('student-table-body');
  if (!tbody) return;

  let filtered = datasetRecords.filter(s => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'A') return inSetA(s);
    if (currentFilter === 'B') return inSetB(s);
    if (currentFilter === 'C') return inSetC(s);
    if (currentFilter === 'none') return !inSetA(s) && !inSetB(s) && !inSetC(s);
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-400 italic">Tidak ada data yang ditemukan.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((s, idx) => {
    const sets = getRecordSets(s);
    const setBadges = sets.length > 0 ? sets.map(setName => {
      let colorClass = setName === 'A' ? 'badge-a' : setName === 'B' ? 'badge-b' : 'badge-c';
      return `<span class="inline-flex items-center justify-center w-5 h-5 rounded text-xs font-bold ${colorClass}">${setName}</span>`;
    }).join(' ') : `<span class="text-xs text-slate-400 italic">-</span>`;

    return `
      <tr class="hover:bg-blue-50/40 transition-colors">
        <td class="py-3 px-4 text-center text-slate-400 font-medium">${idx + 1}</td>
        <td class="py-3 px-4 font-semibold text-slate-800">${s.id}</td>
        <td class="py-3 px-4 text-slate-700 font-medium">${s.nama}</td>
        <td class="py-3 px-4 text-slate-700 font-semibold">${s.attr1}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
            ${s.flag}
          </span>
        </td>
        <td class="py-3 px-4 text-slate-700 font-medium">${s.attr2}</td>
        <td class="py-3 px-4"><div class="flex items-center gap-1.5">${setBadges}</div></td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteRecord('${s.id}')" class="text-slate-400 hover:text-red-600 transition-colors font-medium p-1 rounded hover:bg-red-50" title="Hapus">✕</button>
        </td>
      </tr>
    `;
  }).join('');
}

function openModal() {
  const modal = document.getElementById('modal-add-data');
  if (modal) modal.classList.remove('hidden');
}
function closeModal() {
  const modal = document.getElementById('modal-add-data');
  if (modal) modal.classList.add('hidden');
  const form = document.getElementById('form-tambah-mahasiswa');
  if (form) form.reset();
}

function saveStudent(e) {
  e.preventDefault();
  const id = document.getElementById('input-f1').value.trim();
  const nama = document.getElementById('input-f2').value.trim();
  const attr1 = parseInt(document.getElementById('input-f3').value);
  const attr2 = parseInt(document.getElementById('input-f4').value);
  const flag = document.querySelector('input[name="organisasi"]:checked').value;

  if (!id || !nama) return;

  datasetRecords.push({ id, nama, attr1, attr2, flag });
  closeModal();
  updateUI();
}

function deleteRecord(id) {
  if (confirm(`Yakin ingin menghapus data dengan ID ${id}?`)) {
    datasetRecords = datasetRecords.filter(s => s.id !== id);
    updateUI();
  }
}

function resetDataset() {
  if (confirm('Kembalikan dataset ke kondisi awal?')) {
    datasetRecords = currentDatasetType === 1 ? JSON.parse(JSON.stringify(INITIAL_STUDENTS)) : JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
    updateUI();
  }
}

function getSetArray(identifier) {
  if (identifier === 'U') return [...datasetRecords];
  if (identifier === 'A') return datasetRecords.filter(inSetA);
  if (identifier === 'B') return datasetRecords.filter(inSetB);
  if (identifier === 'C') return datasetRecords.filter(inSetC);
  return [];
}

function handleOpTypeChange() {
  const op = document.getElementById('op-type').value;
  const g2 = document.getElementById('group-set-2');
  const g1Label = document.querySelector('#group-set-1 label');
  const sym = document.getElementById('op-symbol-view');
  const compNote = document.getElementById('complement-note');

  if (op === 'complement') {
    g2.classList.add('hidden');
    sym.classList.add('hidden');
    compNote.classList.remove('hidden');
    if (g1Label) g1Label.innerText = 'Himpunan';
  } else {
    g2.classList.remove('hidden');
    sym.classList.remove('hidden');
    compNote.classList.add('hidden');
    if (g1Label) g1Label.innerText = 'Himpunan Pertama';

    if (op === 'union') sym.innerText = '∪';
    else if (op === 'intersection') sym.innerText = '∩';
    else if (op === 'diff_ab') sym.innerText = '−';
    else if (op === 'diff_ba') sym.innerText = '−';
  }
}

function executeOperation() {
  const opElem = document.getElementById('op-type');
  if (!opElem) return;
  const op = opElem.value;
  let set1Key = document.getElementById('op-set-1').value;
  let set2Key = document.getElementById('op-set-2').value;

  let set1 = getSetArray(set1Key);
  let set2 = getSetArray(set2Key);
  let result = [];
  let formulaText = '';
  let descText = '';

  if (op === 'union') {
    formulaText = `${set1Key} ∪ ${set2Key}`;
    descText = `Union — gabungan semua anggota ${set1Key} dan ${set2Key}`;
    const map = new Map();
    set1.forEach(s => map.set(s.id, s));
    set2.forEach(s => map.set(s.id, s));
    result = Array.from(map.values());
  } else if (op === 'intersection') {
    formulaText = `${set1Key} ∩ ${set2Key}`;
    descText = `Intersection — anggota yang ada di ${set1Key} dan ${set2Key}`;
    const s2Nims = new Set(set2.map(s => s.id));
    result = set1.filter(s => s2Nims.has(s.id));
  } else if (op === 'diff_ab') {
    formulaText = `${set1Key} − ${set2Key}`;
    descText = `Difference — anggota ${set1Key} yang tidak ada di ${set2Key}`;
    const s2Nims = new Set(set2.map(s => s.id));
    result = set1.filter(s => !s2Nims.has(s.id));
  } else if (op === 'diff_ba') {
    formulaText = `${set2Key} − ${set1Key}`;
    descText = `Difference — anggota ${set2Key} yang tidak ada di ${set1Key}`;
    const s1Nims = new Set(set1.map(s => s.id));
    result = set2.filter(s => !s1Nims.has(s.id));
  } else if (op === 'complement') {
    formulaText = `${set1Key}ᶜ`;
    descText = `Complement — anggota Semesta U yang tidak ada di ${set1Key}`;
    const s1Nims = new Set(set1.map(s => s.id));
    result = datasetRecords.filter(s => !s1Nims.has(s.id));
  }

  lastOperationResult = result;
  const percentSemesta = datasetRecords.length > 0 ? ((result.length / datasetRecords.length) * 100).toFixed(1) : 0;
  
  const resTitle = document.getElementById('result-title');
  if (resTitle) resTitle.innerText = formulaText;
  const resSubtitle = document.getElementById('result-subtitle');
  if (resSubtitle) resSubtitle.innerText = descText;
  const resBadge = document.getElementById('result-count-badge');
  if (resBadge) resBadge.innerText = `${result.length} record (${percentSemesta}% Semesta)`;

  const thead = document.getElementById('result-table-head');
  if (currentDatasetType === 1) {
    thead.innerHTML = `
      <tr>
        <th class="py-2.5 px-3">#</th>
        <th class="py-2.5 px-3">NIM</th>
        <th class="py-2.5 px-3">Nama</th>
        <th class="py-2.5 px-3">Nilai</th>
        <th class="py-2.5 px-3">Organisasi</th>
        <th class="py-2.5 px-3">Kehadiran</th>
        <th class="py-2.5 px-3">Himpunan</th>
      </tr>
    `;
  } else {
    thead.innerHTML = `
      <tr>
        <th class="py-2.5 px-3">#</th>
        <th class="py-2.5 px-3">Kode Produk</th>
        <th class="py-2.5 px-3">Nama Produk</th>
        <th class="py-2.5 px-3">Harga (Rp)</th>
        <th class="py-2.5 px-3">Promo</th>
        <th class="py-2.5 px-3">Stok Unit</th>
        <th class="py-2.5 px-3">Himpunan</th>
      </tr>
    `;
  }

  const rTbody = document.getElementById('result-table-body');
  if (rTbody) {
    if (result.length === 0) {
      rTbody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-slate-400 italic">Himpunan hasil operasi ini kosong.</td></tr>`;
    } else {
      rTbody.innerHTML = result.map((s, idx) => {
        const sets = getRecordSets(s);
        const setBadges = sets.map(setName => {
          let colorClass = setName === 'A' ? 'badge-a' : setName === 'B' ? 'badge-b' : 'badge-c';
          return `<span class="inline-flex items-center justify-center w-5 h-5 rounded text-xs font-bold ${colorClass}">${setName}</span>`;
        }).join(' ');

        return `
          <tr class="hover:bg-blue-50/40 transition-colors">
            <td class="py-2.5 px-3 text-slate-400 font-semibold">${idx + 1}</td>
            <td class="py-2.5 px-3 font-semibold text-slate-800">${s.id}</td>
            <td class="py-2.5 px-3 text-slate-700 font-medium">${s.nama}</td>
            <td class="py-2.5 px-3 text-slate-700 font-semibold">${s.attr1}</td>
            <td class="py-2.5 px-3 text-slate-700">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                ${s.flag}
              </span>
            </td>
            <td class="py-2.5 px-3 text-slate-700">${s.attr2}</td>
            <td class="py-2.5 px-3"><div class="flex items-center gap-1">${setBadges}</div></td>
          </tr>
        `;
      }).join('');
    }
  }
}

function copyResults() {
  if (!lastOperationResult || lastOperationResult.length === 0) {
    alert('Tidak ada data hasil operasi untuk disalin.');
    return;
  }
  const text = lastOperationResult.map(s => `${s.id}\t${s.nama}\t${s.attr1}\t${s.flag}\t${s.attr2}`).join('\n');
  navigator.clipboard.writeText(text).then(() => {
    alert('Data hasil operasi berhasil disalin ke clipboard!');
  });
}

function exportCSV() {
  if (!lastOperationResult || lastOperationResult.length === 0) {
    alert('Tidak ada data hasil operasi untuk diunduh.');
    return;
  }
  let csvContent = "data:text/csv;charset=utf-8,ID,Nama,Attr1,Flag,Attr2\n" 
    + lastOperationResult.map(e => `"${e.id}","${e.nama}",${e.attr1},"${e.flag}",${e.attr2}`).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "operasi_himpunan.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.addEventListener('DOMContentLoaded', () => {
  initData();
});
```[cite: 1]
