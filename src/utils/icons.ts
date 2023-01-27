const importAll = (r: any) => {
  const images: any = {}
  r.keys().map((item: any, index: any) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const logos = importAll(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/))

export default logos
