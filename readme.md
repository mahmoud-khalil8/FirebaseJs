## Firebase JavaScript Project
This project demonstrates how to work with Firebase database using JavaScript. It includes HTML/CSS markup, implements CRUD actions (Create, Read, Update, Delete), handles errors, performs form validation,and shows users informations in the database.

This project showcases an application that interacts with a Firebase Realtime Database using JavaScript.

## Features
Firebase Realtime Database integration
HTML/CSS markup for user interface
Create new records in the database
Read existing records from the database
Update existing records in the database
Delete records from the database
Error handling for Firebase operations
Form validation for user input 

## Real-time Database
Firebase Realtime Database is a cloud-hosted NoSQL database that allows real-time data synchronization across clients.
It uses a JSON-like data structure, making it easy to store and retrieve data in real-time.
The database automatically handles data synchronization and provides offline capabilities, enabling your app to work seamlessly even when the device is offline.
Firebase Realtime Database supports listeners for real-time data changes, allowing you to update the UI automatically whenever the data changes.
It also provides powerful querying capabilities, allowing you to filter, order, and limit data retrieval based on specific criteria.

----------------------------

## Read Operations
### Get a Document by ID
To retrieve a single document from Firestore based on its unique document ID, you can use the doc() method followed by the get() method:

const docRef = db.collection('collectionName').doc('documentId');
docRef.get().then((doc) => {
    // Document data is available in doc.data()
    
}).catch((error) => {
  console.log('Error getting document:', error);
});

### Get All Documents in a Collection
To retrieve all documents within a collection, you can use the get() method on the collection reference:

const collectionRef = db.collection('collectionName');
collectionRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Document data is available in doc.data()
  });
}).catch((error) => {
  console.log('Error getting documents:', error);
});

## Create Operation
To create a new document in Firestore, you can use the add() method on the collection reference. Firestore will automatically generate a unique document ID for the new document:

const collectionRef = db.collection('collectionName');
collectionRef.add({ /* document data */ }).then((docRef) => {
  console.log('Document written with ID: ', docRef.id);
}).catch((error) => {
  console.error('Error adding document: ', error);
});
## Update Operation
To update an existing document in Firestore, you can use the update() method on the document reference. You can pass an object containing the fields and their updated values:

const docRef = db.collection('collectionName').doc('documentId');
docRef.update({ /* updated fields and values */ }).then(() => {
  console.log('Document successfully updated');
}).catch((error) => {
  console.error('Error updating document: ', error);
});
## Delete Operation
To delete a document from Firestore, you can use the delete() method on the document reference:

const docRef = db.collection('collectionName').doc('documentId');
docRef.delete().then(() => {
  console.log('Document successfully deleted');
}).catch((error) => {
  console.error('Error deleting document: ', error);
});

----------------------------

## Installation
Clone the repository.

shell
Copy
git clone https://github.com/mahmoud-khalil8/FirebaseJs.git


Set up Firebase project and obtain credentials.

Create a Firebase project at https://firebase.google.com.
Obtain the Firebase configuration credentials.
Configure Firebase credentials in the project.

Open the firebase.js file.
Replace the placeholder values with your Firebase configuration credentials.
Set up a local development server.


Start the local development server.
Open the project in your web browser.

Navigate to http://localhost:your-port-number.
Interact with the application.

Use the provided interface to add, update, or delete records in the Firebase database.
Observe the real-time updates in the UI and the database.


https://github.com/mahmoud-khalil8/FirebaseJs/assets/78821632/1475fc75-03d9-457f-9236-89f2ad2f1e53



![Screenshot_10](https://github.com/mahmoud-khalil8/FirebaseJs/assets/78821632/26dcd8c6-e5cf-4c0a-9b22-bb6e61e69425)
