
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
      "buy":"http://amzn.to/2lNU2oF",
      "link":"http://amzn.to/2lSkzSb",
      "company":"Evollve Inc.",
      "categories":"programming",
      "budget":["50",
      "100",
      "200",
      "300",
      ],
      "rank":10,
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
      "price":111,
      "buy":"http://amzn.to/2kUJRiF",
      "link":"http://amzn.to/2lE3msY",
      "company":"Sphero",
      "categories":"programming",
      "budget":["100",
      "200",
      "300",
      ],
      "rank":10,
      "image":"https://dl.dropboxusercontent.com/s/cy31ehjroj1myjx/sb_io_sprk%2B.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":["3+",
      "4-7",
      ],
      "title":"Dash",
      "description":"A playful robot on wheels. Kids ages 5 and up can program this robot with a smartphone or tablet.",
      "price":119,
      "buy":"http://amzn.to/2kUTgqp",
      "link":"http://amzn.to/2kUTopT",
      "company":"Wonder Workshop",
      "categories":"programming",
      "budget":["200",
      "300"
      ],
      "rank":8.3,
      "image":"https://dl.dropbox.com/s/qqhv3l5no7dpy5a/sb_io_dash_dot.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":["8-13",
      "14+",
      ],
      "title":"LEGO Mindstorms EV3",
      "description":"The LEGO EV3 kit combines the classic plastic brick with modern computer technology for hundreds of projects.",
      "price":349,
      "buy":"http://amzn.to/2kUVgyQ",
      "link":"http://amzn.to/2lStUcA",
      "company":"LEGO",
      "categories":[
      "programming",
      "mechanics",
      ],
      "budget":"300",
      "rank":10,
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
      "buy":"http://amzn.to/2lO0lZ3",
      "link":"http://amzn.to/2lNYx2y",
      "company":"Dash Robotics",
      "categories":[
      "mechanics",
      "programming",
      ],
      "budget":["100",
      "200",
      "300",
      ],
      "rank":8,
      "image":"https://dl.dropbox.com/s/0i6xi1sxclm0mll/sb_io_kamigami.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":["8-13",
      "14+"
      ],
      "title":"Sparki",
      "description":"The tiniest programmable robot we could find. Code this smart robot using colored markers and paper.",
      "price":149,
      "buy":"http://amzn.to/2lSpyCc",
      "link":"http://amzn.to/2lDZpVh",
      "company":"ArcBotics",
      "categories":[
      "programming",
      "electronics",
      ],
      "budget":["200",
      "300",
      ],
      "rank":10,
      "image":"https://dl.dropbox.com/s/9x0dbln634h8ysb/sb_io_sparki.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"8-13",
      "title":"Meccanoid XL 2.0",
      "description":"A 4-foot tall programmable robotics kit. Build a humanoid, dinosour, or scorpion, and program using a smart device.",
      "price":174,
      "buy":"http://amzn.to/2lEcf5Q",
      "link":"http://amzn.to/2l8vMt9",
      "company":"Meccano",
      "categories":[
      "mechanics",
      "programming"
      ],
      "budget":["200",
      "300",
      ],
      "rank":8.3,
      "image":"https://dl.dropbox.com/s/qslmcdqyizio693/sb_io_meccanoid_xl_2.0.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"3+",
      "title":"Cubetto",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning.",
      "price":239,
      "buy":"https://www.primotoys.com/shop/",
      "link":"https://ww2.feefo.com/en_GB/reviews/primo-toys",
      "company":"Primo Toys",
      "categories":"programming",
      "budget":"300",
      "rank":5,
      "image":"https://dl.dropbox.com/s/h9nksuvrpoxoyzw/sb_io_cubetto.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":["3+",
      "4-7",
      ],
      "title":"Codeapillar",
      "description":"A cute toy that lets kids learn basic coding skills by arranging snap-together segments that control the robot.",
      "price":45,
      "buy":"http://amzn.to/2lE3B7e",
      "link":"http://amzn.to/2l8oDcg",
      "company":"Fisher Price",
      "categories":"programming",
      "budget":["50",
      "100",
      "200",
      "300",
      ],
      "rank":11.7,
      "image":"https://dl.dropbox.com/s/hugxpue78khwrcf/sb_io_codeapillar.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"4-7",
      "title":"Coji",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":23,
      "buy":"http://amzn.to/2l8m2z8",
      "link":"http://amzn.to/2lSmeHl",
      "company":"WowWee",
      "categories":"programming",
      "budget":["50",
      "100",
      "200",
      "300",
      ],
      "rank":10,
      "image":"https://dl.dropbox.com/s/w944upuzsp2gqwm/sb_io_coji.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"other",
      "age":"8-13",
      "title":"Kano",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":139,
      "buy":"http://amzn.to/2lSvCL2",
      "link":"http://amzn.to/2lDVQyd",
      "company":"Kano",
      "categories":["programming",
      "electronics"
      ],
      "budget":["200",
      "300",
      ],
      "rank":6.7,
      "image":"https://dl.dropbox.com/s/riho717du996x7d/sb_io_kano.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"other",
      "age":"8-13",
      "title":"Snap Circuits Jr.",
      "description":"Snap and click custom circuits together in seconds. Includes everything from resistors, switches, and motors for the budding engineer.",
      "price":20,
      "buy":"http://amzn.to/2l8nl0Z",
      "link":"http://amzn.to/2lSvivD",
      "company":"Elenco",
      "categories":"electronics",
      "budget":["50",
      "100",
      "200",
      "300",
      ],
      "rank":10,
      "image":"https://dl.dropbox.com/s/f268ppr7h2xsts1/sb_io_snapcircuitsjr.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"robot",
      "age":["8-13", 
      "14+",
      ],
      "title":"Little Robot Friends",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":95,
      "buy":"https://shop-ca.littlerobotfriends.com/products/ready-to-make-kit",
      "link":"https://littlerobotfriends.com/products/ready-to-make/",
      "company":"Little Robot Friends",
      "categories":["electronics",
      "programming",
      ],
      "budget":["100",
      "200",
      "300",
      ],
      "rank":11.7,
      "image":"https://dl.dropbox.com/s/8yfgpsnxx3783pi/sb_io_little_robot_friends.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"drone",
      "age":"14+",
      "title":"Deluxe Flybrix Kit",
      "description":"A cuboid robot made from wood. Includes physical coding blocks and a colorful playmat for hands-on learning",
      "price":249,
      "buy":"https://flybrix.com/collections/flybrix-kits/products/deluxe-kit-v1",
      "link":"https://flybrix.com/collections/flybrix-kits/products/deluxe-kit-v1",
      "company":"Flybrix",
      "categories":["electronics",
      "mechanics",
      ],
      "budget":"300",
      "rank":6.7,
      "image":"https://dl.dropbox.com/s/2p33yrowc2v9rps/sb_io_flybrix.jpg?dl=0"
    },
    {
      "group":["kids",
      "students"
      ],
      "type":"other",
      "age":["8-13",
      "14+",
      ],
      "title":"littleBits",
      "description":"These tiny electronic modules snap together with magnets and make building circuits like LEGO. Snap together gizmos and more with littleBits!",
      "price":99,
      "buy":"",
      "link":"https://littlerobotfriends.com/products/ready-to-make/",
      "company":"littleBits",
      "categories":["electronics",
      "mechanics",
      "programming",
      ],
      "budget":["100",
      "200",
      "300"
      ],
      "rank":13.3,
      "image":"https://dl.dropbox.com/s/i84otkpk22pbp3m/sb_io_littlebits.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"other",
      "age":["8-13", 
      "14+",
      ],
      "title":"Thimble",
      "description":"A subscription box for makers, hackers, and anyone with an interest in STEM. Build and program robots, drones, and more!",
      "price":89,
      "buy":"https://www.thimble.io/shop/",
      "link":"https://www.thimble.io/#how-thimble-works",
      "company":"Thimble",
      "categories":["electronics",
      "programming",
      "mechanics",
      ],
      "budget":["100",
      "200",
      "300",
      ],
      "rank":13.3,
      "image":"https://dl.dropbox.com/s/h617dqmhkhsdogt/sb_io_thimble.jpg?dl=0"
    },
    ]

  });

})();
