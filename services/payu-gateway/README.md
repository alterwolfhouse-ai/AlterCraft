# AlterCraft PayU Gateway

This tiny service signs PayU Hosted Checkout requests without exposing the PayU salt in the browser.

## Required environment variables

- `PAYU_ENV`: `test` or `production`
- `PAYU_KEY`: PayU merchant key from Dashboard
- `PAYU_SALT`: PayU merchant salt from Dashboard
- `SITE_BASE_URL`: `https://www.altercraft.in`
- `PUBLIC_BASE_URL`: public URL of this service
- `ALLOWED_ORIGINS`: comma-separated allowed website origins
- `ORDER_NOTIFY_ENDPOINT`: optional FormSubmit endpoint for order notifications

## Endpoints

- `GET /health`
- `POST /payu/initiate`
- `POST /payu/success`
- `POST /payu/failure`

The website calls `/payu/initiate`, receives a signed PayU form payload, and posts the customer to PayU. PayU returns to `/payu/success` or `/payu/failure`, where the response hash is verified before redirecting the customer back to the website.
