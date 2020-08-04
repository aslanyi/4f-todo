import { firebase } from './firebase';

const persistence = firebase.auth.Auth.Persistence;

// None: There is no stored session for user.
export const NONE = persistence.NONE; 

// Session: User session ends when user left to tab.
export const SESSION = persistence.SESSION;

// Local: Firebase keeps the user session.
export const LOCAL = persistence.LOCAL;