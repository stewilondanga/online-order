// logger function
  // write stuff out to the console
  function logger(message) {
      console.log("Logger: " + message);
  }

  $(document).ready(function() {
      // bind submit button to an event for the form
      $('#order').submit(function(evt) {

          //reset default settings at each click, so new errors can appear and fixed ones dissappear
          $('#required').html("");
          $('#first,#last, #address, #city, #state, #product, #quantity ').css('border', '1px solid grey');
          $("label[for='first']").html("<span class=''>First Name: </span>");
          $("label[for='last']").html("<span class=''>Last Name: </span>");
          $("label[for='address']").html("<span class=''>Address: </span>");
          $("label[for='city']").html("<span class=''>City: </span>");
          $("label[for='quantity']").html("<span class=''>Quantity: </span>");
          $("splegend").html("<span class=''>State </span>");
          $("#plegend").html("<span class=''>Product  </span>");

          /* check if fields empty: DO    */
          /*         THRoW ERRORS         */
   
          var first = $('#first').val();
          if (first === '') {
              $('#first').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>First Name is required.<br/>");
              //write alert in DOM
              $("label[for='first']").html("<strong class='error'>First Name is required: </strong>");
          }

          // last name
          var last = $('#last').val();
          if (last === '') {
              $('#last').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>Last Name is required.<br/>");
              //write alert in DOM
              $("label[for='last']").html("<strong class='error'>Last Name is required: </strong>");

          }

          // Address
          var address = $('#address').val();
          if (address === '') {
              $('#address').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>Address is required.<br/>");
              //write alert in DOM
              $("label[for='address']").html("<strong class='error'>Address is required: </strong>");
          }


          //  City
          var city = $('#city').val();
          if (city === '') {
              $('#city').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>City is required.<br/>");
              //write alert in DOM
              $("label[for='city']").html("<strong class='error'>City is required: </strong>");
          }


          //  State
          var state = $('#state').val();
          if (state === '' || state === '-') {
              $('#state').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>State selection is required.<br/>");
              //write alert in DOM
              $("#slegend").html("<strong class='error'>State selection is required </strong>");
          }

          // Product
          var product = $('#product').val();
          if (product === '' || product === '-') {
              $('#product').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>Product selection is required.<br/>");
              //write alert in DOM
              $("#plegend").html("<strong class='error'>Product Selection is required </strong>");

          }

          // Quantity
          var quantity = $('#quantity').val();
          if (quantity === '') {
              $('#quantity').css('border', '2px solid red');
              //write alert in bucket
              $('#required').append("<br/>Quantity required.<br/>");
              //write alert in DOM
              $("label[for='quantity']").html("<strong class='error'>Quantity is required </strong>");

          }


          /************************/
          /*                      */
          /* RADIO/CHECK BOXES    */
          /*                      */
          /************************/

          // radio button value
          $(':radio:checked').each(function() {
              logger('gender = ' + $(this).val());
          });

          // check box values
          email = $('#email').val();
          logger('email = ' + email);

          // check box values
          phone = $('#phone').val();
          logger('phone = ' + phone);

          // select pull down
          var state = $('#state').val();
          logger('state = ' + state);




          // this will not submit the form
          // note the parameter in the .ready function
          // use this to stop the form in it's tracks. That means don't submit it.




          evt.preventDefault();

      });




  }); //end document ready
//MAKE SURE USER AGREES WITH TERMS


   $('#terms').click(function(){

         alert("clicked");
});
