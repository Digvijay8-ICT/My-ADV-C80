name_of_the_guest_array = [];

function submit() {
    var GuestName = document.getElementById("name1").value;
    name_of_the_guest.push(GuestName);
    document.getElementById("sort_button").style.display="block";
    var display_guest_array = [];
    for (var j = 1; j <= 4; j++) {
        var name_of_the_guest = document.getElementById("name_of_the_guest_" + j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }
    console.log(name_of_the_guest_array);
    var lenght_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(lenght_of_name_of_guest_array);
    for (var k = 0; k < lenght_of_name_of_guest_array; k++) {
        display_guest_array.push("NAME -" + name_of_the_guest_array[k] + "</h4>");
        console.log(display_guest_array);
    }
    console.log(display_guest_array);
    document.getElementById("display_name_with_commas").innerHTML = display_guest_array;
    var remove_commas = display_guest_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("display_search_bar").innerHTML= display_guest_array;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("search_button").style.display= "inline-block";

}

function sorting() {
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);
    var display_guest_array_sorting = [];
    var lenght_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(lenght_of_name_of_guest_array);
    for (var k = 0; k < length_of_name_of_guest_array; k++) {
        display_guest_array_sorting.push("NAME- " + name_of_the_guest_array[k] + "</h4>");
        console.log(display_guest_array_sorting);
    }
    var remove_commas = display_guest_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j = 0; j < names_of_guest.length; j++) {
        if (s == name_of_the_guest[j]) {
            found = found + 1;
        }
    }

 document.getElementById("p2").innerHTML="name_found" +found+ "time/s";
 console.log("found_name" +found+ "time/s")
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_guest_array + "</h1>";
}