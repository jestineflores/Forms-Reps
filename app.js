console.log("Working")

fetch('http://localhost:3000/coffee_shops')
    .then(response => response.json())
    .then(coffeeShops => displayCoffeeShops(coffeeShops))

    function displayCoffeeShops(coffeeShops) {
        coffeeShops.forEach(coffeeShop => {
            const h2 = document.createElement('h2')
            h2.innerText = coffeeShop.name + ' | ' + coffeeShop.location
            document.body.append(h2)
        })
    }   

const newCoffeeShopForm = document.querySelector('#new-coffee-shop-form')
console.log(newCoffeeShopForm)

function completeCoffeeShopForm(){
    const select = document.createElement('select')
    select.name = 'capacity'
    const capacityOptions = [1,2,3,4,5]
    capacityOptions.forEach(capacityOption => {
        const newOption = document.createElement('option')
        newOption.value = capacityOption
        newOption.innerText = capacityOption
        select.appendChild(newOption)
    })
    const capacityLabel = document.createElement('label')
    capacityLabel.innerText = 'Capacity:'
    capacityLabel.for = 'capacity'
    newCoffeeShopForm.append(capacityLabel, select)


    const submitButton = document.createElement('input')
    submitButton.type = 'submit'
    submitButton.value = "Add Coffee Shop"
    newCoffeeShopForm.append(submitButton)

}

completeCoffeeShopForm()


