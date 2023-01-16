

const searchMeal = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadMeals(data.meals))

    searchField.value = ''
}

const loadMeals = (meals) => {
    const cardContainer = document.getElementById('card-container');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
        </div>
         </div>
        `;
        cardContainer.appendChild(div)
        // console.log(meal)
    });
}

// meal details 
const mealDetails = (mealId) => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

const displayDetails = (meals) => {
    console.log(meals)
    const detailsCard = document.getElementById('details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meals.strMeal}</h5>
                <p class="card-text">${meals.strInstructions.slice(0, 250)}</p>
                <a href="${meals.strYoutube}" class="btn btn-primary">Go somewhere</a>
        `;
    detailsCard.appendChild(div)


}