const shopify_secret = require('../config/keys')["shopify-secret"];
const crypto = require('crypto');

function verifyWebhook(req, res, buf) {
    console.log("In verify webhook!");
    const shopHMAC = req.get('x-shopify-hmac-sha256');
    if (!shopHMAC)
        return;
    if (req.get('shopify-webhook-verified')) {
        throw "Unexpected webhook verified header";
    }
    const digest = crypto.createHmac('SHA256', shopify_secret)
        .update(buf)
        .digest('base64');
    if (digest == req.get('x-shopify-hmac-sha256')) {
        req.headers['shopify-webhook-verified'] = '200';
    }
}

module.exports = verifyWebhook;