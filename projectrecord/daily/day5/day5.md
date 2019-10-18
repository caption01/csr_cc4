# Day 4 Deploy to Heroku.

## 8.00 - 9.00

    [x] install Heroku Command Line (CLI)
    [x] use heroku command to create heroku project.
        -   heroku create.
        -   heroku open (to open app.).
        -   git push heroku master (to push project into heroku).
        -   heroku logs --tail (to see error code).
    [x] change PORT 3000 to process.env.PORT (heroku port condition).
    [x] rewrite script in json script
        -   script npm start from nodemon to node server.js

    [x] create get path in back-end.
        -   get ('/').

![](https://github.com/caption01/csr_cc4/blob/master/projectrecord/daily/day5/getpath.JPG)

        -   git update and push to heroku.
        -   testting heroku connection.

![](https://github.com/caption01/csr_cc4/blob/master/projectrecord/daily/day5/deployheroku_1.JPG)

    [x] change front-end URL by heroku url and test front-end work.
        -   if you connect with backend success your front-end app. should work
            but please remain that we don't have database anymore.
        
## 9.00 - 9.30   : (database handle section step by step)

    [x] create heroku postgres database.
        -   create database by adons with free type.

![](https://github.com/caption01/csr_cc4/blob/master/projectrecord/daily/day5/herokuadons.JPG)

    [x] using heroku CLI handle with database.
        -   heroku addons (to watch what addons in your project)
        -   heroku pg:info (watch database info)
        -   heroku pg:psql  (connect database)

![](https://github.com/caption01/csr_cc4/blob/master/projectrecord/daily/day5/psql_1.JPG)

        -   create users table by sql commend. 
        -   change knex connect method by (read heroku database connect)

![](https://github.com/caption01/csr_cc4/blob/master/projectrecord/daily/day5/knexconfig.JPG)

        -   test app.
    
![](https://github.com/caption01/csr_cc4/blob/master/projectrecord/daily/day5/testapp_1.JPG)


## 9.30   : (Front-End deploy to Heroku)


