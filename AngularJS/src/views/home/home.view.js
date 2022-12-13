// @ts-ignore
import angular from 'angular';
import template from './home.tpl.html';

import usersService from '../../services/users.service';
import './home.scss';
export default angular
  .module('home.view', [])
  .factory(usersService.name, usersService.factory)
  .component('home', {
    template,
    controller: [usersService.name, '$scope', (users, $scope) => {
      $scope.data = [];
      $scope.onCheckAPI = () => {
        users.getPlaceholderAPI()
        .then(({ data }) => {
          console.log(data);
          $scope.data = data;
        })
      }

    }]
  })
  .name;
