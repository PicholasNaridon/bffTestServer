# bffTestServer

## Setup

**Installation:** `npm install`

**Running the webserver:** `npm run develop`

Server will run on `localhost:8080`

## Routes
Routes are setup in the following patterns

`/dashboardConfig`

`/doughNutChart/:type` **available types:** full, emptyDonuts, zeroTotal, doubleDonut, tabbed

`/heatmap/:type`  **available types:** full, emptyData, tabbed

`/dataTable/:type`  **available types:** full, oneTab, miscToggles, miscToggles2, miscToggles3, noListItems, noContent, tabbed, dropdown, singleDropdown

`/simpleLineChart/:type`  **available types:** full, withSomeNullData, emptySeries, tabbed

`/simplelist/:type`  **available types:** full, noScroll, emptyrows, tabbed

`/stackedColumnChart/:type`  **available types:** full, emptyseries, tabbed

`/combinationChart/:type`  **available types:** full, emptySeries, emptyYAxis, noYAxis, tabbed

`/columnChart/:type`  **available types:** full, multiSeries, tiltedLabels, emptySeries, tabbed

`/actionList/:type` **available types:** full, oneTab, statusColor, emptyListItems, emptyTabs, masterButton

`/actionGrid/:type`  **available types:** full, oneTab, miscToggles, miscToggles2, miscToggles3, noListItems, noContent, tabbed, dropdown, singleDropdown

`/dashboardContent/:type`  **available types:** tabbed, dropdown, singleDropdown, noContent
