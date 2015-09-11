var app = angular.module("phonebookApp", []);
app.controller("phonebookCtrl", function($scope) {

    $scope.getLink = function(address) {
        var link = "";
        
        strAdd = address.toString();
        splitAdd = strAdd.split(",");
        shortAdd = splitAdd[0];
        zip = splitAdd[1].trim();
        splitShortAdd = shortAdd.split(" ");
        
        
        for (i = 0; i < splitShortAdd.length; i++) {
            link += splitShortAdd[i] + "+";
        }

        link += zip;
        return link;
    }

    $scope.longName = function(name) {
        if (name.length > 8) {
            return true;
        }
    }

    $scope.contacts = [
        {
            img: "/imgs/beyonce.jpg",
            firstName: "Beyonce",
            lastName: "Knowles",
            number: "(713) 772-5175",
            email: "beyonce@gmail.com",
            address: "7706 Braes Meadow Dr, Houston, TX 77071",
        },
        {
            img: "/imgs/bgates.jpg",
            firstName: "Bill",
            lastName: "Gates",
            number: "(425) 882-8080",
            email: "bill@microsoft.com",
            address: "1 Microsoft Way Redmond WA, 98052",
        },
        {
            img: "/imgs/dumbledore.jpg",
            firstName: "Albus",
            lastName: "Dumbledore",
            number: "44 1665 511100",
            email: "adumbledore.hogwarts.ac.uk",
            address: "Alnwick Northumberland, NE66 1NQ",
        },
        {
            img: "/imgs/lcox.jpg",
            firstName: "Laverne",
            lastName: "Cox",
            number: "(323) 469-8311",
            email: "lcox@gmail.com",
            address: "Hollywood Blvd, Los Angeles, CA 90028",
        }
    ];

    $scope.title = "Contacts (" + $scope.contacts.length + ")";

    $scope.add = function() {

        alert("Coming soon...");

        // TODO: Write custom directive 

        // $scope.contacts.unshift({
        //     img: $scope.randomNumber(),
        //     firstName: "Test",
        //     lastName: "McTesty",
        //     number: "(212) 555-5555",
        //     email: "abc@gmail.com",
        //     address: "One Microsoft Way Redmond WA, 98052"
        // })
    };

    // TODO: Use bootstrap modal dialog
    $scope.delete = function(index) {
        var r = confirm("Are you SURE you want to delete " + $scope.contacts[index].firstName + " from your contacts? :(");
        if (r) { 
            $scope.contacts.splice(index, 1);
        }
    };

});



