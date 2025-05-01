# Firebase Setup for React Native Android App

## 1. Create Firebase Project
- Go to https://console.firebase.google.com/
- Click "Add project" and follow the steps to create a new Firebase project.

## 2. Add Android App to Firebase
- In the Firebase console, select your project.
- Click on the Android icon to add an Android app.
- Enter your Android package name (e.g., com.yourappname).
- Download the `google-services.json` file.
- Place `google-services.json` in your React Native project at `android/app/`.

## 3. Install React Native Firebase Libraries
Run the following commands in your React Native project directory:

```bash
npm install --save @react-native-firebase/app
npm install --save @react-native-firebase/auth
npm install --save @react-native-firebase/firestore
```

## 4. Configure Android Build Files

### android/build.gradle
Add the Google services classpath:

```gradle
buildscript {
  dependencies {
    // Add this line
    classpath 'com.google.gms:google-services:4.3.10'
  }
}
```

### android/app/build.gradle
Add at the bottom:

```gradle
apply plugin: 'com.google.gms.google-services'
```

## 5. Firebase Authentication Setup
- Enable Email/Password sign-in method in Firebase console under Authentication > Sign-in method.

## 6. Firestore Setup
- In Firebase console, enable Firestore database.

## 7. Usage in React Native
Example to initialize Firebase and use authentication:

```javascript
import auth from '@react-native-firebase/auth';

// Sign up user
const signUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error) {
    console.error(error);
  }
};

// Sign in user
const signIn = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    console.error(error);
  }
};
```

## 8. Next Steps
- Implement signup and login screens in the app.
- Store athlete evaluation results and user progress in Firestore.
- Use Firebase Analytics to track user engagement.

---

This setup will enable Firebase integration for authentication, data storage, and analytics in your React Native Android app.
