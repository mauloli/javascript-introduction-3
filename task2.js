const getMounth = (callBack) => {
    setTimeout(() => {
        let error = false
        let month = ['januari', 'februari', 'maret',
            'april', 'mei', 'juni', 'juli', 'agustus',
            'september', 'oktober', 'november', 'desember']
        if (!error) {
            callBack(null, month)
        } else {
            callBack(new Error('sorry Data not found'), [])
        }
    }, 1000)

}

function showMonth(cekEr, month) {
    if (cekEr == null) {
        month.map((item) => {
            console.log(item)
        })
    } else {
        console.log(cekEr)
    }
}
getMounth(showMonth)