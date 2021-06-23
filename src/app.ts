// this shim is required
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controller";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [UserController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
