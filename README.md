<!-- @format -->

# trettontrettiosju

A short description of the product:

- The product is made to let you get to know the employees of 1337 a bit better! Where they are located, their contact information, how they look and so on.. You can also read a personal text, written by themselves. It can include a background story, what they're up to on their freetime, or what desserts they prefer. Basically anything :).
  You can also search and filter employees! See how many there are located in Skåne for example, by checking the office-checkboxes "Lund" and "Helsingborg". Or maybe you know someone who knows someone that's named something that starts with an A and is located in Ljubljana, and you're dying to know that persons full name.. Then check "Ljubljana" and put and "a" in the "Name" input and click search!
  There is also the possibility to change the employees layout. Choose between a presentation of cards or as a list.

---

The thoughts behind the design of the code:

- src/ folder structure: "components", "utils", "style", "store", "constants". Based on the project other folders might appear, but for this case it was enough.
- The "components" folder has the following folders: "layouts" and "helpers". The rest of the folders is casebased. This time the folder "employees" was added.
- Each component folder has the following files: "MainComponent.tsx", "mainComponent.style.scss", "exportFile.ts". If the component has props, there will also be a "mainComponent.types.ts" file. In some cases there's an "utils" folder and a "components" folder.
- Try to keep the "MainComponent.tsx" to "only" html, as much as possible atleast. If there's a lot of functions and states involved - create an "useHandleMainComponent.ts" in the folder "utils" and export the logic from there.

- Redux. A great tool for saving rows of code and keeping it clean.
- The employeesSlice has the following structure:
  "mainFolder"
  "mainSlice.ts"
  "mainSlice.types.ts"
  "exportFile.ts"
  "reducersFolder"
  "fetchActionsFolder"
  "actions.ts"
  "fetches.ts"
  "exportFile.ts"
  "stateActionsFolder"
  "actions.ts"
  "exportFile.ts"

- For keeping API Token safe I made a simple backend, using Nodejs and Express.

---

Motivation and reasoning of installed packages:

- Client:
- node-sass: I like styling in scss more than in css. Comes more naturally. Sometimes I style with the package "styled-components", it makes it easier to style with dynamic values. For this product it wasnt needed.
- react-redux & @reduxjs/toolkit: Great tools for saving rows of code and keeping it clean. Also easier to manage states.

- API:
- express: Most of the cases I've made I've used Express for my backend. I feel comfortable using it.
- cors: I really don't want to be blocked by CORS-policy :(
- dotenv: keeps my secrets safe.
- node-fetch: Needed for fetching the employees-API.

.......
