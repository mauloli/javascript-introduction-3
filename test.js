const cekDay = async () => {
    const hariKerja = (day) => {
        return new Promise((resolve, reject) => {
            const dataDay = ["senin", "selasa", "rebu", "kamis", "jumat"]
            setTimeout(() => {

                let cek = dataDay.find((item) => {
                    return item === day
                })
                if (cek) {
                    resolve(`hari ini hari ${cek}`)
                } else {
                    reject(new Error('hari ini bukan hari kerja'))
                }
            }, 3000)
        })

    }
    try {
        console.log(await hariKerja('senin'))
    } catch (Error) {
        console.log(Error)
    }
}
// cekDay()