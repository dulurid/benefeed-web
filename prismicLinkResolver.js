export default (doc) => {
  if (doc.type === 'products') {
    console.log('prismic =>', doc)

    return `/products/${doc.uid}`
  }

  if (doc.type === 'blogs') {
    console.log('prismic =>', doc)

    return `/blog/${doc.uid}`
  }
  return '/'
}
