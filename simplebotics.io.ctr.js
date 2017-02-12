
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
      "group":"kids",
      "type":"robot",
      "age":"8-13",
      "title":"Ozobot Evo",
      "description":"The tiniest programmable robot we could find. If your kids like Scratch programming, they'll love Ozobot!",
      "price":99,
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropbox.com/s/foyw10t5u0kmrcn/sb_io_ozobot.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"8-14",
      "title":"SPRK+",
      "description":"This robot ball can be programmed with a smartphone. It's also made of durable, kid-proof plastic.",
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropboxusercontent.com/s/cy31ehjroj1myjx/sb_io_sprk%2B.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"3-7",
      "title":"Dash and Dot",
      "description":"The ultimate robot duo. Kids ages 5 and up can program these robots with a smartphone or tablet.",
      "price":239,
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropbox.com/s/qqhv3l5no7dpy5a/sb_io_dash_dot.jpg?dl=0"
    },
     {
      "group":"kids",
      "type":"robot",
      "age":["8-13","14+"],
      "title":"LEGO Mindstorms EV3",
      "description":"Our personal favorite. LEGO's EV3 kit combines the classic plastic brick with modern computer technology for hundreds of projects.",
      "price":350,
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming",
      "mechanics"
      ],
      "image": "https://dl.dropbox.com/s/19obolm4y38kg4t/sb_io_lego_mindstorms_ev3.jpg?dl=0"
    },
     {
      "group":"kids",
      "type":"robot",
      "age":"8-13",
      "title":"Kamigami",
      "description":"Build and program a robotic bug with Kamigami robots. No tools required. Just a smartphone.",
      "price":99,
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming",
      "electronics",
      "mechanics"
      ],
      "image": "https://dl.dropbox.com/s/0i6xi1sxclm0mll/sb_io_kamigami.jpg?dl=0"
    },
    {
      "group":"kids",
      "type":"robot",
      "age":"3-7",
      "title":"Cubetto",
      "description":"The ultimate robot duo. Kids ages 5 and up can program these robots with a smartphone or tablet.",
      "price":239,
      "link":"http://www.ozobot.com",
      "company":"Evollve Inc.",
      "categories":[
      "programming"
      ],
      "image": "https://dl.dropbox.com/s/qqhv3l5no7dpy5a/sb_io_dash_dot.jpg?dl=0"
    },
    ]

  });

})();
