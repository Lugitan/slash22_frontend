import { initializeApp } from "firebase/app";

export default function firebaseinit() {
    const firebaseConfig = {
        apiKey: "AIzaSyAdA0VSNJn_6vYOv7DUpX3a2VSlOgVaJC4",
        authDomain: "hackathon-trash.firebaseapp.com",
        projectId: "hackathon-trash",
        storageBucket: "hackathon-trash.appspot.com",
        messagingSenderId: "665567994116",
        appId: "1:665567994116:web:887c93f9b44381e318f051",
      };
      
    return initializeApp(firebaseConfig);

}