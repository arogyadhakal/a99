import { useState, useEffect } from 'react'
import firebase from '../firebase/clientApp';
import { useAuth } from '../context/AuthUserContext';


export function addUser(uid : String, name : String, email : String) {
    firebase.database().ref(`users/${uid}`).set(
        {
            name: name,
            email: email,
            isAdmin: false
        }
    );
}


export function updateEmail(uid : String, update : String) {
    firebase.database().ref(`users/${uid}/email`).set(update);
}