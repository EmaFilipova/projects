"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await getProjects(); // Fetch projects data from the API
  console.log(projects); // Log the projects data to the console
  // displayProjects(projects); // Commented out: function to display projects in a list
  displayProjectsGrid(projects); // Function to display projects in a grid
}

// Function to fetch projects data from the API
async function getProjects() {
  const response = await fetch(
    "https://headless.portfolio.emafilipova.com/wp-json/wp/v2/projects?acf_format=standard"
  ); // Fetch data from the API
  const data = await response.json(); // Parse the JSON response
  return data; // Return the parsed data
}

// Function to display projects as a list (currently not used)
function displayProjects(projects) {
  const projectsList = document.querySelector("#project-list"); // Select the project list container

  for (const project of projects) {
    // Loop through each project
    projectsList.insertAdjacentHTML(
      "beforeend",
      `
      <li>${project.title.rendered} </li>
      ` // Insert list item for each project
    );
  }
}

// Function to display projects in a grid
function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#project-grid"); // Select the project grid container
  for (const project of projects) {
    // Loop through each project
    projectsGrid.insertAdjacentHTML(
      "beforeend",
      `    
    <article class="grid-item">
      <img src="${project.acf.image}" alt="${project.title.rendered}" /> <!-- Project image -->
      <h2>${project.title.rendered}</h2> <!-- Project title -->
      <p>${project.acf.description}</p> <!-- Project description -->
      <p>${project.acf.client}</p> <!-- Project client -->
      <p>${project.acf.type}</p> <!-- Project type -->
      <p><a href="${project.acf.link}" target="_blank">View Project</a></p> <!-- Project link -->
    </article>
    ` // Insert article for each project with image, title, description, client, type, and link
    );
  }
}
