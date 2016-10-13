"use strict";
var app_module_1 = require('./app.module');
require('./app.routes');
// Use upgradeAdapter to manual bootstrap Angular1+2
app_module_1.upgradeAdapter.bootstrap(document.body, ['flight-app']);
//# sourceMappingURL=app.js.map