
/* (The MIT License) CHANGE LICENSE

Copyright (c) 2016-2017 Simplebotics <contact@simplebotics.com@.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function() {

  "use strict";

  angular
  .module("simpleboticsIO")
  .controller("ioController", function($scope) {

    $scope.products = [
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":"8-13",
      "title":"Ozobot Bit",
      "description":"The tiniest programmable robot we could find. Code this smart robot using colored markers and paper.",
      "price":54,
      "buy":"",
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming"
      ],
      "budget":"50",
      "image":"https://dl.dropbox.com/s/foyw10t5u0kmrcn/sb_io_ozobot.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":"8-13",
      "title":"SPRK+",
      "description":"This robot ball can be programmed with a smartphone or tablet. It's also made of durable, kid-proof plastic.",
      "price":113,
      "buy":"",
      "link":"http://www.ozobot.com",
      "company":"Sphero",
      "categories":"programming",
      "budget":"100",
      "image":"https://dl.dropboxusercontent.com/s/cy31ehjroj1myjx/sb_io_sprk%2B.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":[
      "3+",
      "4-7"],
      "title":"Dash and Dot",
      "description":"The ultimate robot duo. Kids ages 5 and up can program these robots with a smartphone or tablet.",
      "price":239,
      "link":"http://www.ozobot.com",
      "company":"Wonder Workshop",
      "categories":"programming",
      "budget":"300",
      "image":"https://dl.dropbox.com/s/qqhv3l5no7dpy5a/sb_io_dash_dot.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":["8-13",
      "14+"],
      "title":"LEGO Mindstorms EV3",
      "description":"The LEGO EV3 kit combines the classic plastic brick with modern computer technology for hundreds of projects.",
      "price":349,
      "link":"http://www.ozobot.com",
      "company":"LEGO",
      "categories":[
      "programming",
      "mechanics"
      ],
      "budget":"300",
      "image":"https://dl.dropbox.com/s/19obolm4y38kg4t/sb_io_lego_mindstorms_ev3.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":"8-13",
      "title":"Kamigami",
      "description":"Build and program an origami-inspired and bug-like robot with Kamigami. No tools required. Just a smartphone.",
      "price":99,
      "buy":"http://shop.kamigamirobots.com/products/kamigami-robot-kit3",
      "link":"http://shop.kamigamirobots.com/products/kamigami-robot-kit3",
      "company":"Dash Robotics",
      "categories":[
      "mechanics",
      "programming"
      ],
      "budget":"100",
      "image":"https://dl.dropbox.com/s/0i6xi1sxclm0mll/sb_io_kamigami.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":"8-13",
      "title":"Sparki",
      "description":"The tiniest programmable robot we could find. Code this smart robot using colored markers and paper.",
      "price":149,
      "buy":"",
      "link":"http://www.arcbotics.com",
      "company":"ArcBotics",
      "categories":[
      "programming",
      "electronics"
      ],
      "budget":"200",
      "image":"https://www.dropbox.com/s/9x0dbln634h8ysb/sb_io_sparki.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"8-13",
      "title":"Meccanoid XL 2.0",
      "description":"A 4-foot tall programmable robotics kit. Build a humanoid, dinosour, or scorpion, and program using a smart device.",
      "price":174,
      "buy":"",
      "link":"http://www.meccano.com/",
      "company":"Meccano",
      "categories":[
      "mechanics",
      "programming"
      ],
      "budget":"200",
      "image":"https://dl.dropbox.com/s/qslmcdqyizio693/sb_io_meccanoid_xl_2.0.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"3+",
      "title":"Cubetto",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":239,
      "link":"http://www.ozobot.com",
      "company":"Primo Toys",
      "categories":"programming",
      "budget":"300",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":"8-13",
      "title":"Kano",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":139,
      "buy":"",
      "link":"https://kano.me/",
      "company":"Kano",
      "categories":"programming",
      "budget":"200",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"other",
      "age":"8-13",
      "title":"Snap Circuits Jr.",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":20,
      "buy":"",
      "link":"http://www.snapcircuits.net/",
      "company":"Elenco",
      "categories":"electronics",
      "budget":"50",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":["8-13", 
      "14+"
      ],
      "title":"Little Robot Friends",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":75,
      "buy":"",
      "link":"https://littlerobotfriends.com/products/ready-to-make/",
      "company":"Little Robot Friends",
      "categories":["electronics",
      "programming"
      ],
      "budget":"100",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"drone",
      "age":"14+",
      "title":"Deluxe Flybrix Kit",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":20,
      "buy":"",
      "link":"https://littlerobotfriends.com/products/ready-to-make/",
      "company":"Flybrix",
      "categories":["electronics",
      "mechanics"
      ],
      "budget":"50",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"other",
      "age":["8-13",
      "14+"
      ],
      "title":"littleBits",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":99,
      "buy":"",
      "link":"https://littlerobotfriends.com/products/ready-to-make/",
      "company":"littleBits",
      "categories":["electronics",
      "mechanics",
      "programming",
      ],
      "budget":"100",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"other",
      "age":["8-13", 
      "14+"
      ],
      "title":"Thimble",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":89,
      "buy":"",
      "link":"https://www.thimble.io",
      "company":"Thimble",
      "categories":["electronics",
      "programming",
      "mechanics",
      ],
      "budget":"100",
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    ]

  });

})();
