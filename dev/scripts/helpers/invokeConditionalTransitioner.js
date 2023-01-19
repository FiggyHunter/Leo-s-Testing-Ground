import { invokeTransitioner } from "./invokeTransitioner";

export function ConditionalTransitioner(element) {
    element.addEventListener("click", ()=> {
        switch (localStorage.getItem("view_option")) {
          case "Advanced":
            invokeTransitioner("index-complex.html");
            break;
          case "Simple" :
          invokeTransitioner("index.html");
          break;
          default:
            invokeTransitioner("index.html");
            break;
        }
      })
}