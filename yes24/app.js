import express from 'express';
import bestSellerRouter from './router/bestseller.js';
import realTimeBestSellerRouter from './router/realTimeBestseller.js';
import dayBestSellerRouter from './router/dayBestseller.js';
import monthWeekBestSellerRouter from './router/monthWeekbestseller.js';
import hotPricebestSellerRouter from './router/hotPriceBestseller.js';
import steadySellerRouter from './router/steadyseller.js';

const app = express()

app.use('/BestSeller',bestSellerRouter)
app.use('/RealTimeBestSeller',realTimeBestSellerRouter)
app.use('/DayBestSeller',dayBestSellerRouter)
app.use('/MonthWeekBestSeller',monthWeekBestSellerRouter)
app.use('/HotPriceBestSeller',hotPricebestSellerRouter)
app.use('/SteadySeller',steadySellerRouter)

app.listen(8080);