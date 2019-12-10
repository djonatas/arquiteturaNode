const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        database: {
            name: 'development',
            connectionString: process.env.DatabasePath || 'https://its4schoolsapi.azurewebsites.net/api2/integration/token/information',
            options: {}
        }
    },
    test: {
        database: {
            name: 'test',
            connectionString: process.env.DatabasePath || 'https://its4schoolsapi.azurewebsites.net/api2/integration/token/information',
            options: {}
        }
    },
    homologation: {
        database: {
            name: 'homolog',
            connectionString: process.env.DatabasePath || 'https://its4schoolsapi.azurewebsites.net/api2/integration/token/information',
            options: {}
        }
    },
    production: {
        database: {
            name: 'production',
            connectionString: process.env.DatabasePath || 'https://its4schoolsapi.azurewebsites.net/api2/integration/token/information',
            options: {}
        }
    }
};

console.log(env);

module.exports = config[env];
