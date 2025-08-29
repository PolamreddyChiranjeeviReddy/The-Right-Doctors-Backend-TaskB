# Person Manager (Node + Express + MongoDB)

A simple RESTful web service with EJS views for managing Person records.

## Features
- GET /person - list all people (renders a table)
- GET /person/new - form to create a person
- POST /person - create a person
- GET /person/:id/edit - form to edit a person
- PUT /person/:id - update a person
- GET /person/:id/delete - confirmation page for deletion
- DELETE /person/:id - delete a person

## Fields
- name, age, gender, mobile

## Quick start

1. Copy `.env.example` to `.env` and set `MONGO_URI` if needed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB locally (or use a cloud URI), then:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser.

## Notes
- Uses Mongoose for MongoDB interactions.
- Uses method-override to support PUT/DELETE via HTML forms.
