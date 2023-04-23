# LCO-GraphQL Project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

To run this project, you will need to have the following software installed on your local machine:

Node.js
npm

## Installing

1. Clone the repository to your local machine using Git: `git clone https://github.com/your-username/lco-graphql.git`
2. Navigate to the project directory: `cd lco-graphql`
3. Install the project dependencies: `npm install`

## Running the project

To start the server, run the following command: `npm start`

Once the server is running, you can access the GraphQL Playground by navigating to `http://localhost:3000` in your web browser.

## Usage

This project implements two GraphQL operations:

### getCourse

The `getCourse` query returns a course object, given a course ID. The query takes a single argument:

* `id`: the ID of the course to retrieve.

### createCourse

The `createCourse` mutation creates a new course object and adds it to a temporary storage object called `courseHolder`. The mutation takes two arguments:

* `name`: the name of the course to create.
* `teachingAssistants`: an array of teaching assistant objects, each of which contains a `name` and `email` property.

## Built With

* GraphQL - A query language for APIs.
* Node.js - A JavaScript runtime.
* npm - A package manager for Node.js.
