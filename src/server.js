"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = require("./config/database");
const PORT = process.env.PORT || 3000;
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    app_1.app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
//# sourceMappingURL=server.js.map