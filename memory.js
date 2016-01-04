if (Meteor.isClient) {

    Template.hello.helpers({

        fade:function () {

        }

    });







    Template.hello.onRendered(function(){

        var cols = 5;
        var rows = 5;
        // function genDivs(rows,cols){

        var e = document.getElementById("target");

        var cols = cols || rows;
        for(var r = 0; r < rows; r++) {
            var row = document.createElement("div");
            row.className = "row";

            for(var c = 0; c < cols; c++) {
                var col = document.createElement("div");
                var front = document.createElement("div");
                front.className = "front";
                front.onclick = function() {
                    $(".card").flip();

                };
                var back = document.createElement("div");
                back.className = "back";
                back.innerHTML = getElement();
                front.onclick = function() {
                    $(".card").flip();
                };
                col.className = "card";

                //col.innerHTML = (r * rows) + c;
                col.appendChild(front);
                col.appendChild(back);
                //col.innerHTML = getElement();
                /*var front = document.createElement("div");
                 front.className = "front";
                 front.innerHTML = (r * rows) + c;
                 front.innerHTML = "front";
                 row.appendChild(back);*/
                row.appendChild(col);
            }
            e.appendChild(row);
        }
        //}
        function getElement(){
            var elements = [
                "A",
                "B",
                "C"
            ]
            return elements[Math.floor(Math.random() * (elements.length))];
        }

        //invoke the flip function to add the css to the grid..
        $(".card").flip();
        $('#target').fadeIn('slow');


    });

    Template.hello.events({
        'click button': function () {

        },

        'click .card': function () {


        }

    });
}

/*

Meteor.startup( function () {

})

*/
