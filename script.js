$(document).ready(function () {
    var divEL;
    var liEL ;
    //var type1;
    
        // $(document).on("click",".p3Click",function(){
        //     console.log(this);
        //     console.log($(this).attr("data-types"))
        //     let typesStr = $(this).attr("data-types")
        //     let typesArr = typesStr.split(",");
            
        //     divEL=$("<div>");
        //      let ulEl =$("<ul>");
        //      divEL.append(ulEl);
        //      let targetDiv = $(this).closest(".showResult")
        //      targetDiv.append(divEL);
        //      for(j=0;j<typesArr.length;j++){
                 
        //          liEL = $("<li>");
        //          liEL.addClass("service");
        //          liEL.text(typesArr[j]);
        //          ulEl.append(liEL);
                 
        //     }
        // })
        
        
        
        var $search = $("#button");
        
       
        // var map;
        // var service;
        // var infowindow;
        
        
        
        $search.on("click", function (e) {
            e.preventDefault();
            getLocation();
            
           
            // console.log(lot);
            // console.log(log);
            
            
            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    alert("Geolocation is not supported by this browser.");
                }
                
            }   
            function showPosition(position) {
                // $("#tage").text("Latitude: " + position.coords.latitude +
                // "<br>Longitude: " + position.coords.longitude);
                // lot = position.coords.latitude;
                // log = position.coords.longitude;
                // console.log(lot);
                // console.log(log);
                
                
                var berkeley = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                
                var service = new google.maps.places.PlacesService(map);
                
                
                var request = {
                    location: berkeley,
                    radius: '5000',
                    type: ['gas_station'],
                    openNow: true
                };
                
                service.nearbySearch(request, function (results, status) {
                    console.log(results);
                    console.log(status);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                            
                            
                            //console.log(results[i].name);
                            //console.log(results[i].icon);
                            //console.log(results[i]. vicinity);
                            //console.log(results[i].types);
                            var divEL1=$("<div>");
                            divEL1.addClass("showResult");
                           

                            
                            var p1 = $("<p>");
                            
                            p1.addClass("name");
                            p1.text(results[i].name);
                            divEL1.append(p1);
                            var h4El = $("<h4>");
                            h4El.addClass("rating");
                            h4El.text("Rating:"+results[i].rating);
                            divEL1.append(h4El);
                            var p2 = $("<p>");
                            p2.addClass("address");
                            p2.text(results[i]. vicinity);
                            divEL1.append(p2);
                            $("#page1").append(divEL1);
                            var hEl5 = $("<h5>");
                            hEl5.addClass("services1");
                            hEl5.text("Services:");
                            divEL1.append(hEl5);
                            

                            
                        //     var p3El=$("<button>");
                        //     p3El.addClass("p3Click");
                        //     p3El.attr("data-types", results[i].types)
                        //     p3El.text("Click Here to Check What services we have?");
                        //    divEL1 .append(p3El);
                            
                            
                            
                           var typeEl = results[i].types;
                            for(j=0;j<typeEl.length;j++){
                                divEL=$("<div>");
                                liEL = $("<li>");
                                liEL.addClass("service");
                                liEL.text(typeEl[j]);
                                divEL.append(liEL);
                                divEL1.append(divEL);
                                
                            }
                            
                            
                            
                        
                        var hrEl = $("<hr>");
                        $("#page1").append(hrEl);
                        

                        

                    }
                    map.setCenter(results[0].geometry.location);
                }
            });

        }



        // //var $address = $(".address").val();
        // //  console.log($address);
        // //  console.log($city);









    })

})
