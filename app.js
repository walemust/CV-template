let menu = document.getElementById('menu');
        let list = document.getElementById('list');
        menu.addEventListener('click', function (){
            if(list.style.display=='block'){
                list.style.display= 'none';
            }
            else{
                list.style.display='block';
            }
        });