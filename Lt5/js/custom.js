
    window.onresize = () => {
      if  (document.body.clientWidth <750){
        document.getElementById('banim').src="images/Banner02.png";         
      }else{
        document.getElementById('banim').src="images/Banner03.png";
      }
      if ( document.body.clientWidth <990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');   
        if  (document.body.clientWidth <990){           
            document.getElementById('impadw').classList.add('padw');
        }
      }else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if  (document.body.clientWidth >=990){           
          document.getElementById('impadw').classList.remove('padw');
        }        
      }
    }

    window.onload = () => {
      if ( document.body.clientWidth <990) {
        document.getElementById('van').classList.remove('nav-nobg');
        document.getElementById('van').classList.add('nav-van');   
        if  (document.body.clientWidth <990){           
            document.getElementById('impadw').classList.add('padw');
        }
      }else {
        document.getElementById('van').classList.remove('nav-van');
        document.getElementById('van').classList.add('nav-nobg');
        if  (document.body.clientWidth >=990){           
          document.getElementById('impadw').classList.remove('padw');
        }
      }
    }

