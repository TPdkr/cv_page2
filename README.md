# cv page 2.0(early development)
New personal website repository. Now with better design and react! Currently in early development.

> [!IMPORTANT]
> due to the way react + github pages work reloading on a non main page can seem to lead to 404, which
> can be simply resolved by going back to the main page and reloading there if needed.

[Main page](https://tpdkr.github.io/cv_page2/)

# Version history, roadmap
Current version: 2.0 

- 2.1: planned search and filter for projects, refinements on content
- 2.0: early development of the website <-current
- 1.0: first personal website, stored in a different repo, never finished

# Project progress

## Version 2.1
Coming soon

## Version 2.0
All essential functionality is active
- main page ✅
- error page ✅
- theming ✅
- navigation bar ✅
- cv link, transcript, language certificate ✅
- share page ✅
- projects catalouge ✅
- individual project pages ✅

# Project details
These can be found on the about page of the project itself. But also at the following file [project.md](./project.md)

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

## doc md files in the repo
- [project.md](./project.md)
- [filters.md](./filters.md)

# Repository
## File structure
Results were achieved by running the command below in the main directory of the repository.

```
tree -L 3 --gitignore
```

This is the overall file structure of the repository:
```
.
├── filters.md
├── project.md
├── README.md
└── website
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── public
    │   └── assets
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
    │   ├── navbar
    │   ├── other
    │   ├── projects
    │   └── themer.jsx
    └── vite.config.js

12 directories, 14 files
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