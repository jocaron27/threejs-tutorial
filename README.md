# Senior Enrichment Project

Make a thing!

## Getting started

1. Fork and clone this repo
2. *Set the name of your project in `package.json`*. The skeleton intentionally ships with an invalid name.
3. Start the build process:
```
npm install
npm run build-watch
```

4. In another terminal, start your app.
5. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]

```
npm start
```

## Requirements

### The Premise:

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your four campuses - Luna, Terra, Mars & Titan.

### DB Design

- There are 2 types of users
  * Instructors
  * Students

- Instructors 
  * must be assigned to a single campus. 
  * may be responsible for 1-2 cohorts of students. 
    
- Multiple instructors can work with the same cohort.

- Students 
  * must be assigned to a single cohort.  
  * can only belong to one cohort. 
  * may have multiple instructors.

  
### Views and Functionality

- You can create, update and delete users (Students and Instructors)
  * To register an Instructor. You must fill out a form including their name, email and their selection of campus.
  * To register a student you must include name, email, campus and preferred cohort. 
    * If campus or cohort are left blank for a student, they should be randomly assigned.

- There should be a home page containing 4 divs, 1 for each campus. 
- Clicking on a div opens a table view  (via frontend routing or a modal) with Instructor and Student tables. 
- TDs (each row in the table) will allow inline edits and will include a delete button.
- ****See wireframes for examples (Though you may replace with a design and UX flow of your choice).***

### Routes

```
GET 
- all instructors by campus
- all students by campus
- all students by cohort
- all students by instructor
- instructor by id
- student by id 
```

```
POST
- New Instructor
- New Student
```

```
PUT
- Edit Instructor name
- Edit Student name
- Edit Student cohort
- Reassign Instructor campus (will be disabled if no other instructors are responsible for their cohorts)
```

```
DELETE
- Delete Instructor (only if no cohorts)
- Delete Student
```

## Evaluation
- Code modularity/readability (25%)
- Middleware (25%)
- Models (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)

