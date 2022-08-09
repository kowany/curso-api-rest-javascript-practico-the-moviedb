searchFormBtn.addEventListener('click', () => {
 location.hash = `#search=${searchFormInput.value}`;
});

trendingBtn.addEventListener('click', () => {
 location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
 history.back();
 // location.hash = '#home';
});


window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);


function navigation() {
 console.log(location);

 if (location.hash.startsWith('#trends')) {
  trendsPage();
 } else if (location.hash.startsWith('#search=')) {
  searchPage();
 } else if (location.hash.startsWith('#movie=')) {
  movieDetailPage();
 } else if (location.hash.startsWith('#category=')) {
  categoriesPage();
 } else {
  homePage();
 }

 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;

}

function homePage() {
 headerSection.classList.remove('header-container--long');
 headerSection.style.background = "";
 arrowBtn.classList.add('inactive');
 arrowBtn.classList.remove('header-arrow--white');
 headerTitle.classList.remove('inactive');
 headerCategoryTitle.classList.add('inactive');
 searchForm.classList.remove('inactive');
 trendingPreviewSection.classList.remove('inactive');
 categoriesPreviewSection.classList.remove('inactive');
 genericSection.classList.add('inactive');
 movieDetailSection.classList.add('inactive');
 
 getTrendingPreview();
 getCategoriesPreview();
}

function categoriesPage() {
 console.log('Categories');

 headerSection.classList.remove('header-container--long');
 headerSection.style.background = "";
 arrowBtn.classList.remove('inactive');
 arrowBtn.classList.remove('header-arrow--white');
 headerTitle.classList.add('inactive');
 headerCategoryTitle.classList.remove('inactive');
 searchForm.classList.add('inactive');
 trendingPreviewSection.classList.add('inactive');
 categoriesPreviewSection.classList.add('inactive');
 genericSection.classList.remove('inactive');
 movieDetailSection.classList.add('inactive');
 
 const [_, categoryData] = location.hash.split('=');  // ['#category', 'id-name']
 const [categoryId, categoryName] = categoryData.split('-');
 console.log(`El id de la categoría es: ${categoryId}`);
 const name = decodeURI(categoryName);
 headerCategoryTitle.innerHTML = name;
 getMoviesByCategory(categoryId);
}

function movieDetailPage() {
 console.log('Movie');

 headerSection.classList.add('header-container--long');
 // headerSection.style.background = "";
 arrowBtn.classList.remove('inactive');
 arrowBtn.classList.add('header-arrow--white');
 headerTitle.classList.add('inactive');
 headerCategoryTitle.classList.add('inactive');
 searchForm.classList.add('inactive');
 trendingPreviewSection.classList.add('inactive');
 categoriesPreviewSection.classList.add('inactive');
 genericSection.classList.add('inactive');
 movieDetailSection.classList.remove('inactive');

  // ['#movie', 'id']
  const [_, movieId] = location.hash.split('=');
 
  getMovieById(movieId);
}

function searchPage() {
 console.log('Search!!');

 console.log(`La búsqueda es: ${searchFormInput.value}`);
 headerSection.classList.remove('header-container--long');
 headerSection.style.background = '';
 arrowBtn.classList.remove('inactive');
 arrowBtn.classList.remove('header-arrow--white');
 headerTitle.classList.add('inactive');
 headerCategoryTitle.classList.add('inactive');
 searchForm.classList.remove('inactive');

 trendingPreviewSection.classList.add('inactive');
 categoriesPreviewSection.classList.add('inactive');
 genericSection.classList.remove('inactive');
 movieDetailSection.classList.add('inactive');

 // ['#search', 'query']
 const [_, query] = location.hash.split('=');
 getMoviesBySearch(query);
 searchFormInput.value = "";

}

function trendsPage() {
 console.log('TRENDS');

 headerSection.classList.remove('header-container--long');
 headerSection.style.background = '';
 arrowBtn.classList.remove('inactive');
 arrowBtn.classList.remove('header-arrow--white');
 headerTitle.classList.add('inactive');
 headerCategoryTitle.classList.remove('inactive');
 searchForm.classList.add('inactive');

 trendingPreviewSection.classList.add('inactive');
 categoriesPreviewSection.classList.add('inactive');
 genericSection.classList.remove('inactive');
 movieDetailSection.classList.add('inactive');

 headerCategoryTitle.innerHTML = 'Tendencias';

 getTrendingMovies();
}