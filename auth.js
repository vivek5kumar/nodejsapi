// Here all have authentictation related 

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require("./models/person");

passport.use(new LocalStrategy(
    async (USERNAME, PASSWORD, done) => {
        // authentication logic here
        try {
            // console.log("Received credentials:", USERNAME, PASSWORD);
            const user = await Person.findOne({ username: USERNAME });
            if (!user)
                return done(null, false, { message: "Incorect username" });
            const passwordMatch = user.password == PASSWORD ? true : false;

            if (passwordMatch) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Incorect password" });
            }

        } catch (err) {
            return done(err);
        }

    }
));

module.exports = passport;