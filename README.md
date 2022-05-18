# **Pokemon API App**

Pokemon app completed as part of the 3SC technical challenge. Built using React, bootstrap.css and sass.

View the app [here](https://harry-gardiner.github.io/Sort-it-team-picker/).

Contents:

- [**Pokemon API App**](#Pokemon-API-App)
  - [## **Setup**](#-setup)
    - [**Requirements**](#requirements)
    - [**Gettins Started**](#Gettins-Started)
  - [## **Brief**](#-brief)
  - [## **Planning**](#-planning)
  - [## **Features**](#-features)
  - [## **Version Management**](#-version-management)
  - [## **Challenges**](#Challenges)
  - [## **Improvements**](#-improvements)
    - [Testing](#testing)
    - [Styling](#styling)
    - [Component Architecture](#Component-Architecture)

## **Setup**

---

### **Requirements**

Check you have npm installed by running npm -v.

### **Gettins Started**

Clone git repository and run npm install in the project folder:

`git clone git@github.com:Harry-Gardiner/Sort-it-team-picker.git`

`npm install`

Once the packages have installed, run the app in development mode:

`npm start`

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.

## **Brief**

---

Build a simple UI that interfaces with Pokemon API.

App should have the following functionality:

- Allow the user to view a list of pokemon (extra points for using pagination).
- Allow the user to search that list of pokemon by the pokemon's name.
- Allow the user to view a pokemon's details and statistics.
- Compare two pokemon's statistics together, side-by-side.
- Allow the user to maintain a list of their favourite Pokemon (extra points for data persistence (e.g. local storage)).
- Should run on modern web browsers (Chrome, Firefox, Safari, Opera etc).

## **Planning**

---

To assist with development I used Bootstrap styling. I imported the styles using a CDN. I chose to use bootstrap for its container and grid system to assist with app layout and organisation.

I also used Dart SASS. Using this compiler I can write clean, easy and less CSS. It also enables me to write CSS quicker. Where possible I try to use Block Element Modifier (BEM) methodology.

I started by planning out my dev route, knowing I would build the app one component at a time.

Pokemon Grid > Pagination > Search > Modal > Favourites > Compare.

This seemed like the most logical order as most component would reply on data from the grid.

## **Features**

---

**List of Pokemon**

The user can view a grid dispalying 20 pokemon. Pagination has been applied allowing the user to navigate 20 pokemon per page.

**Search**

The user can search for a pokemon by name. The search input is set to lower case to match api. The user cannot click the search button if the input is empty. If no match is found a simple alert is shown.

**Pokemon stats**

A user can view a pokemons details and statistics by clicking the info icon on each pokemon card or searching for the pokemon in the search bar. The pokemons details are shown as a modal overlaying the app.

**Compare**

A user can select 2 pokemon to compare side-by-side. Clicking the open pokeball on the card adds the pokemon to the compare arr. The pokeball image swaps to a closed (captured) ball, indicating that the pokemon has been added. Once 2 pokemon have been selected the compare section will be populated showing both pokemon in a vs context. Each pokemons stats are displayed along with name and image.

The compare component can be cleared by clicking the reset button.

**Favourties**

A user can set favourite pokemon. By clicking the star icon pokemon are added to the favs array. If a pokemon has been added to favs the star img will swap to a yellow star indicating its been selected.

Fav pokemon will appear in the fav section of thr app, inc their img and name.

The favs array persists in local storage and will remain on a page refresh unless local storage is cleared.

The favs array can be cleared using the reset button.

## **Version Management**

---

I used git and GitHub throughout the project. I used the Feature Branch Workflow, by working on feature branches that were merged back into main using pull requests from GitHub.

## **Challenges**

---

Managing state. Previously on other react projects I used Redux which definitely helps with state management. I had to refresh on lifting state and one way data flow as it was causing me some issues early on.

Your see alot of consolelogs thorught my project, these where used to see states.

## **Improvements**

---

### Testing

I carried out command line tests on team generation logic. With more time I would have carried out more thorough testing.

### Styling

With more time I would improve the front end styling, looking into accessibility of colours, font readbility etc. I would also have liked to inc some animations/transitions, but beleive that would have required looking into external libraries such as React Transition Group.

I could have expanded on my variables. Set common breakpoints.

### Component Architecture

Its been a while since I used React to build anything so I know I could improve on my use of reusable components, e.g. reusable button, card within the grid system. This would have made the files cleaner and easier to follow.

Also if I had more time I would have expanded on the favs and compare components. Make it so you could add or remove without having to reset. Also with compare as soon as you select one pokemon it would show in the compare component, where as it currenty only shows once 2 are selected.

With lots more time I would have loved to have created an actual pokedex background where the components load into the pokedex screen. That would look awesome!
