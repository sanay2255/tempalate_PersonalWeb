
    $(document).ready(function(){
      $("#signup-form").validate({
        rules:{
            name:{
                required:true,
                minlength:3,
                lettersonly:true
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                maxlength:50,
            },
            message:{
                maxlength:100
            }
        }
       
      })
    })
