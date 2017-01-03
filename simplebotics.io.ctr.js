(function() {

  "use strict";

  angular
    .module("simpleboticsIO")
    .controller("ioController", function($scope) {

      $scope.products = [
  {
    "type":"Robot",
    "title":"Ozobot Evo",
    "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
    "price":99,
    "categories":[
      "Programming"
    ],
    "image": "http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg"
  },
  {
    "type":"Robot",
    "title":"SPRK+",
    "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
    "price":129,
    "categories":[
      "Programming"
    ],
    "image": "http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg"
  },
  {
    "type":"Robot",
    "title":"Dash and Dot",
    "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
    "price":239,
    "categories":[
      "Programming"
    ],
    "image": "http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg"
  },
]

    });
})();
