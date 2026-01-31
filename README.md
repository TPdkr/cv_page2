# cv page 2.0(early development)
New personal website repository. Now with better design and react! Currently in early development.

> [!IMPORTANT]
> due to the way react + github pages work reloading on a non main page can seem to lead to 404, which
> can be simply resolved by going back to the main page and reloading there if needed.

[Main page](https://tpdkr.github.io/cv_page2/)

# Version history, roadmap
Current version: 2.0 

- 2.1: planned search and filter for projects, refinements on content
- 2.0: early development of the website
- 1.0: first personal website, stored in a different repo, never finished

# Project progress
Not all pages/parts are working yet
- main page ✅
- error page ✅
- theming ✅
- navigation bar ✅
- cv link, transcript ❌ (waiting for updates for the cv and transcript to add data)
- share page ✅
- projects catalouge ✅
- individual project pages ✅

# Project details
## Langauges, frameworks and tools
Mainly implemented everything using react, GitHub pages for hosting and  with GitHub for version control.

- React
- Javascript
- HTML
- CSS
- GitHub pages
- GitHub/git

## Resources and applications
- Lunacy for design
- VS code for implementation
- [tooooools.app](https://www.tooooools.app/effects/dots) for images filter (exact specifications at [filters.md](./filters.md))
- [feather icons](https://feathericons.com/)
- [ip api](https://api.country.is/)

# Project workflow and details
These can be found on the about page of the project itself. But also at the following file [project.md](./project.md)
# Repository
## File structure
Results were achieved by running the command below in the main and src directories of the repository.

```
tree -L 3 --gitignore
```

This is the overall file structure of the repository:
```
.
├── README.md
└── website
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── public
    │   └── vite.svg
    ├── README.md
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   ├── atomics
    │   ├── hidden_pages
    │   ├── index.css
    │   ├── main.jsx
    │   ├── mainpage
    │   └── navbar
    └── vite.config.js
```

## Source files directory details

```
.
.
├── App.css
├── App.jsx
├── assets
│   ├── atom_dark.svg
│   ├── cross_dark.svg
│   ├── cross.svg
│   ├── frog.gif
│   ├── glitch.gif
│   ├── me_dark.png
│   ├── menu.svg
│   ├── react.svg
│   ├── school.png
│   ├── star_dark.svg
│   ├── star_sharp_dark.svg
│   ├── uni.png
│   └── wave.png
├── atomics
│   ├── button.jsx
│   ├── button.module.css
│   ├── grid.jsx
│   ├── grid.module.css
│   ├── separator.jsx
│   └── separator.module.css
├── hidden_pages
│   ├── building.jsx
│   └── building.module.css
├── index.css
├── main.jsx
├── mainpage
│   ├── contacts.jsx
│   ├── contacts.module.css
│   ├── edu.jsx
│   ├── edu.module.css
│   ├── header.jsx
│   ├── header.module.css
│   ├── mainpage.jsx
│   ├── mainpage.module.css
│   ├── volunteering.jsx
│   ├── volunteering.module.css
│   ├── zmt.jsx
│   └── zmt.module.css
└── navbar
    ├── footer.jsx
    ├── footer.module.css
    ├── navbar.jsx
    └── navbar.module.css

6 directories, 41 files
```

# Set up a local instance
First clone the repository in whatever way you want. Make sure that the node package manager is installed on your system. 
Then go to ```./website``` folder. It contains all actuall react code and where npm commands need to be used.

Then install all necessary libraries for the project with command below.

```
npm install
```

Now run the command below to run the website locally. Follow the localhost link that pops up to open the website in your browser of choice.

```
npm run dev
```