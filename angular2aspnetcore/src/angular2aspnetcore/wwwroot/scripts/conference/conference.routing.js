"use strict";
var router_1 = require('@angular/router');
var conference_component_1 = require('./conference.component');
var conferencelist_component_1 = require('./conferencelist.component');
var conferencedetail_component_1 = require('./conferencedetail.component');
var routes = [
    {
        path: 'conferencemanagement',
        component: conference_component_1.ConferenceComponent,
        children: [
            { path: '', component: conferencelist_component_1.ConferenceListComponent },
            { path: ':id', component: conferencedetail_component_1.ConferenceDetailComponent }
        ]
    }
];
exports.conferenceRouting = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=conference.routing.js.map