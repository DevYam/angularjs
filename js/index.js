let app = angular.module("myApp",[]);

app.controller("myController", ($scope)=>{
    $scope.message = "Angular js is awesome";
    $scope.img={
        name : "Teaching",
        path : "img/yt.svg"
    }

    // It seems that ng repeat only works on arrays
    let employees = [
        {name: "Divyam", Age : "23", Gender: "Male", Role: "Developer"},
        {name: "Abhishek", Age : "20", Gender: "Male", Role: "CEO"},
        {name: "Punnet", Age : "23", Gender: "Male", Role: "Developer"},
        {name: "Akshat", Age : "23", Gender: "Male", Role: "C"}
    ];
    $scope.employee = employees;

    //Creating model for nested ng-repeat

    let countries = [
        {
            name : "USA",
            Cities : [
                {name : "Laos Angeles"},
                {name : "Chicago"},
                {name : "Houston"},
            ]
        },
        {
            name : "India",
            Cities : [
                {name : "Patna"},
                {name : "Ranchi"},
                {name : "Delhi"}
            ]
        },
        {
            name : "Japan",
            Cities: [
                {name : "Fukuoka"},
                {name : "Tokyo"},
                {name: "Nara"}
            ]


        }

    ];
    $scope.countries = countries;
    //model creation for nested ng-if complete


})