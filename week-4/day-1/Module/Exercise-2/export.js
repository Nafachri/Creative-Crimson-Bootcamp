export default class Karyawan {
    constructor(nama, divisi, perusahaan){
        this.nama = nama;
        this.divisi = divisi;
        this.perusahaan = perusahaan;
    }
    detail(){
        return `${this.nama} bekerja di ${this.perusahaan} dan tergabung dalam divisi ${this.divisi} `
    }
};