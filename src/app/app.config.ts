import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ 
    "projectId":"ring-of-fire-6e403",
    "appId":"1:490845111349:web:f2a6c3422f96f79d705d7c",
    "storageBucket":"ring-of-fire-6e403.firebasestorage.app",
    "apiKey":"AIzaSyBVFJ9_PhPm_T2O469L6cNyDFO3ILrXiOc",
    "authDomain":"ring-of-fire-6e403.firebaseapp.com",
    "messagingSenderId":"490845111349"})
  )), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
