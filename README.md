# Tahun Kabisat
Latihan 2 - Program untuk Mencari Tahun Kabisat.

Terdapat sebuah function tahunKabisat(tahun) yang diberikan sebuah parameter berupa tahun. Function akan me-return tahun apakah tahun merupakan tahun kabisat atau bukan. Seperti yang kita tahu, [tahun kabisat](https://id.wikipedia.org/wiki/Tahun_kabisat) adalah tahun yang bisa dibagi 4, tidak bisa dibagi 100 tetapi bisa dibagi 400.

## Code

```
function tahunKabisat(tahun){
  if(tahun % 4 === 0){
    if(tahun % 100 !== 0){
      return 'Tahun '+tahun+' adalah tahun kabisat';
    }else if(tahun % 400 === 0){
      return 'Tahun '+tahun+' adalah tahun kabisat';
    }else{
      return 'Tahun '+tahun+' bukan tahun kabisat';
    }
  }else{
    return 'Tahun '+tahun+' bukan tahun kabisat';
  }
}
console.log(tahunKabisat(1992));
console.log(tahunKabisat(1993));
console.log(tahunKabisat(2001));
console.log(tahunKabisat(1946));
console.log(tahunKabisat(1956));

```
