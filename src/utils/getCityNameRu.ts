export const getCityNameRu = (city: any) => {
  return city.local_names?.ru || city.name;
};
