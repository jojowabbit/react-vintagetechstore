import url from "./URL";
// flatten products
export function flattenProducts(data) {
  return data.map((item) => {
    // cloudinaru setup
    // let image = item.image.url;
    // local setup + no deployment
    let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}
// filter featured products
export function filterFeatured(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
