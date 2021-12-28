window.function = function (total_mins) {
  if (total_mins.value === undefined) return undefined;
  var hours = Math.floor(total_mins.value/60);
  var mins = total_mins.value % 60;
  return hours.toString().padStart(2, '0') + ":" + mins.toString().padStart(2, '0');
}