from firebase_config import db
import datetime

def save_violation(helmet_detected, number_plate):
    ref = db.reference("/violations")  # Firebase reference path
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    violation = {
        "helmet_detected": helmet_detected,
        "number_plate": number_plate,
        "timestamp": timestamp
    }
    
    ref.push(violation)
    print(f"🚨 Violation stored: {number_plate} at {timestamp}")

# Example Usage
save_violation(False, "WB20XXXX")
