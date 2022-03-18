const luasJajarGenjang = (alas, tinggi) => new Promise((resolve, reject) => {
    let luas
    setTimeout(() => {
        if (typeof alas != 'number') {
            reject(new Error("alas dan tunggi harus angka !"))
        } else {
            luas = alas * tinggi
            resolve(luas)
        }
    }, 3000)
})

const menampilkanLuas = (luas) => {
    console.log(`luas jajar genjang = ${luas}`)
}


let alas = 10
let tinggi = 10
luasJajarGenjang(alas, tinggi)
    .then((luas) => (menampilkanLuas(luas)))



const kelilingJajarGenjang = () => new Promise((resolve, reject) => {


})