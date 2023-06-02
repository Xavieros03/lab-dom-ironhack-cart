// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  
  const subtotal = Number(price) * Number(quantity)
  
  const subtotalElm = product.querySelector('.subtotal span')
  
  subtotalElm.innerText = subtotal
  return subtotal

  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here
    const products = document.getElementsByClassName('product')
    const productsClone = [...products]
    let total = 0
    productsClone.forEach(product => total += updateSubtotal(product))


  // ITERATION 3
  //... your code goes here
  const totalElm = document.querySelector('#total-value span')
  totalElm.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const product = target.parentNode.parentNode
  const subtotal = product.querySelector('.subtotal span').innerText
  const totalElm = document.querySelector('#total-value span')
  const currentTotal = Number(totalElm.innerText)
  product.parentNode.removeChild(product)
  
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  const productNameInput = document.querySelector('.create-product input[type="text"]')
  const productPriceInput = document.querySelector('.create-product input[type="number"]')
  const productName = productNameInput.value
  const productPrice = Number(productPriceInput.value)

  if (productName && productPrice > 0) {
    const productTable = document.querySelector('#cart tbody')

    const newRow = document.createElement('tr')
    newRow.classList.add('product')

    const nameCell = document.createElement('td')
    const priceCell = document.createElement('td')
    const quantityCell = document.createElement('td')
    const subtotalCell = document.createElement('td')
    const removeCell = document.createElement('td')

    nameCell.innerHTML = `<span>${productName}</span>`
    priceCell.innerHTML = `$<span>${productPrice.toFixed(2)}</span>`
    quantityCell.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'
    subtotalCell.innerHTML = '<span class="subtotal">$0.00</span>'
    removeCell.innerHTML = '<button class="btn btn-remove">Remove</button>'

    newRow.appendChild(nameCell)
    newRow.appendChild(priceCell)
    newRow.appendChild(quantityCell)
    newRow.appendChild(subtotalCell)
    newRow.appendChild(removeCell)

    productTable.appendChild(newRow)

    productNameInput.value = ''
    productPriceInput.value = '0'

    const removeButton = removeCell.querySelector('.btn-remove')
    removeButton.addEventListener('click', removeProduct)

    
    calculateAll();
  }
 
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  //... your code goes here
  const allRemoves = document.getElementsByClassName("btn btn-remove")
  const allRemovesClone = [...allRemoves]
  allRemovesClone.forEach(element => {
    element.addEventListener('click', removeProduct)
  })

  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
});
