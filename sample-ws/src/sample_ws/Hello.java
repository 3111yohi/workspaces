package sample_ws;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public class Hello {

    @WebMethod
        public String sayHello(@WebParam(name="name") String name) {
            return "Hello " + name + "!";
    }

}