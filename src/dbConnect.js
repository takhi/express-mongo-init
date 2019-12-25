const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "test";

async function connect() {
	try {
		await mongoose.connect(`${dbUrl}/${dbName}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
	} catch (err) {
		console.log("[ERROR][dbConnect] Db connection");
	}
}

module.exports = connect;