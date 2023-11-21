export function filterData(searcttxt, restList) {
  console.log(searcttxt);
  const fil = restList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searcttxt)
  );

  return fil;
}
