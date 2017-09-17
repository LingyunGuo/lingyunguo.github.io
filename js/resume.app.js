var resumeApp = angular.module('resumeApp', []);
resumeApp.controller('skillCtrl', function ($scope) {

});
resumeApp.controller('techSkillSetCtrl', function ($scope) {
    $scope.skills = [
        {
            name: 'JavaScript',
            experience: "16 months industrial experience",
            related: ['jQuery', 'AngularJs', 'Mocha', 'NodeJS', 'BackboneJS', 'express', 'Gulp', 'Jasmine']
        },
        {
            name: 'HTML5',
            experience: "16 months industrial experience"
        },
        {
            name: 'CSS3',
            experience: "16 months industrial experience",
            related: ['less', 'bootstrap']
        },
        {
            name: 'cplusplus',
            experience: 'used in most school courses'
        },
        {
            name: 'Java',
            experience: '1 related courses'
        },
        {
            name: 'C',
            experience: '2 related courses'
        },
        {
            name: 'PHP',
            experience: '4 months industrial experience'
        },
        {
            name: 'Python',
            experience: '4 months industrial experience'
        },
        {
            name: 'csharp',
            experience: '4 months industrial experience',
            related: ['dot-net']
        },
        {
            name: 'Git',
            experience: '16 months industrial experience'
        },
        {
            name: 'Docker',
            experience: '4 months industrial experience',
        },
        {
            name: 'MongoDB',
            experience: '4 months industrial experience',
        },
        {
            name: 'Nginx',
            experience: '4 months industrial experience',
        },
        {
            name: 'MySQL',
            experience: '4 months industrial experience',
        }
    ];
    $scope.tools = ['Photoshop', 'VisualStudio', 'Vim', 'Webstorm', 'Slack', 'jira.png', 'Github', 'Bitbucket', 'Gitlab', 'Sourcetree', 'PhpStorm', 'PyCharm', 'Atom'];
})