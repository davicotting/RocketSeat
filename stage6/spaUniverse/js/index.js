      import { Router } from "./routes.js";
   
      const router = new Router();

      router.add("/", 'pages/home.html');
      router.add("/exploration", 'pages/exploration.html');
      router.add("/universe", 'pages/universe.html');


      
      router.goSwitch();
      router.pageSelectedVerifyer();
      router.RouteVerifyer();
      
      window.switchRoute = () => router.switchRoute();

      

   

      



      
      
      