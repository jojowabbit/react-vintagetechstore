export function filterFeatured(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
