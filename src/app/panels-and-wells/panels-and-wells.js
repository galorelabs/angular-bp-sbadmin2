angular.module( 'ngBoilerplate.panels_and_wells', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'dashboard.panels_and_wells', {
    url: 'panels-and-wells',
    views: {
      "admin-content": {
        controller: 'PanelsAndWellsCtrl',
        templateUrl: 'panels-and-wells/panels-and-wells.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'PanelsAndWellsCtrl', function PanelsAndWellsCtrl( $scope ) {

})

;
