import firebase from "firebase";
var config = {
    apiKey: "AIzaSyAIhWJOK5UlUr2yZ3V5XVpcWQroWAA60kU",
    authDomain: "catalogodb-a019f.firebaseapp.com",
    databaseURL: "https://catalogodb-a019f.firebaseio.com",
    projectId: "catalogodb-a019f",
    storageBucket: "catalogodb-a019f.appspot.com",
    messagingSenderId: "27899252808"
};
firebase.initializeApp(config);
export default firebase;