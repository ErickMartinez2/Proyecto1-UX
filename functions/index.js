const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const corsHandler = cors({ origin: true });

const app1 = express();
admin.initializeApp();
app1.get("/:cat", (request, response) => {
    corsHandler(request, response, () => { });
    var output = {
        Catalogo: {},
    };
    if (request.params.restaurante !== "") {
        admin
            .database()
            .ref()
            .child(request.params.cat  + "/")
            .once("value", Snapshot => {
                output.Catalogo = Snapshot.exportVal();
                response.json(output);
            });
    }
});
exports.catalogo = functions.https.onRequest(app1);
