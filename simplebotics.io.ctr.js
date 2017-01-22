(function() {

  "use strict";

  angular
  .module("simpleboticsIO")
  .controller("ioController", function($scope) {

    $scope.products = [
    {
      "type":"robot",
      "age":"8-14",
      "title":"Ozobot Evo",
      "description":"About the size of a tangerine, this programmable robot teaches kids the basics of computer programming through an easy-to-use and drag-and-drop app, Ozoblockly.",
      "price":99,
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropbox.com/s/foyw10t5u0kmrcn/sb_io_ozobot.jpg?dl=0"
    },
    {
      "type":"robot",
      "age":"8-14",
      "title":"SPRK+",
      "description":"This robotic ball will teach kids coding through a free smartphone app. SPRK+ is durable, waterproof, and Bluetooth-enabled.",
      "price":129,
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropboxusercontent.com/s/cy31ehjroj1myjx/sb_io_sprk%2B.jpg?dl=0"
    },
    {
      "type":"robot",
      "age":"3-7",
      "title":"Dash and Dot",
      "description":"This dynamic duo is ideal for younger kids. It works with a companion smartphone and tablet app with an engaging story that teaches simple computer programming skills. Fun accessories such as catapult and xylophone are available.",
      "price":239,
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropbox.com/s/qqhv3l5no7dpy5a/sb_io_dash_dot.jpg?dl=0"
    },
     {
      "type":"robot",
      "age":"8-14",
      "title":"LEGO Mindstorms EV3",
      "description":"Our personal favorite. LEGO's Minsdtorms EV3 kit combines the classic plastic brick with modern computer technology for hundreds of robotics projects.",
      "price":350,
      "categories":[
      "programming",
      "mechanics"
      ],
      "image": "https://dl.dropbox.com/s/19obolm4y38kg4t/sb_io_lego_mindstorms_ev3.jpg?dl=0"
    },
     {
      "type":"robot",
      "age":"8-14",
      "title":"Kamigami",
      "description":"Build and program a robotic bug with Kamigami robots. No tools required. Just a smartphone.",
      "price":99,
      "categories":[
      "programming",
      "electronics",
      "mechanics"
      ],
      "image": "https://dl.dropbox.com/s/0i6xi1sxclm0mll/sb_io_kamigami.jpg?dl=0"
    },
    {
      "type":"robot",
      "age":"3-7",
      "title":"Cubetto",
      "description":"Made of wood, Cubetto teaches kids basic coding skills with wooden blocks and a colorful playmat. No computer, smartphone, or tablet needed.",
      "price":245,
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropbox.com/s/qqhv3l5no7dpy5a/sb_io_dash_dot.jpg?dl=0"
    },
    ]

  });

})();
