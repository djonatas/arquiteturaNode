const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        database: {
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 3000
        }
    },
    test: {
        database: {
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 3000
        }
    },
    homologation: {
        database: {
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 3000
        }
    },
    production: {
        database: {
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 80
        }
    }
};

console.log(env);
module.exports = config[env];
