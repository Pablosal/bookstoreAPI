import app from "./server/server";

app.listen(process.env.PORT || 3001, () => console.log("Server running in port" + process.env.PORT || 3001))