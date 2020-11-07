let askPembeli = prompt("Tuliskan Nama Anda");
let askProduk = prompt("Apa Yang Ingin Anda Beli?");
function toko (pembeli, produk) {
    alert (`Terimakasih ${pembeli} sudah membeli ${produk} di toko kami`);
    console.log(`Terimakasih ${pembeli} sudah membeli ${produk} di toko kami`)
}
toko (askPembeli, askProduk);