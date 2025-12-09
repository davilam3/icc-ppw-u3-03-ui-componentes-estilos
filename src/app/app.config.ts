import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';


const firebaseConfig = {
  apiKey: "AIzaSyCjVZQl6jvCy8EDOW8v8qUaXKYHFzjT5Ko",
  authDomain: "angular-icc-ppw-3c4a9.firebaseapp.com",
  projectId: "angular-icc-ppw-3c4a9",
  storageBucket: "angular-icc-ppw-3c4a9.firebasestorage.app",
  messagingSenderId: "835757517478",
  appId: "1:835757517478:web:acce1028cc7f31856ca267",
     // measurementId: "G-KY2G0JRXB2",
      // projectNumber: "835757517478",
      // version: "2"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), 
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), // habilita HttpClient usando la API Fetch
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  })
  ]
};
