angular.module( 'ngBoilerplate.tables', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'dashboard.tables', {
    url: 'tables',
    views: {
      "admin-content": {
        controller: 'TablesCtrl',
        templateUrl: 'tables/tables.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'TablesCtrl', function TablesCtrl( $scope ) {

})

;
