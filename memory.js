if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        },
        grid: function () {
            var cols = 10;
            var rows = 10;
           // function genDivs(rows,cols){
                var e = document.getElementById("target");
                var cols = cols || rows;
                for(var r = 0; r < rows; r++) {
                    var row = document.createElement("div");
                    row.className = "row";
                    for(var c = 0; c < cols; c++) {
                        var col = document.createElement("div");
                        col.className = "col";
                        col.innerHTML = (r * rows) + c;
                        col.innerHTML = getElement();
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
           // document.getElementById("code").innerText = e.innerHTML;

        }


    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
