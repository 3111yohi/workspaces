package sample_ws;

public class HelloSampleClient {

	public static void main(String[] args) {
		HelloService hs = new HelloService();
		Hello h = hs.getHelloPort();

		System.out.println(h.sayHello("YOSHIDA"));

	}

}
