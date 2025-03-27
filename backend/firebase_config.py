import firebase_admin
from firebase_admin import credentials, db

# Load Firebase credentials from your google-services.json file
cred = credentials.Certificate("google-services.json")

# Initialize Firebase App
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://ai-mentor-girls.firebaseio.com/"
})

print("✅ Firebase Connected Successfully!")
