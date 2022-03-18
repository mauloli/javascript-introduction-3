const luasJajarGenjang = (alas, tinggi) => new Promise((resolve, reject) => {
    let luas
    setTimeout(() => {
        if (typeof (alas, tinggi) != 'number') {
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


// let alas = 10
// let tinggi = 10
// luasJajarGenjang(alas, tinggi)
//     .then((luas) => (menampilkanLuas(luas)))

//---------------------------------------------------------------------------------------------

const kelilingJajarGenjang = (alas, tinggi) => new Promise((resolve, reject) => {
    let keliling
    setTimeout(() => {
        if (typeof (alas, tinggi) !== 'number') {
            reject(new Error("alas dan tunggi harus angka !"))
        } else {
            keliling = 2 * (alas + tinggi)
            resolve(keliling)
        }
    }, 3000)

})

const tampilkanKeliling = (keliling) => new Promise((resolve, reject) => {
    console.log(`keliling jajar genjang = ${keliling}`)
    resolve(keliling)
})

const hitung = async () => {
    try {
        keliling = await kelilingJajarGenjang(10, 10)
        await tampilkanKeliling(keliling)
    } catch (error) {
        console.log(error)
    }
}

hitung()