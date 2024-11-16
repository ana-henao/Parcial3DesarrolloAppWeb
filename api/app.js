import { Db } from "./src/config/db.mjs";

client = new Db().client();

print(client)
