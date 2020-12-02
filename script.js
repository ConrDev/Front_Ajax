$(document).ready(function () {
    // Lijst van leden tonen
    toonLijst();
    
    // Sluiten buttons
    $("#aanpas-close").on('click', () => {
        $('#pasaanModal').modal('hide');
    });

    $("#maak-close").on('click', () => {
        $('#modalToevoeg').modal('hide');
    });

    $("#verwijder-close").on('click', () => {
        $('#verwijderModal').modal('hide');
    });

    // Aanpassingen submiten
    $("#aanpasForm").submit((e) => {
        e.preventDefault();
        console.log($('#aanpasForm').serialize());

            var data = $('#aanpasForm').serialize();
            $.ajax({
                url: "lid_aanpas.php",
                cache: false,
                method: "POST",
                data : {
                    data
                }
            })
            .done((data) => {
                if (data == "OK") {
                    $("#pasaanModal").modal('hide');
                    updateLijst();
                } else {
                    alert("Er ging iets fout!");
                }
            });
    });

    // Leden toevoegen
    $("#maakForm").submit((e) => {
        e.preventDefault();
        console.log($('#maakForm').serialize());

            var data = $('#maakForm').serialize();
            $.ajax({
                url: "lid_toevoeg.php",
                cache: false,
                method: "POST",
                data : {
                    data
                }
            })
            .done((data) => {
                if (data == "OK") {
                    $("#modalToevoeg").modal('hide');
                    updateLijst();
                } else {
                    alert("Er ging iets fout!");
                }
            });
    });
    
    // Leden verwijderen
    $("#verwijderForm").submit((e) => {
        e.preventDefault();
        console.log($('#verwijderForm').serialize());

            var data = $('#verwijderForm').serialize();
            $.ajax({
                url: "lid_verwijder.php",
                cache: false,
                method: "POST",
                data : {
                    data
                }
            })
            .done((data) => {
                if (data == "OK") {
                    $("#verwijderModal").modal('hide');
                    updateLijst();
                } else {
                    alert("Er ging iets fout!");
                }
            });
    });
});

// Lijst van leden tonen
function toonLijst() {
    $.ajax({
        type: "GET",
        url: "uitlees.php",
        dataType: "JSON"
    }).done(function (data) {
            var output = "<tr>";
            for (var i in data) {
                output;
                output += '<td scope="col">' + data[i].id + '</td>';
                output += '<td>' + data[i].gender + '</td>';
                output += '<td>' + data[i].first_name + '</td>';
                output += '<td>' + data[i].last_name + '</td>';
                output += '<td>' + data[i].birth_date + '</td>';
                output += '<td>' + data[i].member_since + '</td>';
                output += '<td><button type="button" class="btn btn-primary" data-id="' + data[i].id + '" data-gender="' + data[i].gender + '" data-first_name="' + data[i].first_name + '" data-last_name="' + data[i].last_name + '" data-birth_date="' + data[i].birth_date + '" data-member_since="' + data[i].member_since + '" data-toggle="modal" data-target="#pasaanModal" id="pasaanKnop">Pasaan</button></td>';
                output += '<td><button type="button" class="btn btn-danger" data-id="' + data[i].id + '" data-first_name="' + data[i].first_name + '" data-last_name="' + data[i].last_name + '" data-member_since="' + data[i].member_since + '" data-toggle="modal" data-target="#verwijderModal" id="verwijderKnop">Verwijder</button></td>';
                output += "</tr>"
            }
            $("#hierinfo").html(output).fadeIn().delay(2000);
        });
}

// Updated de Lijst van leden
function updateLijst() {
    $("#hierinfo").fadeOut(800, () => {
        $.ajax({
            type: "GET",
            url: "uitlees.php",
            dataType: "JSON"
            }).done(function (data) {
                var output = "<tr>";
                for (var i in data) {
                    output;
                    output += '<td scope="col">' + data[i].id + '</td>';
                    output += '<td>' + data[i].gender + '</td>';
                    output += '<td>' + data[i].first_name + '</td>';
                    output += '<td>' + data[i].last_name + '</td>';
                    output += '<td>' + data[i].birth_date + '</td>';
                    output += '<td>' + data[i].member_since + '</td>';
                    output += '<td><button type="button" class="btn btn-primary" data-id="' + data[i].id + '" data-gender="' + data[i].gender + '" data-first_name="' + data[i].first_name + '" data-last_name="' + data[i].last_name + '" data-birth_date="' + data[i].birth_date + '" data-member_since="' + data[i].member_since + '" data-toggle="modal" data-target="#pasaanModal" id="pasaanKnop">Pasaan</button></td>';
                    output += '<td><button type="button" class="btn btn-danger" data-id="' + data[i].id + '" data-first_name="' + data[i].first_name + '" data-last_name="' + data[i].last_name + '" data-member_since="' + data[i].member_since + '" data-toggle="modal" data-target="#verwijderModal" id="verwijderKnop">Verwijder</button></td>';
                    output += "</tr>"
                }
                $("#hierinfo").html(output).fadeIn().delay(2000);
        });
    });
}

$(document).on('click', '#pasaanKnop', function () {
    
    // Lees alle variabelen uit
    var id = $(this).data('id');
    var gender = $(this).data('gender');
    var first_name = $(this).data('first_name');
    var last_name = $(this).data('last_name');
    var birth_date = $(this).data('birth_date');
    var member_since = $(this).data('member_since');

    // logged alle variabelen
    console.log($(this).data());
    console.log("id = " + id);
    console.log("gender = " + gender);
    console.log("first_name = " + first_name);
    console.log("last_name = " + last_name);
    console.log("birth_date = " + birth_date);
    console.log("member_since = " + member_since);

    //Hier komt de rest van de aanpasfunctie
    $("#aanpasInfo").html("ID = " + id);
    $("#aanpasForm #id").val(id);

    // Checked welk geslacht de persoon is
    if (gender == "M") {
        $("#aanpasForm #gender_m").prop('checked',true);
    } else {
        $("#aanpasForm #gender_f").prop('checked',true);
    }

    // Voert alle variabelen in de form 
    $("#aanpasForm #first_name").val(first_name);
    $("#aanpasForm #last_name").val(last_name);
    $("#aanpasForm #birth_date").val(birth_date);
    $("#aanpasForm #member_since").val(member_since);
});

$(document).on('click', '#verwijderKnop', function () {
    // Lees alle variabelen uit
    var id = $(this).data('id');
    var first_name = $(this).data('first_name');
    var last_name = $(this).data('last_name');
    var member_since = $(this).data('member_since');

    // logged alle variabelen
    console.log($(this).data());
    console.log("id = " + id);
    console.log("first_name = " + first_name);
    console.log("last_name = " + last_name);
    console.log("member_since = " + member_since);

    //Hier komt de rest van de aanpasfunctie
    $("#verwijderInfo").html("ID = " + id);
    $("#verwijderForm #id").val(id);

    // Voert alle variabelen in de form 
    $("#verwijderForm #name").html(first_name + " " + last_name);
    $("#verwijderForm #member_since").html(member_since);
    
});