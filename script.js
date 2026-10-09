document.getElementById('file-uploader').addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (!file) {
    return;
  }

  const reader = new FileReader();

  // Event ketika file selesai dibaca
  reader.onload = function(e) {
    const content = e.target.result;
    // Menampilkan isi file ke elemen <pre>
    document.getElementById('file-output-box').textContent = content;
    
    console.log("File berhasil dibaca:", file.name);
    
    // Jika Anda ingin memproses data CSV/Text secara otomatis, 
    // Anda bisa memparsing variabel 'content' di sini.
  };

  // Event jika terjadi error saat membaca file
  reader.onerror = function() {
    alert("Gagal membaca file. Silakan coba lagi.");
  };

  // Membaca file sebagai teks biasa
  reader.readAsText(file);
});
