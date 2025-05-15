import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-993ea","appId":"1:998685570633:web:8e052ef38e3ab7df197198","storageBucket":"ring-of-fire-993ea.firebasestorage.app","apiKey":"AIzaSyAOnPB1mOVULpLgyE9F0zIzLC4NjELaADE","authDomain":"ring-of-fire-993ea.firebaseapp.com","messagingSenderId":"998685570633"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
