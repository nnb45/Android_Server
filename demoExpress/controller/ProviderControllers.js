const providerService = require('../services/ProviderServices');

exports.getAll = async () => {
    const result = await providerService.getAll();
    return result;
}
// http://localhost:3000/provider
exports.getDetail = async (id) => {
    const result = await providerService.getDetail(id);
    return result;
}