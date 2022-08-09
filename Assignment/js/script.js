// function error;
function err(er_msg) {
    let err_text = `
    <div class="err_box m-0 p-0">
        <p class="m-0 p-0"> <i class="fa fa-warning text-danger mx-2"></i> ${er_msg}</p>
        <div class="err_row  bg-danger"></div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', err_text);
    setTimeout(() => {
        // document.querySelector(".err_box").remove();
        document.getElementById("user_name").style.border = "2px solid rgb(68, 68, 68)";
        document.getElementById("user_email").style.border = "2px solid rgb(68, 68, 68)";
    }, 4000);

}


// function validation
function submit_user() {
    const user_name = document.getElementById("user_name").value;
    const user_email = document.getElementById("user_email").value;
    const valid_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var er_text;
    if (user_name !== '') {
        if (user_email !== '') {
            if (user_email.match(valid_mail)) {
                alert("Sucessfully sent your massege");
            } else {
                document.getElementById("user_email").style.border = "2px solid red";
                er_text = "Please Enter valid mail address"
                err(er_text);
            }
        } else {
            document.getElementById("user_email").style.border = "2px solid red";
            er_text = "Please enter Your Email address";
            err(er_text);

        }
    } else {
        document.getElementById("user_name").style.border = "2px solid red";
        er_text = "Please enter Your name";
        err(er_text);
    }

}