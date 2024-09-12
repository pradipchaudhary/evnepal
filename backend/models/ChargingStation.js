// models/ChargingStation.js
const mongoose = require("mongoose");

const ChargingStationSchema = new mongoose.Schema({
    name: String,
    location: { type: { type: String }, coordinates: [Number] }, // GeoJSON for map integration
    price: Number,
    capacity: Number,
    vatIncludedPrice: Number,
    availability: Boolean,
});

ChargingStationSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("ChargingStation", ChargingStationSchema);

// models/Seller.js
const SellerSchema = new mongoose.Schema({
    name: String,
    address: String,
    brands: [String],
    contact: String,
});
module.exports = mongoose.model("Seller", SellerSchema);

// models/Brand.js
const BrandSchema = new mongoose.Schema({
    name: String,
    models: [{ modelName: String, price: Number, vatIncludedPrice: Number }],
});
module.exports = mongoose.model("Brand", BrandSchema);

// models/News.js
const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    sourceUrl: String,
    publishedDate: Date,
});
module.exports = mongoose.model("News", NewsSchema);

// models/Voucher.js
const VoucherSchema = new mongoose.Schema({
    voucherName: String,
    discountAmount: Number,
    validity: Date,
    terms: String,
});
module.exports = mongoose.model("Voucher", VoucherSchema);
