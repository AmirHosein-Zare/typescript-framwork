const config = require('config');
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

export default function logger(){
    winston.add(
        new winston.transports.File({filename:'logfile.log'})
    ); 
    winston.add(
        new winston.transports.MongoDB({db: config.get('db')})
    );
    winston.handleExceptions(
        new winston.transports.Console({prettyprint: true}),
        new winston.transports.File({ filename: 'unhandleException.log' })
    );

    winston.exceptions.handle(new winston.transports.File({ filename: 'rejection.log' }));

    process.on('uncaughtException', (ex)=> {
        winston.error(ex);
    })

    process.on('unhandledRejection', (ex) => {
        winston.error(ex);
    })
}
