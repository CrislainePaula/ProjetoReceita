// pesquisar em inglês as receitas


function searchRecipe() {
    const ingredient = document.getElementById('ingredient').value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const recipesDiv = document.getElementById('recipes');
        recipesDiv.innerHTML = '';
  
        if (data.meals) {
          data.meals.forEach(meal => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe';
  
            const img = document.createElement('img');
            img.src = meal.strMealThumb;
            img.alt = meal.strMeal;
  
            const contentDiv = document.createElement('div');
            contentDiv.className = 'recipe-content';
  
            const title = document.createElement('h3');
            title.innerText = meal.strMeal;
  
            const link = document.createElement('a');
            link.href = `https://www.themealdb.com/meal/${meal.idMeal}`;
            link.target = '_blank';
            link.innerText = 'Veja a receita completa';
  
            contentDiv.appendChild(title);
            contentDiv.appendChild(link);
  
            recipeDiv.appendChild(img);
            recipeDiv.appendChild(contentDiv);
  
            recipesDiv.appendChild(recipeDiv);
          });
        } else {
          const noResults = document.createElement('p');
          noResults.className = 'no-results';
          noResults.innerText = 'Nenhuma receita encontrada.';
          recipesDiv.appendChild(noResults);
        }
      })
      .catch(error => console.error('Erro ao buscar receitas:', error));
  }
  
