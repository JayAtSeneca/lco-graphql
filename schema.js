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
    
`);

export default schema;