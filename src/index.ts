import server from "server";
import "dotenv/config";

const app = server();
const port: number = parseInt(<string>process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});