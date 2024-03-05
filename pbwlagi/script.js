// // alert("hallo")
// let name = [];
// console.log(typeof nama);

// const phi = 3.14;
// console.log(phi);

// let ipk = 4.0;

// console.log(ipk);
// let isSuccess = true;
// console.log(isSuccess);

// let fakultas = ["Fakultas Ilmu Komputer", "Fakultas Hukum", "Fakultas Teknik"];
// console.log(fakultas[1]);
// const hukum = fakultas[1];
// console.log(hukum);

// const [fakul1, fakul2, fakul3] = fakultas;
// console.log(fakul3);
// fakultas.push("Fakultas Kedokteran");
// console.log(fakultas);
// fakultas.pop();
// console.log(fakultas);
// fakultas.shift();
// console.log(fakultas);
// fakultas.unshift(2);
// fakultas.unshift(true);
// console.log(fakultas);

// let results = 18 < 2;
// console.log(results);
// let namaDepan = "Resti";
// let namaTengah = " Dwi";
// let namaBelakang = " Artika";
// let fullName = namaDepan + namaTengah + namaBelakang;
// console.log(fullName);

// let male = ["Budi", "Ujang", "Joko", "Dedi"];
// let female = ["Lili", "Ririn", "Susi", "Siti"];
// let students = [...male, ...female];
// console.log(students);

// let orang = {
//   nama: "Rere",
//   Kelas: 4,
//   NPM: 2210631170042,
// };
// console.log(orang)
// console.log(orang.nama)
// console.log(orang["Kelas"])
// console.log(orang.NPM)

// let NIlai;
// Nilai = 100
// if(Nilai === 100){
//     console.log("Sempurna")
// }

// let Nomor = [1,2,3,4,5]
// for(let i of Nomor){
//     console.log(i)
// }

// function nama(number1, number2){
//     console.log("number1, number2")
// }
// nama(1,2)
// const hallo = () =>{
//     console.log("Hallo World")
// }
// hallo()

// const urutan = (...nomor)=>{
//     console.log(...nomor)
// }
// urutan (1,2,3,4,5,6,7,8)

// function Average(...index){
//     let sum = index.length
//     let results = 0
//     for(const i of index){
//         results += i
//     }
//     return results/sum
// }

// console.log("rata-ratanya adalah "+ Average(2,3,4,6,7,8))

// const urutan = (...nomor) => {
//     console.log(...nomor);
// }

const urutan = (...nomor)=>{
     console.log(...nomor)
}
urutan(1, 2, 3, 4, 5, 6, 7, 8);

const Average = (...index) => {
    let sum = index.length;
    let results = 0;
    for (const i of index) {
        results += i;
    }
    return results / sum;
}
console.log("rata-ratanya adalah "+ Average(2,3,4,6,7,8))

