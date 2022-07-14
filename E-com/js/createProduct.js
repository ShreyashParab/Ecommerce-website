const productsParentDiv = document.getElementById('products')

const createProductDiv = (product) => {
	const colDiv = document.createElement('div')
	const productDiv = document.createElement('div')
	const productImg = document.createElement('img')
	const productBody = document.createElement('div')
	const productHeader = document.createElement('div')
	const productTitle = document.createElement('h6')
	const productPrice = document.createElement('h6')
	const productDescription = document.createElement('p')
	const ratingStar1 = document.createElement('span')
	const ratingStar2 = document.createElement('span')
	const ratingStar3 = document.createElement('span')
	const ratingStar4 = document.createElement('span')
	const ratingStar5 = document.createElement('span')
	const ratingCount = document.createElement('span')
  // const ratingRate = document.createElement('span')
	const cardButtonOuter = document.createElement('div')
	const addToCartButton = document.createElement('a')
	const buyButton = document.createElement('a')
    
	colDiv.classList = 'col-md-3'
	productDiv.classList = 'card product'
	productImg.classList = 'card-img-top'
	productBody.classList = 'card-body'
	productHeader.classList = 'product-header'
	productTitle.classList = 'card-title product-title'
	productPrice.classList = 'card-title product-price'
	productDescription.classList = 'card-text'
	ratingStar1.classList = 'fa fa-star'
	ratingStar2.classList = 'fa fa-star'
	ratingStar3.classList = 'fa fa-star'
	ratingStar4.classList = 'fa fa-star'
	ratingStar5.classList = 'fa fa-star'
	ratingCount.classList = 'rating-count'
    // ratingRate.classList = 'rating'
	cardButtonOuter.classList = 'btn-outer'
	addToCartButton.classList = 'btn btn-sm add-to-cart-btn'
	buyButton.classList = 'btn btn-sm buy-btn'

    colDiv.id = `product-${product.id}`


    productTitle.innerText = `${product.title.slice(0,18)}...`
    productPrice.innerText = `$${product.price}`
    productDescription.innerText = `${product.description.slice(0,50)}...`
    ratingCount.innerText =`(${product.rating.count})`
    // ratingRate.innerText = `${product.rating.rate}`
    addToCartButton.innerHTML = '<lord-icon src="https://cdn.lordicon.com/gtcqrwnh.json" trigger="loop-on-hover" colors="primary:#ffffff" style="width:25px;height:25px"></lord-icon>'
    buyButton.innerText = 'Buy Now'
    
    productImg.src = product.image
  	productImg.alt = 'product-img'  
    
    colDiv.appendChild(productDiv)
    productDiv.appendChild(productImg)
    productDiv.appendChild(productBody)
    productBody.appendChild(productHeader)
    productHeader.appendChild(productTitle)
    productHeader.appendChild(productPrice)
    productBody.appendChild(productDescription)
    productBody.appendChild(ratingStar1)
    productBody.appendChild(ratingStar2)
    productBody.appendChild(ratingStar3)
    productBody.appendChild(ratingStar4)
    productBody.appendChild(ratingStar5)
    productBody.appendChild(ratingCount)
    productBody.appendChild(cardButtonOuter)
    cardButtonOuter.appendChild(addToCartButton)
    cardButtonOuter.appendChild(buyButton)

    productsParentDiv.appendChild(colDiv)
    
    addToCartButton.setAttribute("title","Add to Cart")
    addToCartButton.addEventListener('click', function () {
      addToCart(product.id)
      addToCartButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/> </svg>'
      addToCartButton.setAttribute("title","Added to Cart")
    })

  
    let giveRating = Math.ceil(product.rating.rate)
    
  if(giveRating <= 5)
  {
    switch(giveRating)
    {
      case 1:
        ratingStar1.classList =  "fa fa-star checked"
        ratingStar2.classList = "fa fa-star "
        ratingStar3.classList = "fa fa-star "
        ratingStar4.classList = "fa fa-star "
        ratingStar5.classList = "fa fa-star "
      break;
      case 2:
        ratingStar1.classList =  "fa fa-star checked"
        ratingStar2.classList = "fa fa-star checked"
        ratingStar3.classList = "fa fa-star "
        ratingStar4.classList = "fa fa-star "
        ratingStar5.classList = "fa fa-star "
      break;
      case 3:
        ratingStar1.classList =  "fa fa-star checked"
        ratingStar2.classList = "fa fa-star checked"
        ratingStar3.classList = "fa fa-star checked"
        ratingStar4.classList = "fa fa-star "
        ratingStar5.classList = "fa fa-star "
      break;
      case 4:
        ratingStar1.classList = "fa fa-star checked"
        ratingStar2.classList = "fa fa-star checked"
        ratingStar3.classList = "fa fa-star checked"
        ratingStar4.classList = "fa fa-star checked"
        ratingStar5.classList = "fa fa-star "
      break;
      case 5:
        ratingStar1.classList =  "fa fa-star checked"
        ratingStar2.classList = "fa fa-star checked"
        ratingStar3.classList = "fa fa-star checked"
        ratingStar4.classList = "fa fa-star checked"
        ratingStar5.classList = "fa fa-star checked"
      break;
    }
  }

  

}
    
    
    // <div class="col-md-3 my-2">
    //     <div class="card">
    //         <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <div class="product-header">
    //                 <h6 class="card-title"><b><a href="#">Foldsack No. 1 Backpack, Fits 15 Laptops.</a></b></h6>
    //                 <h6 class="card-price product-price">$30</h6>
    //                 </div>
    //                 <p class="card-text">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve</p>
    //                 <div class="star" id="star">
    //                 <span class="fa fa-star" id="one"></span>
    //                 <span class="fa fa-star" id="two"></span>
    //                 <span class="fa fa-star" id="three"></span>
    //                 <span class="fa fa-star" id="four"></span>
    //                 <span class="fa fa-star" id="five"></span>
    //                 <span class="rating-count">(102)</span>
    //                 </div>
    //                 <div class="btn-outer">
    //                 <a href="#" class="btn btn-sm">Add to Cart</a>
    //                 <a href="#" class="btn btn-sm buy-btn">Buy Now</a>
    //                 </div>
    //             </div>  
    //     </div>
    // </div>