# NinjaRMM Interview Project

## How to run

_This was built with NodeJS v16.2 and npm v7.13._

```bash
npm install
npm start
```

The front-end will be served on port 3001, since the local api will use port 3000 by default.

## Dependencies

I deliberately kept the dependencies minimal, since this is an interview project and you'll want to see my code, not someone else's.

- `styled-components` because inventing classNames is so Y2K
- `ramda` because I heard NMM uses it

- Because I did not depend on any prebuilt components, I manually built:
  - Modal (With Portal)
  - Table
  - Dropdown
  - Text Select Dropdown (Single choice and multi choice)
  - Panel
  - Input Text
  - Input Number
  - Multiple Buttons

## General Structure

- `<App>`
  - (Normally there'd be routes and multiple pages, but I didn't see anything to route here)
  - `<DevicesPageFull>`
    - The only page, fetches the api data and sets up the DevicesTable
    - `<DevicesTable>`
      - Most of the logic is in here. Makes use of several reusable components that I built such as `<Table>`, `<TextSelect>`

## Notes

- The app supports multiple filters
- At first glance, you're going to think I overengineered this project. Since this an interview project, I wanted to demonstrate some techniques, that the project didn't call for.
  - I built most things from scratch. (_In practice, I would have used a prebuilt Table_)
  - I made the `<Table>` in such a way that I could demonstrate these techniques:
    - The use of styling based on props (`size`)
    - The use of renderProps (`renderTableActions` and `renderRowActions`)
  - I created and used the `withApiDataHoc` HOC just to demonstrate the use of a complicated Higher Order Component for API retrieval.
    - It wraps a component and provides the following as props: _api response data, loading and error states, and a reFetch function._
    - This is the sort of pattern you see with Apollo Client's HOCs that they provide for each Query or Mutation. I just wanted to demonstrate that I __could do__ it, but please don't judge me on the decision __to do__ it lol
  - When the API data is returned, I stored it in a Context (`/state/devices/context`), accessible to the entire page via a Provider, and updatable via a reducer. In this case, it was overkill to store one thing in a context. But I wanted to demonstrate it since this is an interview project. In reality, I could have just stored it in local state.
    - I considered storing all of the type filters, sorting column, filtered rows, etc. in the context, but wanted the `devicesTable` to manage it's own filtering and sorting, so that if you had two of them, they could each look different.
  - I created several `/utils` that are built to be curried so that I could demonstrate "Generalized" and "Specialized" functions.
    - A good example is the generalized `/utils/arrays/filterObjectsWithKeyAmong()` and the specialized `/DevicesTable/devicesTableUtils.js/filterDevicesByType()`