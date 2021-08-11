$(document).ready(function(){
    console.log("hello")
    $("#signup-form").validate({
        rules:{
            yourname:{
                required:true,
                minlength:4
            }, 
            emailAddress:{
                required:true,
                email:true
            },
            subject:{
                required:true,
            },
            message:{
                required:true,
            }
        },
        submitHandler: function(form) {
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbyTgCJwxs4KXG1oof9y8MWF_-nRrvJ4OZglABeg9QqjIFexfWVcKtEHpDs27b324DV4aA/exec",
                data:$("#signup-form").serialize(),
                method:"post",
                success:function(response){
                    alert("Form submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
                }
            })
        }
    })
})