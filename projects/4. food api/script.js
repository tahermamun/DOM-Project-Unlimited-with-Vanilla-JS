/**
 * 1. show some food using api -done
 * 2. search food using api
 */

const history = []



const getData = (api, cb) => {
    fetch(api)
        .then(response => response.json())
        .then(data => cb(data.meals))
}


const displayData = (data) => {
    const foodSection = document.querySelector(".all_food")
    foodSection.innerHTML = null
    data.map(food => {
        const div = document.createElement('div')
        div.classList = "card"

        let item = `
        <img class="food_img" src="${food.strMealThumb}" alt="food img">
        <h3>${food.strMeal}</h3>
        `
        div.innerHTML = item
        foodSection.appendChild(div)
    })
}


const form = document.getElementById("search_box")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = document.getElementById("input_box").value
    handleHistory(inputValue)
    getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`, displayData)
})


const displayHistory = () => {
    const historyEl = document.getElementById("show_history")
    historyEl.innerHTML = null
    history.map(item => {
        const p = document.createElement("p")
        p.innerText = `${item.keyword} - ${item.numberOfTime}`
        historyEl.appendChild(p)
    })
}



const handleHistory = (data) => {

    const found = history.filter((item) => {
        return item.keyword === data
    })
    // const found2 = history.filter(function(item) {
    //     return item === data
    // })

    if (found == false) {
        history.push({
            id: Date.now(),
            keyword:data,
            numberOfTime: 1
        })
    }
    else if(found){
        history.map(item=>{
            if(found[0].id==item.id){
                item.numberOfTime=item.numberOfTime+1
            }
        })
    }

    displayHistory()

console.log(history);


    // console.log(found);
    // history.push(data)
    // displayHistory()
}



getData("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood", displayData)



