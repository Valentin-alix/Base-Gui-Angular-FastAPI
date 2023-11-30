import { Routes } from '@angular/router';
import { TestWebsocketComponent } from './components/test-websocket/test-websocket.component';
import { TestRoutesComponent } from './components/test-routes/test-routes.component';

export const routes: Routes = [
    { path: 'test-web-socket', component: TestWebsocketComponent },
    { path: 'test-routes', component: TestRoutesComponent },
];
