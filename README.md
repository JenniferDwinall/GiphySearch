To install dependencies

    yarn

If you would like to add additional dependencies, simply run

    yarn add --save <package-name>

To run the test suite

    nvm use && yarn test

To build and run the app in dev mode:

    nvm use && yarn dev

To build the production deployment:

    nvm use && yarn build

To run the production deployment:

    nvm use && yarn start

To view the application:

	http://localhost:3000

Completed:
GiphyAPIClient
- Supports returning search results, trending and random GIFs.
- Search and trending are hooked up to the application.
- Pagination and random are supported but not implemented.

- Use ReactJS, NextJS, React Router, Yarn, Styled Components, ES6.
- Display animiated GIFs.
- Links to homepage, search and trending displayed on navbar.
- Display list of trending GIFs on main view (http://localhost:3000/).  Displays below search results on mobile, to the right of results on destop & tablet.
- Show a search bar so a user can find a GIF (http://localhost:3000/ & http://localhost:3000/search)
- After the user searches for a term, app will display results of search right there in the main view.
- A list of previous search terms should be maintained and should be clickable to re-run that search.
- Limited CSS developed on Chrome.  Did not test other browsers.
- Semantic HTML.

TODOs:
GiphyAPIClient
- Implement pagination.
- Implement random to display as a link if search results return nothing.
- Supports development mode for the Giphy API (10k requests supported).  Implement rate-limit handling & caching.


- Fix issue with search bar input.  Autocomplete appears in the wrong place.
