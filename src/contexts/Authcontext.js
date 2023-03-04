import { useContext, createContext } from 'react';
import {
	GoogleAuthProvider,signInWithPopup,
	signInWithRedirect,signOut,onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../servises/firebase';


const Authcontext = createContext();

export const AuthcontextProvider = ({children}) => {

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
	};

	return (
		<Authcontext.Provider value={{ googleSignIn }}>
		{children}
		</Authcontext.Provider>

		);


};

export const UserAuth = () => {
	return useContext(Authcontext);
};