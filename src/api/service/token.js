class TokenService {
    async getCustomerByToken(token) {
        if (token === 'ABC1234ZWE') {
            return {
                id: '1234',
                name: 'Customer Name',
                token: 'ABC1234ZWE'
            };
        }
        return null;
    }
}

module.exports = TokenService;
