import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
	Auth,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { UserEntity } from "../../../domain/entities/UserEntity";
import { RemoteDataSource } from "./remoteDataSource";
import { FirebaseModel } from "../../models/firebaseModel";

export class FirebaseDataSource implements RemoteDataSource {
	app: FirebaseApp;
	analitys: Analytics;
	auth: Auth;

	constructor() {
		this.app = initializeApp({
			apiKey: "AIzaSyD_OghT8YHI72w2DXDIJuLQqDuyfIQUf5M",
			authDomain: "personal-project-d8c4b.firebaseapp.com",
			projectId: "personal-project-d8c4b",
			storageBucket: "personal-project-d8c4b.appspot.com",
			messagingSenderId: "723237987653",
			appId: "1:723237987653:web:eea7827f7ed30be7448a2c",
			measurementId: "G-T9PE5XG65T",
		});
		this.analitys = getAnalytics(this.app);
		this.auth = getAuth(this.app);
	}
	signInWithPopupWithGooogle(): Promise<UserEntity> {
		return new Promise((resolve, reject) => {
			signInWithPopup(this.auth, new GoogleAuthProvider())
				.then((result) => {
					// This gives you a Google Access Token. You can use it to access the Google API.
					const credential =
						GoogleAuthProvider.credentialFromResult(result);

					console.log({ credential });
					// The signed-in user info.
					const user = result.user;
					const userFirebase = new FirebaseModel(
						user.uid,
						user.email || "",
						user.displayName || "",
						user.photoURL || ""
					);

					resolve(userFirebase);
					// IdP data available using getAdditionalUserInfo(result)
					// ...
				})
				.catch((error) => {
					// Handle Errors here.
					const errorCode = error.code;
					const errorMessage = error.message;
					// The email of the user's account used.
					const email = error.customData.email;
					// The AuthCredential type that was used.
					const credential =
						GoogleAuthProvider.credentialFromError(error);

					console.log({ errorCode, errorMessage, email, credential });

					reject(error);
					// ...
				});
		});
	}
	loginWithEmailAndPassword(
		email: string,
		password: string
	): Promise<UserEntity> {
		return new Promise((resolve, reject) => {
			signInWithEmailAndPassword(this.auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					const userFirebase = new FirebaseModel(
						user.uid,
						user.email || "",
						user.displayName || "",
						user.photoURL || ""
					);

					resolve(userFirebase);
				})
				.catch((err) => {
					reject({
						errorcode: err.code,
						errorMessage: err.message,
					});
				});
		});
	}
	logout(): Promise<void> {
		return new Promise((resolve, reject) => {
			signOut(this.auth)
				.then(() => {
					resolve();
				})
				.catch((err) => {
					reject({
						errorcode: err.code,
						errorMessage: err.message,
					});
				});
		});
	}
}
