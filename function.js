window.function = function (total) {
  if (total.value === undefined) return undefined;
  var hours = Math.floor(total.value/60);
  var mins = total.value % 60;
  return hours.toString().padStart(2, '0') + ":" + mins.toString().padStart(2, '0');
}