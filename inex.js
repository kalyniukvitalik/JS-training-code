let days = 15; // Дней в периоде
let period = 3; // Как часто я ем протеин (раз в три дня)
let workDayAmount = 200; // Количество протеина в будние
let weekendAmount = 100; // Количество протеина в выходные
let total = 0;

for (let day = 1; day <= days; day++) {
    if (day % period ===  0 && (day % 7 === 0 || day % 7 === 6)) {
    total += weekendAmount;
    console.log(total)
    } else  if (day % period === 0) {
      total += workDayAmount;
      console.log(total)
    }
  } 

