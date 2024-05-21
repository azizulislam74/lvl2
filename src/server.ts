import mongoose from "mongoose";
import app from "./app";

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://azizulislam:1mlaKx6koxSxaccE@cluster0.1mqmchh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const port = 300;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  //azizulislam
  //1mlaKx6koxSxaccE

}

main();