# Welcome

Frontend assignment application

## Installation

(Node version: LTS)

- clone the repo

```bash
#from project root
yarn install
```

## Usage

```bash
#from project root
yarn dev
```
- visit: [http://localhost:3000](http://localhost:3000)

## Libraries

- Vite: Frontend building tool with many handy features and conveniences
- prettier: Code styling
- eslint: Code analysis for identifying issues
- husky: Runs `eslint` and `prettier` before every commit to ensure code correctness for shared code
- typescript: Strong typing
- react-tooltip: Lightweight, handy tooltips
- vite-svgr: SVG support

## Implementation decisions

- Usage of `typescript` to showcase knowledge of it
- `prettier`, `eslint` and `typescript` configurations were based on preference
- Folder/project structure and naming conventions of files is based on my previous job's standards
- Intentionally avoided the use of any external libraries for styling and functional purposes in order to demonstrate css / javascript confidence. Many aspects of the application could have been handled differently (e.g modals, sliding menus, object manipulation) but I opted for showcasing the ability to custom make everything
- The mock data is included as a static file, thus creating the need to either import it in every component or pass it as props from one component to the other. Ideally, for data taken from an API I would have used a library such as react-query.  Allowing me to cache the data while also providing hooks with which every component can access that data.

## Possible improvements

- Better handling of typography for responsive design
- Error handling in case of absent data / loaders in case of slow network
- Better css code design (propably using a preprocessor) e.g variables for commonly used colors
- While I am satisfied with the code quality for the purposes of this assignment, it is an aspect with immense depth and something I always strive to improve at!
