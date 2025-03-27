import qrcode

# Sample payment URL (e.g., a PayPal link or any payment link)
payment_link = "https://www.paypal.com/paypalme/YourUsername/50"  # Replace with actual payment URL

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(payment_link)
qr.make(fit=True)

# Create an image of the QR code
img = qr.make_image(fill='black', back_color='white')

# Save the image or display it
img.save("payment_qr_code.png")
img.show()
