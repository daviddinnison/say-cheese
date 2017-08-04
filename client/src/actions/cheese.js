// export const fetchCheeses= ()=> {
//   return(dispatch)
// }

export const fetchCheeses = () => {
  return (dispatch) => {
  fetch('/api/cheeses')
      .then(response => response.json())