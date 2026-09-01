import {
    createUserWithEmailAndPassword,
    sighInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import {auth} from '../config/firebase';

export async function cadastrar (email, senha) {
    return await createUserWithEmailAndPassword(
        auth,
        email,
        senha
    );
}

export async function entrar (email, senha) {
    return await sighInWithEmailAndPassword(
        auth,
        email,
        senha
    );
}

export async function sair () {
    return await signOut(auth);
}