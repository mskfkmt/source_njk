export default function eachElement(elm, callback) {
  for (let i = 0; i < elm.length; i++) {
     callback(elm[i], i)
  }
}