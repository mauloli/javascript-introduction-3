const hariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rebu", "kamis", "jumat"]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000)
    })

}

hariKerja('selasa')
    .then((res) => console.log(`hari ini hari ${res}`))
    .catch((Error) => console.log(Error))

// const cekDay = async () => {

//     try {
//         console.log(await hariKerja())
//     } catch (Error) {
//         console.log(Error)
//     }
// }
// cekDay()