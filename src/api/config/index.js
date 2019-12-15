const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        database: {
            name: 'development',
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 3000
        }
    },
    test: {
        database: {
            name: 'test',
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 3000
        }
    },
    homologation: {
        database: {
            name: 'homolog',
            connectionString: process.env.DatabasePath || 'mongodb+srv://userapp:IZj9Y1uNnPV5JuPU@cluster0-6cbyb.mongodb.net/pagarme?retryWrites=true&w=majority',
            options: { useNewUrlParser: true, useUnifiedTopology: true }
        },
        server: {
            port: 3000
        }
    },
    production: {
        database: {
            name: 'production',
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
