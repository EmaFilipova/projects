"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await getProjects(); // Corrected the function name
  console.log(projects);
  // displayProjects(projects);
  displayProjectsGrid(projects);
}

async function getProjects() {
  const response = await fetch(
    "https://headless.portfolio.emafilipova.com/wp-json/wp/v2/projects?acf_format=standard"
  );
  const data = await response.json();
  return data;
}

function displayProjects(projects) {
  const projectsList = document.querySelector("#project-list");

  for (const project of projects) {
    // Corrected the parameter name in the for...of loop
    projectsList.insertAdjacentHTML(
      "beforeend",
      `
      <li>${project.title.rendered} </li>
      `
    );
  }
}

function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#project-grid");
  for (const project of projects) {
    // Corrected the parameter name in the for...of loop
    projectsGrid.insertAdjacentHTML(
      "beforeend",
      `    
    <article class="grid-item">
      <img src="${project.acf.image}" alt="${project.title.rendered}"></img>
      <h2>${project.title.rendered}</h2>
    <p>${project.acf.description}</p>
     <p>${project.acf.client}</p>
       <p>${project.acf.type}</p>
        <p><a href="${project.acf.link}" target="_blank">View Project</a></p>
      </article>
    `
    );
  }
}
