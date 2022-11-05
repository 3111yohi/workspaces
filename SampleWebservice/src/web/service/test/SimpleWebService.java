package web.service.test;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService(name = "SimpleWebServicePortType",serviceName="HelloService")
public class SimpleWebService {

    @WebMethod
    public String sayHello(@WebParam(name="name") String name) {
        return "Hello " + name + "!";
    }
}
