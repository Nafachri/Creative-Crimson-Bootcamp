let tanyaDivisi = prompt("Are you from Customer Service or Human Resource Division?");
let tugas1 = "Tugas anda adalah memantau proses export import dan berkomunikasi dengan customer"
let tugas2 = "Tugas anda adalah melakukan rekrutmen untuk calon pegawai baru"
switch (tanyaDivisi) {
    case "Customer Service":
        alert(tugas1);
        break;
    case "Human Resource":
        alert(tugas2);
        break;
    case "":
        alert("Anda tidak memiliki pekerjaan untuk saat ini")
    default:
        break;
}