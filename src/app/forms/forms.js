angular.module( 'ngBoilerplate.forms', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'dashboard.forms', {
    url: 'forms',
    views: {
      "admin-content": {
        controller: 'FormsCtrl',
        templateUrl: 'forms/forms.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'FormsCtrl', function FormsCtrl( $scope ) {

})

;
