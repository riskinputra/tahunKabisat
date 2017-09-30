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
