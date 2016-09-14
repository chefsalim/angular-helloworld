/// <reference path="../typings/index.d.ts" />
import 'reflect-metadata';
import 'zone.js/dist/zone';
import * as angular from 'angular';
import { UpgradeAdapter } from '@angular/upgrade';

import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello);

console.log("Bootstrapping...");
const upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.bootstrap(document.body, ['app'], {strictDi: false});
