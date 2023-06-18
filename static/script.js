$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM




    //  write an event, when Submit button is clicked
    $('$submit_button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                model = load_model("./static/assets/emoticons/neutral.png")

                //  update the DOM elements
                vocab_size = 40000
                max_length = 100
                trunc_type = "post"
                padding_type = "post"
                oov_token = "OOV"
                //  show them
                $(document).ready(function (){
                    $("#display_date").html(display_date)
                })
            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})