import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBrBbozTq0i7Q7vc2l7eDaCY8F8GN4c028",
    authDomain: "ai-mentor-girls.firebaseapp.com",
    databaseURL: "https://ai-mentor-girls.firebaseio.com/",
    projectId: "ai-mentor-girls",
    storageBucket: "ai-mentor-girls.firebasestorage.app",
    messagingSenderId: "767838621518",
    appId: "1:767838621518:android:c3a696ba6e932a32db581f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
