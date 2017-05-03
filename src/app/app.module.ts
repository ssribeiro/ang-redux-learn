import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
//import { DBModule } from '@ngrx/db';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import "hammerjs"
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from './components';
import { GreetEffects } from './effects/greet';

import { AppComponent } from './containers/app';
import { AAAPageComponent } from './containers/AAA-page';
import { AddressInputPageComponent } from './containers/address-input-page';
import { AddressItemPageComponent } from './containers/address-item-page';
import { MapPageComponent } from './containers/map-page';
import { AddressMapPageComponent } from './containers/address-map-page';
import { AddressListPageComponent } from './containers/address-list-page';
import { NewplacesPageComponent } from './containers/newplaces-page';
import { SearchPlacesPageComponent } from './containers/search-places-page';
//import { NotFoundPageComponent } from './containers/not-found-page';

import { routes } from './routes';
import { reducer } from './reducers';
//import { schema } from './db';

@NgModule({
  declarations: [
    AppComponent,
    AAAPageComponent,
    AddressInputPageComponent,
    AddressItemPageComponent,
    MapPageComponent,
    AddressMapPageComponent,
    AddressListPageComponent,
    NewplacesPageComponent,
    SearchPlacesPageComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),
    
    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),
    
    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    
    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    //EffectsModule.run(BookEffects),
    EffectsModule.run(GreetEffects),
    
    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    //DBModule.provideDB(schema),
    
        
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
