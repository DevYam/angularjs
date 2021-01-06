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

    //Like and dislike for the technology model creation begins

    let technologies = [
        {name : "Java", likes : 0, dislikes: 0},
        {name : "Python", likes : 0, dislikes: 0},
        {name : "React", likes : 0, dislikes: 0},
        {name : "Angular", likes : 0, dislikes: 0}
    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = (tech) =>{
        tech.likes++;
    }

    $scope.incrementDisLikes = (tech) =>{
        tech.dislikes++;
    }

    //Like and dislike for a technology model creation ends

    // Angular filters and limits


    let NewEmployees = [
        {name: "Divyam", Age : "23", Gender: "Male", Role: "Developer", dob: new Date("January 22, 2020")},
        {name: "Abhishek", Age : "20", Gender: "Male", Role: "CEO", dob: new Date("September 23, 2020")},
        {name: "Punnet", Age : "23", Gender: "Male", Role: "Developer", dob: new Date("July 24, 2020")},
        {name: "Akshat", Age : "23", Gender: "Male", Role: "C", dob: new Date("March 22, 2020")}
    ];

    $scope.newEmployees = NewEmployees;

    $scope.rowLimit = 3;

    $scope.onLimitChange = ()=>{
        // console.log("change called"+$scope.rowLimit)
        if ($scope.rowLimit === null){
            $scope.rowLimit = 0;
        }
    }

    $scope.sortSelection = "name";

    /**
     * When using search on a particular column on table we will have to
     * set the initial value as undefined as with empty string it fails to
     * create objects.
     * @type {undefined}
     */
    $scope.searchText =undefined;


})