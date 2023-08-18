import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const KPISchema = new Schema(
    {
      totalProfit: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
      }  
    }
);

const KPI = mongoose.model("KPI", KPISchema); 

export default KPI;

// AQUI: 2.03.48 youtube: https://www.youtube.com/watch?v=uoJ0Tv-BFcQ&t=1933s