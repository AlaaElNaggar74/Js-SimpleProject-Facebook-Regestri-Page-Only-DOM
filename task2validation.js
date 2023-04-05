window.onload = function () {
  document.body.style.cssText = "background-color:#f0f2f5;";
  let facetitle = document.createElement("h1");

  facetitle.style.cssText =
    " text-align:center;margin:25px 0;color:#1877f2;font-Size:3.5rem;font-family:Helvetica, Arial, sans-seri;font-Weight:700";

  let maincontaineerDiv = document.createElement("div");
  maincontaineerDiv.style.cssText =
    "background-color:white;line-Height:2rem;display:flex;flex-wrap:wrap;width:450px;position:relative;margin:0px auto;border-radius:10px;font-family:Helvetica, Arial, sans-seri";

  let subdiv = document.createElement("div");
  let h1titl = document.createElement("h1");
  let ptitl = document.createElement("p");

  subdiv.style.cssText =
    "border-box:box-sizing;width:fit-content;margin:auto;color:#1c1e21;";
  ptitl.style.cssText =
    "text-Align:center;font-size:1.3rem;opacity:.7;margin-top:-20px;";

  let lineee = document.createElement("div");
  lineee.style.cssText =
    "width:100%;height:2px;background-color:rgb(230 230 230);;margin-Bottom:15px;";
  let formz = document.createElement("form");
  let inputt1 = document.createElement("input");
  let inputt2 = document.createElement("input");
  formz.setAttribute("action", "https://ar-ar.facebook.com/");

  inputt1.setAttribute("type", "text");
  inputt1.setAttribute("name", "Fname");
  inputt1.setAttribute("value", "");
  inputt1.setAttribute("placeholder", "Firstname");

  inputt1.style.cssText =
    "width:40.5%;margin:0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:2px solid rgb(230 230 230)";

  inputt2.setAttribute("type", "text");
  inputt2.setAttribute("name", "Lname");
  inputt2.setAttribute("value", "");
  inputt2.setAttribute("placeholder", "Lastname");

  inputt2.style.cssText =
    "width:40.5%;margin:10px 0px 10px 0px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:2px solid rgb(230 230 230)";

  let inputt3 = document.createElement("input");
  let inputt4 = document.createElement("input");
  inputt3.setAttribute("type", "tel");
  inputt3.setAttribute("name", "phone");
  inputt3.setAttribute("value", "");
  inputt3.setAttribute("placeholder", "Mobile Number or Email");
  inputt3.style.cssText =
    "width:89%;margin:0px 0px 0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:2px solid rgb(230 230 230)";

  inputt4.setAttribute("type", "Password");
  inputt4.setAttribute("name", "pass");
  inputt4.setAttribute("value", "");
  inputt4.setAttribute("placeholder", "Your Password");
  inputt4.style.cssText =
    "width:89%;margin:10px 0 10px 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:2px solid rgb(230 230 230)";

  //let radiooDATEla=document.createElement("lablel");
  /*let radiooDATE=document.createElement("div");
	
	let radioodD1=document.createElement("div");
	let inputtD1=document.createElement("lablel");
	let inputtD2=document.createElement("input");

	let radiooD2=document.createElement("div");
	let inputtD3=document.createElement("lablel");
	let inputtD4=document.createElement("input");
	
	let radioodD3=document.createElement("div");
	let inputtD5=document.createElement("lablel");
	let inputtD6=document.createElement("input"); */

  let radiooGENDERlab = document.createElement("lablel");
  let radiooGENDER = document.createElement("div");

  radiooGENDERlab.style.cssText = "margin-Left:15px;font-Size:1.1rem";
  radiooGENDER.style.cssText = "display:flex;flex-wrap:wrap;margin-top:5px";

  let radiooG1 = document.createElement("div");
  let inputtG1 = document.createElement("lablel");
  let inputtG2 = document.createElement("input");
  inputtG2.setAttribute("type", "Radio");
  inputtG2.setAttribute("name", "gender");
  inputtG2.setAttribute("value", "Radio");
  inputtG1.style.cssText = "margin-Left:40px;line-Height:1rem;font-Size:1.5rem";
  radiooG1.style.cssText =
    "display:flex;justify-content:space-between;width:110px;margin:0 0 0 15px ;line-Height:1rem;;border-radius:5px;border:2px solid rgb(230 230 230);padding:.5rem";

  let radiooG2 = document.createElement("div");
  let inputtG3 = document.createElement("lablel");
  let inputtG4 = document.createElement("input");
  inputtG4.setAttribute("type", "Radio");
  inputtG4.setAttribute("name", "gender");
  inputtG4.setAttribute("value", "Radio");
  inputtG3.style.cssText = "margin-Left:45px;line-Height:1rem;font-Size:1.5rem";
  radiooG2.style.cssText =
    "display:flex;justify-content:space-between;width:110px;margin:0 15px;line-Height:1rem;;border-radius:5px;border:2px solid rgb(230 230 230);padding:.5rem";

  let radiooG3 = document.createElement("div");
  let inputtG5 = document.createElement("lablel");
  let inputtG6 = document.createElement("input");
  inputtG6.setAttribute("type", "Radio");
  inputtG6.setAttribute("name", "gender");
  inputtG6.setAttribute("value", "Radio");
  inputtG5.style.cssText = "margin-Left:40px;line-Height:1rem;font-Size:1.5rem";
  radiooG3.style.cssText =
    "display:flex;justify-content:space-between;width:110px;margin:0px;line-Height:1rem;;border-radius:5px;border:2px solid rgb(230 230 230);padding:.5rem";

  let lastapar = document.createElement("p");
  let lastbpar = document.createElement("p");
  lastapar.style.cssText =
    "margin:15px;font-size:.8rem;opacity:.7;font-family: Helvetica, Arial, sans-serif;line-Height:1.3rem";
  lastbpar.style.cssText =
    "margin:0 20px 10px 15px;font-size:.8rem;opacity:.7;font-family: Helvetica, Arial, sans-serif;line-Height:1.3rem";

  //let brr1=document.createElement("br");

  //let brr2=document.createElement("br");
  let forbotttu = document.createElement("Button");
  forbotttu.setAttribute("type", "submit");
  forbotttu.style.cssText =
    "cursor:pointer;display:block;margin:auto;background: none;background-color: #00a400;border: none;border-radius: 6px;box-shadow: none;color: #fff;font-size: 18px;font-weight: 600;height: 36px;overflow: hidden; padding: 15px 75px;line-Height:0rem; text-shadow: none;";

  let already = document.createElement("a");
  already.style.cssText =
    "display:block;margin:auto;text-Decoration:none;width:fit-content;margin-top:10px;font-size:1.3rem;color:blue";
  already.setAttribute("href", "#");

  let facetilttext = document.createTextNode("Facebook");
  let h1titltext = document.createTextNode("Create a new account");
  let ptitltext = document.createTextNode("It's quick and easy.");
  let radiooDATElatex = document.createTextNode("Date of birth");
  let radiooGENDERlabtex = document.createTextNode("Gender");
  let lastapartex = document.createTextNode(
    "People who use our service may have uploaded your contact information to Facebook."
  );
  let lastbpartext = document.createTextNode(
    "By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.Sign Up"
  );
  let formbutttext = document.createTextNode("Sign Up");
  let alredtex = document.createTextNode("Already have an account?");

  /* 	let inputtD1TEX=document.createTextNode("Female");
	let inputtD3TEX=document.createTextNode("");
	let inputtD5TEX=document.createTextNode(""); */

  let inputtG1TEX = document.createTextNode("Female");
  let inputtG3TEX = document.createTextNode("Male");
  let inputtG5TEX = document.createTextNode("Custom");

  facetitle.appendChild(facetilttext);
  document.body.appendChild(facetitle);

  h1titl.appendChild(h1titltext);
  ptitl.appendChild(ptitltext);

  inputtG1.appendChild(inputtG1TEX);
  inputtG3.appendChild(inputtG3TEX);
  inputtG5.appendChild(inputtG5TEX);

  subdiv.appendChild(h1titl);
  subdiv.appendChild(ptitl);
  maincontaineerDiv.appendChild(subdiv);

  maincontaineerDiv.appendChild(lineee);

  formz.appendChild(inputt1);
  formz.appendChild(inputt2);
  formz.appendChild(inputt3);
  formz.appendChild(inputt4);

  //formz.appendChild(radiooDATEla);
  //radiooDATEla.appendChild(radiooDATElatex);

  formz.appendChild(radiooGENDERlab);
  radiooGENDERlab.appendChild(radiooGENDERlabtex);
  formz.appendChild(radiooGENDER);
  radiooGENDER.appendChild(radiooG1);
  radiooG1.appendChild(inputtG1TEX);
  radiooG1.appendChild(inputtG1);
  radiooG1.appendChild(inputtG2);
  radiooGENDER.appendChild(radiooG2);
  radiooG2.appendChild(inputtG3TEX);
  radiooG2.appendChild(inputtG3);
  radiooG2.appendChild(inputtG4);
  radiooGENDER.appendChild(radiooG3);
  radiooG3.appendChild(inputtG5TEX);
  radiooG3.appendChild(inputtG5);
  radiooG3.appendChild(inputtG6);

  formz.appendChild(lastapar);
  lastapar.appendChild(lastapartex);
  formz.appendChild(lastbpar);
  lastbpar.appendChild(lastbpartext);

  formz.appendChild(forbotttu);
  forbotttu.appendChild(formbutttext);

  formz.appendChild(already);
  already.appendChild(alredtex);

  /* formz.appendChild(radiooDATE);
	radiooDATE.appendChild(radioodD1);
	radioodD1.appendChild(inputtD1);
	radioodD1.appendChild(inputtD2);
	
	radiooDATE.appendChild(radiooD2);
	radiooD2.appendChild(inputtD3);
	radiooD2.appendChild(inputtD4);
	
	radiooDATE.appendChild(radioodD3);
	radioodD3.appendChild(inputtD5);
	radioodD3.appendChild(inputtD6); */

  maincontaineerDiv.appendChild(formz);

  /* .appendChild();
		.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	.appendChild();
	document.body.appendChild(); */

  document.body.appendChild(maincontaineerDiv);

  formz.onsubmit = function (event) {
    let fn = false;
    let ln = false;
    let ph = false;
    let pas = false;
    /* 	let gen=false; */

    if (inputt1.value !== "" && inputt1.value.length <= 6) {
      fn = true;
    } else {
      inputt1.style.cssText =
        "width:40.5%;margin:0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
    }
    if (inputt2.value !== "" && inputt2.value.length <= 6) {
      ln = true;
    } else {
      inputt2.style.cssText =
        "width:40.5%;margin:10px 0px 10px 0px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
    }

    if (inputt3.value !== "" && inputt3.value.length <= 6) {
      ph = true;
    } else {
      inputt3.style.cssText =
        "width:89%;margin:0px 0px 0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
    }

    if (inputt4.value !== "" && inputt4.value.length <= 6) {
      pas = true;
    } else {
      inputt4.style.cssText =
        "width:89%;margin:10px 0 10px 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
    }
    /* 	if( inputtG2.value!=="" ||inputtG4.value!==""||inputtG6.value!==""){
	     	gen=true;
			} */
    if (
      fn === false ||
      ln === false ||
      ph === false ||
      pas === false /* ||gen===false */
    ) {
      event.preventDefault();
    }
  };
  /* 
	inputt1.visited=function(){
		if(inputt1.value===""&&inputt1.value.length>=6 ){
	     	inputt1.style.cssText="width:40.5%;margin:0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
			}
	}
	
	inputt2.visited=function(){
		if(inputt2.value===""&&inputt2.value.length>=6 ){
	     	inputt2.style.cssText="width:40.5%;margin:0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
			}
	}
	
	inputt3.visited=function(){
		if(inputt3.value===""&&inputt3.value.length>=6 ){
	     	inputt3.style.cssText="width:40.5%;margin:0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
			}
	}
	
	inputt4.visited=function(){
		if(inputt4.value===""&&inputt4.value.length>=6 ){
	     	inputt4.style.cssText="width:40.5%;margin:0 15px;line-Height:1rem;font-Size:1rem;padding:.5rem;border-radius:5px;border:1px solid red";
			}
	}
	
	 */
};
