// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
// import kpiRoutes from "./routes/kpi.js";
// import productRoute from "./routes/product.js";
// import transactionRoutes from "./routes/transaction.js";
// import KPI from "./models/KPI.js";
// import Transaction from "./models/Transaction.js";
// import { kpis, products, transactions } from "./data/data.js";
// import Product from "./models/Product.js";


// /* CONFIGURATIONS */
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// // app.use(cors({
// //     origin: 'https://client-finance-app.vercel.app',
// //     methods: ['GET', 'POST']
// //   }));

// /* ROUTES */
// app.use("/kpi", kpiRoutes);
// app.use("/product", productRoute);
// app.use("/transaction", transactionRoutes);

// /* MONGOOSE SETUP */
// const PORT = process.env.PORT || 9000;
// mongoose
//     .connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         UseUnifiedTopology: true,
//     })

//     .then(async () => {
//         app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//         /* ADD DATA ONE TIME ONLY OR AS NEEDED */
//     //await mongoose.connection.db.dropDatabase();
//     // KPI.insertMany(kpis);
//     // Product.insertMany(products);
//     // Transaction.insertMany(transactions);

//     })
//     .catch((error) => console.log(`${error} did not connect`));

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoute from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración de CORS específica
const corsOptions = {
  origin: "https://client-finance-app.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/kpi", kpiRoutes);
app.use("/product", productRoute);
app.use("/transaction", transactionRoutes);

const PORT = process.env.PORT || 9000;

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));



