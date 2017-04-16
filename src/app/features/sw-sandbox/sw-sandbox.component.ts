import { Component, OnInit } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'app-sw-sandbox',
  templateUrl: './sw-sandbox.component.html',
  styleUrls: ['./sw-sandbox.component.scss'],
  providers: [NgServiceWorker]
})
export class SwSandboxComponent implements OnInit {

  private swScope: string = './';
  private swUrl: string = './worker-basic.js';

  constructor(public sw: NgServiceWorker) {
  }

  ngOnInit() {
    this.sw.log().subscribe(message => console.log(message));
  }

  checkServiceWorker(): void {

    navigator['serviceWorker']
      .getRegistrations()
      .then(registrations => {
        return registrations
          .map(reg => {
            return {
              scope: reg.scope,
              active: !!reg.active,
              installing: !!reg.installing,
              waiting: !!reg.waiting
            };
          })
      })
      .then(value => JSON.stringify(value))
      .then(value => {
        console.log(value);
      })
  }

  forceUpdate(): void {

    this
      .sw
      .checkForUpdate()
      .subscribe(res => {
        console.log(JSON.stringify(res));
      });

  }

  pingCompanion(): void {
    console.log('ping');
    this
      .sw
      .ping()
      .subscribe(undefined, undefined, () => {
        console.log('pong');
      });

  }

  loadCacheKeys(): void {
    let caches = window['caches'];
    caches.keys().then(keys => console.log(JSON.stringify(keys)));
  }

  installWorker(): void {

    navigator['serviceWorker']
      .register(this.swUrl, { scope: this.swScope })
      .then(registration => {

        console.log('Service Worker registered. Registration: ', registration)

        return registration;

      })

      .catch(error => {
        console.log("There was a problem with the Service Worker", error);
      });
  }


  uninstallWorker(): void {

    navigator['serviceWorker']
      .getRegistration(this.swScope)
      .then(registration => {

        registration.unregister().then(function (boolean) {

          console.log(boolean ? 'Service Worker unregister is successful' : 'Service Worker unregister is unsuccessful')

        });

      })
      .catch(error => {
        console.log(error);
      })

  }

}
