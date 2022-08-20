function getDate(start, end) {
  let result = [];
  const dayms = 24 * 60 * 60 * 1000;
  const starttime = start.getTime();
  const endtime = end.getTime();
  const range = endtime - starttime;
  console.log(range);
  let total = 0;
  while (total <= range) {
    result.push(new Date(starttime + total).toLocaleDateString().replace(/\//g, '-'));
    total += dayms;
  }
  console.log(result);
}

getDate(new Date('2020-3-19'), new Date('2020-3-21'));