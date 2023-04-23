import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: String
        teachingAssists: [teachingAssists]
    }

    type TeachingAssists {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        FRONT_END
        BACK_END
        FULL_STACK
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CourseInput {
        id: ID
        courseName: String!
        category: String!
        price: Int!
        language: String!
        email: String!
        stack: Stack!
        teachingAssists: [TeachingAssistsInput]
    }
`);

export default schema;