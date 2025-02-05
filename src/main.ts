import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideFirestore(() => getFirestore())), 
    importProvidersFrom(provideStorage(() => getStorage())), provideFirebaseApp(() => initializeApp({"projectId":"auth-test-56cd5","appId":"1:506592817583:web:660b8fab0252596de1ff5a","databaseURL":"https://auth-test-56cd5-default-rtdb.firebaseio.com","storageBucket":"auth-test-56cd5.firebasestorage.app","apiKey":"AIzaSyAmEsRFZZ2kGcWhh4v5I44WGk6_Ivt8ikc","authDomain":"auth-test-56cd5.firebaseapp.com","messagingSenderId":"506592817583"})), provideFirestore(() => getFirestore()),
  ],
});
