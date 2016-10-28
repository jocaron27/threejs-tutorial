# Senior Enrichment Project

Make a thing!

## Getting started

1. Fork and clone this repo
2. *Set the name of your project in `package.json`*. The skeleton intentionally ships with an invalid name,
and nothing will work.
3. Start the build process:
```
npm install
npm run build-watch
```

4. In another terminal, start your app:

```
npm start
```

## Outline

Here’s a basic outline for the exercise:
- Include two data models with an association between them (puppies and comments, stars and wishes, notes and child notes, assassins and marks… and comments belongs to puppies and/or puppies has many comments)
- Make a backend that does the CRUD thing (i.e. has routes that handle POST, GET, PUT, and DELETE requests for both models)
- Use React! Using Redux is optional. Ultimately, your front end should hook up to your backend somehow, allowing users to make those CRUD requests.
- Authentication & Users is optional (you will tackle this in more depth for Grace Shopper).

This exercise is designed to take around 6 hours.
