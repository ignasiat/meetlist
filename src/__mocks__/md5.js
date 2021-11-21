let md5 = jest.createMockFromModule('fs');

md5 = (...theargs) => theargs.join('');

module.exports = md5;
