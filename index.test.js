const createServer = require("./server")
const supertest = require("supertest")
const msw =  require("msw/node");
const app = createServer()


beforeEach(() => {
	const handlers = [];
    const mockServer = msw.setupServer(...handlers);
	mockServer.listen({
		onUnhandledRequest : "warn"
	});
  });

test("GET /test", async () => {
	await supertest(app)
		.get("/test")
		.expect(200)
})