const productSpinner = document.getElementById('product-spinner')

const fetchProducts = async () => {
	const res = await fetch('https://fakestoreapi.com/products')
	const data = await res.json()
    productSpinner.style.display = 'none'

	data.forEach(product => createProductDiv(product))
}






// const fetchProducts = async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json()
//     console.log(data)
//     data.forEach(product => createProductDiv(product)) 
// }



