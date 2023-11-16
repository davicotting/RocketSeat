  export class Router {

      routes = {}

      add(routeName, directory){
        this.routes[routeName] = directory;
      }
     
      switchRoute(event){
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        this.goSwitch();
        this.pageSelectedVerifyer();
        this.RouteVerifyer();
       
      }


      goSwitch(){
        const {pathname} = window.location;
        const route = this.routes[pathname];

        
        fetch(route)
        .then(data => data.text())
        .then(html => {
          document.querySelector("#app").innerHTML = html;
        })

        
      }

       RouteVerifyer() {
        
        const {pathname} = window.location
        console.log("pathname: " + pathname);
        const html = document.querySelector('html')
        if(pathname == '/exploration'){

          console.log('estou no exploration!');
          html.classList.add('exploration');

        }else{
          html.classList.remove('exploration')
        }
        if(pathname == '/universe'){
          
          console.log('estou no universe!');
          html.classList.add('universe');

          
          }else{
            html.classList.remove('universe')
          } 
          if(pathname == '/'){

            console.log("estou no home");
            html.classList.add('home');
  
            
  
          }else{
            html.classList.remove('home')
          }
        }
     
        pageSelectedVerifyer(){
        const {pathname} = window.location;
        const home =  document.querySelector('.NavHome');
        const universe = document.querySelector('.NavUniverse')
        const exploration = document.querySelector('.NavExploration')

         if(pathname == '/'){
           home.classList.add('active');

         } else{
          home.classList.remove('active');
         }
         
         if(pathname == '/universe'){
          universe.classList.add('active');
        } else{
         universe.classList.remove('active');
        }

        if(pathname == '/exploration'){
          exploration.classList.add('active');
        }else{
         exploration.classList.remove('active');
        }

       }

       

       
      


   }
    