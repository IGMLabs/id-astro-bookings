# Astro bookings tasks

> A website for space travel reservations.

## 0. Application, module, and root component.

- [x] Know the structure of the application
- [x] Run the application
- [x] Clean root component
- [x] Install a CSS framework (_picocss_)
- [x] Root layout (header-main-footer)

## 1. Templates

- [x] Show agencies counter
- [x] List all
- [x] Show agency details
- [x] Active agencies in bold, pending agencies in italic
- [x] Show an icon to indicate different operation ranges
- [x] Show a button for reloading the list
- [x] Attach the click event of the button to a public method
- [x] Show a message when reloading the list

> Student tasks:

- [x] Show trips counter
- [x] List all trips
- [x] Show trip details
- [x] Confirmed trips in green, waiting trips in orange
- [x] Show an icon to indicate the trip kind

## 2. Modules

- [x] Create a Core module
- [x] Move the header node to the Core module
- [x] Move the title node to a new private component
- [x] Use the Title component in the header
- [x] Create a Home module
- [x] Move the main node to the Home component

> Student tasks:

- [x] Move the footer node to the Core module
- [x] Use the Title component in the footer
- [x] Create a Shared module
- [x] Move the reloading content to a component on the Shared module

## 3. Routes

- [x] Route for home page (/) bind to HomeComponent
- [x] Route for an about page (`/about`) bind lazy to AboutModule
- [x] Route for a register page (`auth/register`) bind lazy to RegisterModule
- [x] Route for an agencies page (`/agencies`) bind lazy to AgenciesModule
- [x] Use a shared agencies list component on the agencies page
- [ ] Route for an agency page (`/agencies/:id`) bind lazy to AgencyModule
- [ ] Use an agency details component on the agency page

> Student tasks:

- [x] Route for an about page (`/contact`) bind lazy to ContactModule
- [x] Route for a login page (`auth/login`) bind lazy to LoginModule
- [ ] Route for a trips page (`/trips`) bind lazy to TripsModule
- [ ] Use a shared trips list component on the trips page
- [ ] Route for a trip page (`/trips/:id`) bind lazy to TripModule
- [ ] Use a trip details component on the trip page
