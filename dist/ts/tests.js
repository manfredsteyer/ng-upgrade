"use strict";
require('angular-mocks/ngMock');
// .spec.ts-Dateien explizit angeben
/*
 import './flug-suchen/simple.spec';
 import './flug-suchen/flug-suchen.spec';
 import './flug-suchen/flug-suchen.http-mock.spec';
*/
// Alle .spec.ts-Dateien laden
var req = require.context('./', true, /spec\.ts$/);
req.keys().forEach(req);
//# sourceMappingURL=tests.js.map