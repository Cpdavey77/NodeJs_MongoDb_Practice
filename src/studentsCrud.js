const { MongoClient } = require("mongodb");

class Student {
    // Constructor is a method
    constructor() 
    {
        this.uri = "mongodb://localhost:37017/school";
        this.DB = "school"
        this.client = null;
        this.collection = null;
        this.mongoClient = null;
    }

    // For creating a connection(client) to MongoDB
    async connect() 
    {
        try 
        {
            this.client = new MongoClient(this.uri);
            await this.client.connect();
            console.log("Successfully Connected to Mongo Client!");

            return this.client;
        }
        catch(err)
        {
            console.error(err);
            process.exit();
        }
    }

    // For testing the connection to the client
    async testRun()
    {
        try
        {
            // Connect to MongoDB
            this.mongoClient = await this.connect();
            console.log("Application successfuly ran!");
        }
        finally
        {
            mongoClient.close();
        }
    }

    // For inserting a student into the database
    async insert(studentDocument) {
        try
        {
            // Connect to MongoDB
            this.mongoClient = await this.connect();

            // Connect to the database
            this.db = this.mongoClient.db(this.DB);

            // Connect to the collection(table)
            this.collection = this.db.collection("students");

            console.log("Creating students");

            // Insert a document(row) into the collection(table)
            await this.collection.insertOne(studentDocument)
        }
        finally
        {
            this.mongoClient.close();
        }
    }

    async findAll() {
        try
        {
            // Connect to MongoDB
            this.mongoClient = await this.connect();

            // Connect to the database
            this.db = this.mongoClient.db(this.DB);

            // Connect to the collection(table)
            this.collection = this.db.collection("students");

            console.log("Getting all students...");

            // Get all documents(rows) from the collection(table)
            const data = await this.collection.find().toArray();
            console.log(data);

        }
        finally
        {
            this.mongoClient.close();
        }
    }

    async findOne(student) {
        try
        {
            // Connect to MongoDB
            this.mongoClient = await this.connect();

            // Connect to the database
            this.db = this.mongoClient.db(this.DB);

            // Connect to the collection(table)
            this.collection = this.db.collection("students");

            console.log("Getting students...");

            // Get a document(row) from the collection(table)
            const data = await this.collection.findOne({ name: student });
            console.log(`Student: ${data.name}`);
            console.log(`Hobby: ${data.hobby}`);

        }
        finally
        {
            this.mongoClient.close();
        }
    }
    
}

module.exports = Student;