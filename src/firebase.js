import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCB4mCJgxggaot6TjFM39Pf-j2Dt0OjyJk",
        authDomain: "clone-f4427.firebaseapp.com",
        databaseURL: "https://clone-f4427.firebaseio.com",
        projectId: "clone-f4427",
        storageBucket: "clone-f4427.appspot.com",
        messagingSenderId: "823338850756",
        appId: "1:823338850756:web:12e87557d513931bc42c91"
})

const auth = firebase.auth()

export { auth }