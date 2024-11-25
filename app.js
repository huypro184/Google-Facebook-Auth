import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import session from "express-session";
import passport from "passport";
import googleAuthRoutes from './routes/googleAuth.route.js';
import facebookAuthRoutes from './routes/facebookAuth.route.js';
import './controllers/googleAuth.controller.js';


dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/gg", googleAuthRoutes);
app.use("/fb", facebookAuthRoutes);

app.get("/", (req, res) => {
    res.send("Xin chào");
});

app.listen(8800, () => {
    console.log("Server is running!");
});
