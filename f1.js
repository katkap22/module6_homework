let arr = [10, 88, true, 5, 0, 87, 99, 0, -22, 'sldfjsldkf', null, NaN];

function printCount(array) {
  let even = 0,
      odd = 0,
      nullEl = 0;

  array.forEach((item, index)=> {
    if (typeof item === 'number' && !isNaN(item)){
      if (item === 0){
          nullEl++;
      } else if (item % 2 === 0) {
          even++;
      } else odd++;
    }
  })
  console.log(`Количество четных элементов - ${even}, количество нечетных элементов - ${odd}.`);
  console.log(`Количество нулевых элементов - ${nullEl}`);
}

printCount(arr);